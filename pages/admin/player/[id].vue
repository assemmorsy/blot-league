<template>
    <div v-if="player" class="container">
        <div class="d-flex flex-column justify-content-around align-items-center mt-1">
            <h2 class="m-4">{{ player.name }}</h2>
            <img :src="player.image.url" alt="profile image" class="rounded-4 profile-img">
            <div class="mt-4">
                <button class="btn btn-warning" @click.prevent="handleEdit" :disabled="playerLoading || removeLoading">
                    <Icon name="mdi:account-edit" size="25" />
                </button>
                <button class="btn btn-danger ms-3" @click.prevent="handleDelete"
                    :disabled="playerLoading || removeLoading">
                    <Icon name="bi:trash3" size="25" />
                </button>
            </div>
        </div>
    </div>
    <div v-else class="d-flex justify-content-center align-items-center flex-column">
        <h4 class="mt-5">هذا اللاعب غير موجود</h4>
        <Icon name="ic:sharp-search-off" size="150" />
    </div>
</template>

<script setup >


const player = ref(null);
const route = useRoute();
const { remove: removePlayer, getPlayer, error: playerError, loading: playerLoading } = usePlayer()
const { remove: removeImage, loading: removeLoading, error: removeError } = useStorage("players");

var _id = route.params.id && Number(route.params.id);
const title = computed(() => {
    if (player.value) {
        return `${player.value.name}`
    } else {
        return `هذا اللاعب غير موجود`
    }
})
useHead({
    title: title.value
})


if (!_id || isNaN(_id)) {
    throw createError({
        statusCode: 400,
        statusMessage: "Invalid Id Number"
    })
} else {
    player.value = await getPlayer(_id);
}
const handleDelete = async () => {
    if (confirm(`هل انت متأكد من انك تريد حذف اللاعب : ${player.value.name}`)) {
        await removePlayer(player.value)
        if (!playerError.value) {
            await removeImage(player.value.image.path);
            if (!removeError.value) {
                router.push({ name: "all-players" })
            }
        }
    }
}
</script>

<style scoped>
.profile-img {
    height: 10rem;
    width: 10rem;
    object-fit: cover;
    object-position: 50% 50%;
}
</style>