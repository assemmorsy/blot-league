<template>
    <div class="card match-card ">
        <div class="background-color">
            <div class="row align-items-center justify-content-between m-2 rounded">
                <div>
                    <Icon name="fxemoji:studiomic" size="50" class="my-2" />
                </div>
                <div>
                    <h5> الاستديو التحليلى للجولة {{ match.tournament }}</h5>
                    <p class="m-0 fs-4 d-flex align-items-center justify-content-center">
                        <Icon name="fontisto:date" size="25" class="mx-1 text-secondary" />
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

.row {
    background-color: white;
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