<template>
    <div class="card match-card border-0">
        <div class="background-color">
            <div class="row align-items-center justify-content-between m-2 rounded">

                <div class="col col-2">
                    <Icon name="fxemoji:studiomic" size="50" class="my-2" />
                </div>
                <div class="col col-9 text-start">
                    <h6> الاستديو التحليلى للجولة {{ match.tournament }}</h6>
                    <p class="m-0 fs-6 d-flex align-items-center justify-content-start">
                        <Icon name="fontisto:date" size="15" class="mx-1 text-secondary" />
                        {{ match.startAt.toLocaleDateString("ar-EG") }}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const props = defineProps(["match"])

</script>

<style scoped>
.match-card {
    margin: 5px 0px;
    overflow-y: auto;
}



.background-color {
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);


}
</style>    