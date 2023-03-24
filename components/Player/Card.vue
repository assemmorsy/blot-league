<template>
    <div class="card col col-10 col-sm-4 col-md-3 col-lg-2 p-0 m-2"
        @click.prevent="navigateTo({ path: `player/${player.id}` })">
        <div class="card-header ">
            <h3 class="card-title m-0">{{ player.name }}</h3>
        </div>
        <div class="d-flex justify-content-center my-3">
            <img :src="player.image.url" class="w-75 rounded-5 card-img">
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(["player"])
</script>

<style scoped>
.card-img {
    object-fit: cover;
    object-position: 50% 50%;
    display: block;
}
</style>