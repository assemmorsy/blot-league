<template>
    <div class="container mt-4 ms-1">
        <div class="d-flex justify-content-between align-items-center">
            <h3>جميع اللاعبين </h3>
            <NuxtLink class="btn btn-primary" :to="{ name: 'create-player' }">اضافة لاعب
                <Icon name="material-symbols:add" size="20" />
            </NuxtLink>
        </div>
        <div class="mt-3 row justify-content-between align-items-center text-center w-75 m-auto ">
            <input type="text" class="form-control " name="search" id="search" v-model="search"
                placeholder="ابحث هنا عن لاعب باستخدام اسمه ">
        </div>
        <div class="container text-center my-3 mx-auto" v-if="filteredPlayers && filteredPlayers.length > 0">
            <div class="row m-auto justify-content-around">
                <PlayerCard v-for="player in filteredPlayers " :key="player.id" :player="player" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    name: "all-players",
})
useHead({
    title: "جميع اللاعبين"
})

const search = ref("")
const players = ref(null)
const filteredPlayers = computed(() => {
    if (players.value && players.value.length > 0) {
        return players.value.filter((pl) => {
            return pl.name.toLowerCase().trim().includes(search.value.toLowerCase().trim())
        })
    } else {
        return null;
    }
})
const { error, getAllPlayers, loading } = usePlayer()
onBeforeMount(async () => {
    players.value = await getAllPlayers();
})

</script>

<style scoped></style>