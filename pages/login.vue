<template>
    <div class="row justify-content-center align-items-center">
        <form @submit.prevent="handleSubmit" class="text-start col col-10 col-md-5 m-5 m-md-0   ">
            <h3 class="text-center">دخول الي لوحة التحكم</h3>
            <div class="mb-3">
                <label for="email" class="form-label">الايميل</label>
                <input type="email" class="form-control" v-model="user.email" name="email" id="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">كلمة المرور</label>
                <input type="password" class="form-control" name="password" v-model="user.password" id="password">
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading">دخول</button>
            <p class="text-danger" v-if="error">{{ error }}</p>
        </form>
        <img class="col col-6 d-none d-md-block d-inline-block " src="@/assets/images/login.svg" alt="Login ">

    </div>
</template>

<script setup lang="ts">
useHead({
    title: "تسجيل دخول"
})
definePageMeta({
    name: "login"
})

const user = ref({
    email: "",
    password: ""
})
const router = useRouter()
const { error, loading, login } = useLogin()
const handleSubmit = async () => {
    await login(user.value);
    if (!error.value) {
        // console.log("I am logedin ");
        router.push({ name: "admin" })
        // navigateTo("/admin")
    }
}
</script>

<style scoped>
img {
    height: 70vh;
}
</style>