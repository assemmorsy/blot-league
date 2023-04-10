<template>
    <div>
        <div class="container mt-3" v-if="match && !error">
            <div class="row justify-content-between align-items-top mb-3  ">
                <div class="col col-5 text-center">
                    <p class="font-tournament m-0 p-0">
                        <span style="font-size:0.8rem ;">دورى سام للبلوت 2 </span>
                        <br />
                        <span class="text-warning">
                            الجولة {{ match.tournament }}
                        </span>
                    </p>
                </div>
                <div class="col col-2 d-flex justify-content-center align-items-center">
                    <a v-if="match.url" :href="`${match.url}`" target="_blank">
                        <div class="icon-bg d-flex justify-content-center align-items-center">
                            <Icon name="ion:logo-youtube" class="text-danger " size="23"></Icon>
                        </div>
                    </a>
                </div>
                <div class="col col-5 text-end font-tournament text-center">
                    <span style="font-size:0.8rem ;">
                        تاريخ المباراة
                        <!-- <Icon name="fontisto:date" size="18" class=" text-white" /> -->
                    </span>
                    <br />
                    <span class="text-warning">
                        {{ new Date(match.start_at).toLocaleDateString("ar-EG") }}
                    </span>
                </div>

            </div>

            <div class="row justify-content-between align-items-center">
                <div class="col col-4 d-flex justify-content-center align-items-center flex-column">
                    <div class="image-container">
                        <img class="team-logo" :src="url + match.team1.logo">
                    </div>
                </div>

                <div class="col col-4 text-center">
                    <div v-if="match.state === 'انتهت' && match.team1.score !== null && match.team2.score !== null">
                        <p class="mb-0 display-2 text-warning">
                            {{ match.team1.score }} <span class="text-white">-</span> {{ match.team2.score }}
                        </p>

                    </div>

                    <div v-else-if="match.state === 'لم تبدأ بعد'">
                        <img src="@/assets/images/vs.png" class="versus-logo" />

                    </div>

                    <div v-else>
                        <p class="mb-0 display-2 text-warning"
                            v-if="match.team1.score !== null && match.team2.score !== null">
                            {{ match.team1.score }} <span class="text-white">-</span> {{ match.team2.score }}
                        </p>
                    </div>

                </div>


                <div class="col col-4 d-flex justify-content-center align-items-center flex-column">
                    <div class="image-container">
                        <img class="team-logo" :src="url + match.team2.logo">
                    </div>
                </div>
            </div>

            <div class="row justify-content-between align-items-top text-center mb-3">
                <div class="col col-4">
                    <h3 class="text-white">{{ match.team1.name }}</h3>
                </div>
                <div class="col col-4 ">
                    <div class="state-slug-div">
                        <p class="m-0 state-slug slug-not-yet" v-if="match.state === 'لم تبدأ بعد'">
                            لم تبدأ بعد
                        </p>

                        <p class="m-0 state-slug slug-live" v-else-if="match.state === 'مباشر'">
                            مباشر
                        </p>

                        <p class="m-0 state-slug slug-finished" v-else>
                            انتهت
                        </p>
                    </div>
                </div>
                <div class="col col-4 ">
                    <h3 class="text-white">{{ match.team2.name }}</h3>
                </div>

            </div>

            <div class="row text-white " v-if="match.team1.players?.length > 0 && match.team1.players?.length > 0">
                <hr class="text-white">
                <h5 class="text-center text-white">لاعبي الفريقين</h5>
                <div class="col col-6 text-start">
                    <div v-for="player, index in match.team1.players" :key="player.id"
                        class="row justify-content-end align-items-bottom mb-3">
                        <div class="col col-2 player-image-container ">
                            <img class="player-image" :src="url + player.image">
                        </div>
                        <div class="col col-8 font-tournament">
                            <p class=" m-0 p-0">
                                <span style="font-size:0.8rem ;">
                                    {{ player.name }}
                                </span>
                                <br>
                                <span style="font-size:0.75rem ;">
                                    {{ index === 0 ? `كابتن الفريق` : `لاعب بالفريق` }}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class=" col col-6 text-end">
                    <div v-for="player, index in match.team2.players" :key="player.id"
                        class="row justify-content-start align-items-bottom mb-3">
                        <div class="col col-8 font-tournament">
                            <p class=" m-0 p-0">
                                <span style="font-size:0.8rem ;">
                                    {{ player.name }}
                                </span>
                                <br>
                                <span style="font-size:0.75rem ;">
                                    {{ index === 0 ? `كابتن الفريق` : `لاعب بالفريق` }}
                                </span>
                            </p>
                        </div>
                        <div class="col col-2 player-image-container ">
                            <img class="player-image" :src="url + player.image">
                        </div>

                    </div>
                </div>
            </div>

            <div class="text-center text-white" v-if="match.state === 'انتهت'">
                <hr>
                <table class="table table-striped text-white">
                    <tr>
                        <th></th>
                        <th>
                            <h5 class="text-center">احصائيات المباراة</h5>
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <div class="row">
                                <p class=" col col-5 team-name p-0 m-0 d-flex justify-content-center align-items-center ">{{
                                    match.team1.name }}
                                </p>
                                <div class="col col-2">
                                    <p class="p-0 m-0 fs-1">
                                        <span class="position-relative v">V</span>
                                        <span class="position-relative s">S</span>
                                    </p>
                                </div>
                                <p class=" col col-5 team-name p-0 m-0 d-flex justify-content-center align-items-center ">
                                    {{ match.team2.name }}</p>

                            </div>
                        </td>
                    </tr>
                    <tr v-for="_, index in match.team1.statistics" :key="index">
                        <td class="data">{{ match.team1.statistics[index].value }}</td>
                        <td class="name">{{ match.team1.statistics[index].name }}</td>
                        <td class="data">{{ match.team2.statistics[index].value }}</td>
                    </tr>
                </table>
            </div>

            <div class="text-center text-white my-3 " v-if="match.referees && match.referees.length > 0">
                <hr>
                <h3>حكام المباراة</h3>
                <div class="row mt-4">
                    <div class="col col-4"></div>
                    <div class="col col-4 d-flex flex-column justify-content-center align-items-center">
                        <div class=" player-image-container ">
                            <img class="player-image" :src="url + match.referees[0].image">
                        </div>
                        <div class=" font-tournament">
                            <p class=" m-0 p-0">
                                <span style="font-size:0.8rem ;">
                                    {{ match.referees[0].name }}
                                </span>
                                <br>
                                <span style="font-size:0.75rem ;">
                                    حكم الطاولة
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="col col-4"></div>
                </div>
                <div class="row">
                    <div class="col col-5  d-flex flex-column justify-content-center align-items-center">
                        <div class=" player-image-container ">
                            <img class="player-image" :src="url + match.referees[1].image">
                        </div>
                        <div class=" font-tournament">
                            <p class=" m-0 p-0">
                                <span style="font-size:0.8rem ;">
                                    {{ match.referees[1].name }}
                                </span>
                                <br>
                                <span style="font-size:0.75rem ;">
                                    حكم مساعد
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="col col-2"></div>
                    <div class="col col-5 d-flex flex-column justify-content-center align-items-center">
                        <div class=" player-image-container ">
                            <img class="player-image" :src="url + match.referees[2].image">
                        </div>
                        <div class="font-tournament">
                            <p class=" m-0 p-0">
                                <span style="font-size:0.8rem ;">
                                    {{ match.referees[2].name }}
                                </span>
                                <br>
                                <span style="font-size:0.75rem ;">
                                    حكم النشرة
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="error" class="text-danger text-center mt-4">
            تعذر تحميل بيانات هذه المباراة
        </div>
    </div>
