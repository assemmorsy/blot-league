<template>
    <div class="row justify-content-center align-items-center">
        <ClientOnly>

            <form @submit.prevent="handleSubmit" class="text-start col col-10 col-md-5  m-5  m-md-0 ">
                <h3 class="text-center">تسجيل مستخدم جديد</h3>
                <div class="mb-3">
                    <label for="email" class="form-label">الايميل</label>
                    <input type="email" class="form-control" autocomplete="false" required v-model="user.email" name="email"
                        id="email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">كلمة المرور</label>
                    <input type="password" class="form-control" required name="password" v-model="user.password"
                        id="password">
                </div>
                <button type="submit" class="btn btn-primary" :disabled="loading">تسجيل</button>
                <p class="text-danger" v-if="error">{{ error }}</p>
            </form>
        </ClientOnly>

        <img class="col col-6 d-none d-md-block d-inline-block" src="@/assets/images/login.svg" alt="Login ">
    </div>
</template>

<script setup lang="ts">

const user = ref({
    email: "",
    password: ""
})
const router = useRouter()
const { error, loading, signup } = useSignup()
const handleSubmit = async () => {
    await signup(user.value);
    console.log(error.value);

    if (!error.value) {
        router.push("/admin/player")
    }
}
</script>

<style scoped>
img {
    height: 70vh;
}
</style>