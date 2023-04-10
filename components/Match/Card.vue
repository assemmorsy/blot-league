<template>
    <div class="card match-card position-relative" @click.prevent="handleMatchCardClick">
        <div class="row align-items-center justify-content-between background-color  px-2 py-1">
            <p class=" col col-5  m-0 text-start">الجولة {{ parseInt(match.tournament.name).toLocaleString('ar-Eg') }}</p>
            <div class="col col-2 d-flex justify-content-center align-items-center">
                <div v-if="match.url" @click.prevent="handleYoutubeClick" style="cursor: pointer;"
                    class="icon-bg d-flex justify-content-center align-items-center">
                    <Icon name="ion:logo-youtube" class="text-danger " size="23"></Icon>
                </div>
            </div>
            <p class="col col-5  m-0 text-end">
            <div class="d-flex align-items-center justify-content-end">
                {{ new Date(match.start_at).toLocaleDateString("ar-EG") }}
                <Icon name="fontisto:date" size="18" class="mx-1 text-secondary" />
            </div>
            </p>
        </div>

        <div class="row align-items-center justify-content-center mt-2">
            <div class="col-4 text-center">
                <img :src="`${url}${match.team_1.logo}`" class="team-logo rounded-3" alt="team logo">
            </div>
            <div class="col-4 text-center">
                <div v-if="match.state === 'انتهت' && match.team_1.score !== null && match.team_2.score !== null">
                    <div class="scores">
                        <p class="mb-0 text-warning" style="font-size: 2.7rem;">
                            {{ match.team_1.score }} <span class="text-black">-</span> {{ match.team_2.score }}
                        </p>
                    </div>
                </div>

                <div class="scores" v-else-if="match.state === 'لم تبدأ بعد'">
                    <img src="@/assets/images/vs.png" class="versus-logo" />
                </div>


                <div v-else-if="match.state === 'مباشر'">
                    <div class="scores">
                        <Spanner />
                    </div>
                </div>
            </div>
            <div class="col-4 text-center">
                <img :src="`${url}${match.team_2.logo}`" class="team-logo rounded-3" alt="team logo">
            </div>
        </div>

        <div class="row align-items-center justify-content-center mb-3 ">
            <div class="col-4 text-center">
                <p class="mb-0"> {{ match.team_1.name }} </p>
            </div>
            <div class="col-4 text-center">

            </div>
            <div class="col-4 text-center">
                <p class="mb-0"> {{ match.team_2.name }} </p>
            </div>
        </div>

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
</template>

<script setup>
const props = defineProps(["match"])
const url = useStrapiUrl().slice(0, -4) // remove /api from strapi url 

function handleMatchCardClick(event) {
    if (props.match.state === "مباشر" && props.match.url) {
        window.open(props.match.url, "_blank")
    } else {
        navigateTo(`/match/${props.match.id}`)
    }
}

function handleYoutubeClick(event) {
    window.open(props.match.url, "_blank")
    event.stopImmediatePropagation()

}
</script>

<style scoped>
.card {
    border: none;
}

.icon-bg {
    background-color: #fff;
    height: 2rem;
    width: 2rem;
    border-radius: 50% 50%;
}

.team-logo {
    height: 4rem;
}

.match-card {
    margin: 5px 0px;
    overflow: hidden;
}

.background-color {
    background: #ffb347;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ffcc33, #ffb347);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ffcc33, #ffb347);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.state-slug {
    padding: 2px 15px;
    font-size: 0.9rem;
    display: inline-block;
    border-radius: 5px 5px 0px 0px;
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


.state-slug-div {
    position: absolute;
    width: 100%;
    bottom: 0px;
}

.versus-logo {
    height: 3rem;
    width: 3rem;
}
</style>    