</template>

<script setup >
const route = useRoute()
const matchId = route.params.id;
const url = useStrapiUrl().slice(0, -4) // remove /api from strapi url 
const client = useStrapiClient()
const match = ref(null)
const error = ref(null)
onBeforeMount(() => {
    client(`matches/${matchId}`, { method: 'GET' })
        .then((data) => {
            match.value = data
        }).catch((err) => {
            console.error(err)
            error.value = "هذه المباراة غير موجودة"
        })

})
</script>

<style scoped>
span.v {
    bottom: 4px;
    color: rgba(255, 209, 67, 1);
}

span.s {
    left: -3px;
    color: rgba(255, 145, 83, 1);

}

table {
    border-collapse: separate;
    border-spacing: 7px;

}

.team-name {
    color: #EEEEEE;
    background-color: #CF0A0A;
    border-radius: 5px 5px;
}

td.name {
    color: #000000;
    background-color: #fcaf75;
    border-radius: 5px 5px;
    padding: 0px 5px;
    position: relative;
    right: -2px;
}

td.data {
    color: #000000;
    background-color: #EEEEEE;
    border-radius: 5px 5px;
}



.font-tournament {
    font-size: 0.9rem;
    color: rgb(201, 201, 201);
}


.icon-bg {
    background-color: #fff;
    height: 2rem;
    width: 2rem;
    border-radius: 50% 50%;
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

.state-slug {
    padding: 2px 15px;
    font-size: 0.9rem;
    display: inline-block;
    border-radius: 5px;
}

.slug-not-yet {
    color: white;
    background-color: #ffb347;
}

.slug-finished {
    color: #000;
    background-color: gainsboro;
}

.slug-live {
    color: #fff;
    background-color: red;
}


.versus-logo {
    height: 3rem;
    width: 3rem;
}
</style>