<template>
    <div class="card match-card">
        <div class="row align-items-center justify-content-between  background-color rounded px-2 py-1">
            <p class="col col-6 m-0 me-auto">الجولة {{ match.tournament }}</p>
            <p class="col col-6 m-0">
                <Icon name="fontisto:date" size="15" class="mx-1 text-secondary" />
                {{ match.startAt.toLocaleDateString("ar-EG") }}
            </p>
        </div>

        <div class="row align-items-center justify-content-center m-2">
            <div class="col-4 text-center">
                <img :src="match.team1.imgUrl" class="team-logo rounded-3" alt="team logo">
                <p class="mb-0"> {{ match.team1.name }} </p>
            </div>
            <div class="col-4 text-center" v-if="match.score.team1 !== '' && match.score.team2 !== ''">
                <div class="scores">
                    <p class="mb-0 fs-1 text-warning">
                        {{ match.score.team1 }} - {{ match.score.team2 }}
                    </p>
                </div>
                <p class="rounded-5 mb-0 bg-secondary text-white">انتهت</p>
            </div>

            <div class="col-4 text-center" v-else>
                <div class="scores">
                    <p class="mb-0 fs-1 text-warning">Vs</p>
                </div>
                <p class="border rounded-5 mb-0">لم تبدأ بعد</p>
            </div>
            <div class="col-4 text-center">

                <img :src="match.team2.imgUrl" class="team-logo rounded-3" alt="team logo">
                <p class="mb-0"> {{ match.team2.name }} </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(["match"])

</script>

<style scoped>
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
</style>    