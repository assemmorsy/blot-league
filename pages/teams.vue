<template>
    <div class="container mt-3 text-center text-white" v-if="teams && !error">
        <h2>الفرق المشاركة في الدوري</h2>
        <div v-for="team in teams" :key="team.id" class="team-card ">
            <h4>
                فريق {{ team.name }}
            </h4>
            <div class="image-container">
                <img class="team-logo" :src="url + team.logo">
            </div>

            <div class="players-row">
                <div v-for="player, index in team.players" :key="player.id" class="player-container">
                    <div class=" player-image-container ">
                        <img class="player-image" :src="url + player.image">
                    </div>
                    <div>
                        <p class="m-0 p-0">
                            <span style="font-size:0.8rem ;">
                                {{ player.name }}
                            </span>
                            <br>
                            <span style="font-size:0.75rem ;">
                                {{ player.is_captain ? `كابتن الفريق` : `لاعب بالفريق` }}
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div v-if="error">
        {{ error }}
    </div>
</template>

<script setup >
const url = useStrapiUrl().slice(0, -4) // remove /api from strapi url 
const client = useStrapiClient()
const teams = ref(null)
const error = ref(null)
const league = ref(null)

onBeforeMount(() => {
    client(`/leagues/1/teams`, { method: 'GET' })
        .then((data) => {
            teams.value = data.teams
            league.value = {
                id: data.id,
                name: data.name,
                logo: data.logo
            }
        }).catch((err) => {
            console.error(err)
            error.value = "حدث عطل اثناء تحميل البيانات !"
        })
})
</script>

<style scoped>
.team-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid white;
    border-radius: 15px;
    padding: 20px;
    margin: 20px 0px;
}

.players-row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
    width: 100%;

}

.player-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.team-logo {
    height: 6rem;
    width: 6rem;
    object-fit: contain;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    overflow: hidden;
}

.player-image {
    height: 3.2rem;
    width: 3.2rem;
    object-fit: contain;
}

.player-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    overflow: hidden;
}
</style>