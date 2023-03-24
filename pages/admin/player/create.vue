<template>
    <div class="container mt-3 ms-1 w-100">

        <div class="d-flex justify-content-between align-items-center">
            <h3>اضافة لاعب جديد</h3>
            <NuxtLink class="btn btn-primary" :to="{ name: 'all-players' }">
                جميع اللاعبين
                <Icon name="material-symbols:arrow-back-sharp" size="25" />
            </NuxtLink>
        </div>

        <form @submit.prevent="handleSubmit">

            <div class="alert alert-danger my-2" v-if="createError || uploadError">
                <p class="m-0"> {{ createError }}</p>
                <p class="m-0"> {{ uploadError }}</p>
            </div>
            <div class="mt-3">
                <label for="name" class="form-label">اسم اللاعب</label>
                <input type="text" name="name" id="name" required v-model="player.name" class="form-control"
                    autocomplete="off">
            </div>

            <div class="mt-3 d-flex justify-content-center align-items-center">
                <label for="image" class="form-label d-inline-block me-3" style="width: 19%">
                    الصورة الشخصية</label>
                <input ref="fileElm" type="file" class="form-control d-inline-block" name="image" id="image"
                    accept="image/*" @change="handleUploadImage" required />
                <button class="btn btn-danger ms-2 px-2" @click.prevent="removePhoto">
                    <Icon name="material-symbols:delete-forever-outline-rounded" size="25"></Icon>
                </button>
            </div>
            <div v-if="uploadedImage.url" class="mt-3 d-flex justify-content-center">
                <cropper ref="cropperELm" class="cropper" :src="uploadedImage.url" :debounce="false"
                    :stencil-props="{ handlers: {}, movable: false, resizable: false, }"
                    :stencil-size="{ width: 257, height: 257, }" image-restriction="stencil" />
            </div>

            <div class="my-3 mb-5">
                <button ty pe="submit" class="btn btn-primary" :disabled="createLoading || uploadLoading">
                    حفظ اللاعب
                    <Icon name="material-symbols:done-sharp" size="20" />
                    <span v-if="createLoading || uploadLoading">
                        <div class="spinner-grow spinner-grow-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </span>
                </button>
            </div>


        </form>
    </div>
</template>

<script setup >
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

definePageMeta({
    name: "create-player"
})
const cropperELm = ref(null);
const fileElm = ref(null);
const imageError = ref(null);
const player = ref({
    name: "",
    image: {
        url: '',
        path: "",
    },
    coordinates: {},
})


const uploadedImage = ref({
    file: null,
    url: null,
})


const removePhoto = () => {
    if (fileElm.value.value) {
        uploadedImage.value.file = null;
        uploadedImage.value.url = null;
        imageError.value = "برجاء اختيار صورة اللاعب";
        fileElm.value.value = ""
    }
};
const handleUploadImage = (e) => {
    if (e.target) {
        uploadedImage.value.file = e.target.files[0];
        uploadedImage.value.url = URL.createObjectURL(uploadedImage.value.file);
        imageError.value = null;
    }
};
const { create, error: createError, loading: createLoading } = usePlayer()
const { upload, loading: uploadLoading, error: uploadError } = useStorage("players");

const handleSubmit = async () => {
    if (!cropperELm.value) {
        imageError.value = "برجاء اختيار صورة اللاعب";
        return;
    }

    if (!player.value.name.trim()) {
        imageError.value = "برجاء ادخال اسم لاعب صحيح ";
        return;
    }
    let uploadedImageData = await upload(uploadedImage.value.file);
    if (uploadError.value || !uploadedImageData) {
        return;
    };
    const { coordinates } = cropperELm.value.getResult();
    player.value.coordinates = coordinates;
    player.value.image.url = uploadedImageData.url;
    player.value.image.path = uploadedImageData.path;
    await create(player.value);
    if (!createError.value) {
        navigateTo({ name: "all-players" })
    }
}

useHead({
    title: "اضافة لاعب جديد"
})
</script>

<style scoped>
.cropper {
    height: 25rem;
    background: #ddd;
}
</style>