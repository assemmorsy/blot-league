<template>
    <div class="card col col-10 col-sm-4 col-md-3 col-lg-2 p-0 m-2 ">
        <div class="card-header">
            <h3 class="card-title">{{ player.name }}</h3>
        </div>
        <div class="d-flex justify-content-center my-3">
            <img :src="player.image.url" class="w-75 rounded-circle card-img">
        </div>
        <div class="card-footer">
            <button class="btn btn-warning mx-1">
                <Icon name="material-symbols:edit-rounded" size="25" />
            </button>
            <button class="btn btn-danger mx-1">
                <Icon name="bi:trash3-fill" size="25" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(["player"])
// console.log(props.player);
</script>

<style scoped>
.card-img {
    object-fit: cover;
    object-position: 50% 50%;
    display: block;
}
</style>