export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()
    const router = useRouter()
    if (to.path.includes("admin")) {
        // console.log("I am in admin ");
        // console.log(user.value);
        if (user.value?.aud === "authenticated") {
            // console.log(" I am also auth ");
            return;
        } else {
            // console.log(" I am not auth ");
            router.push({ name: "login" })
        }
    } else if (to.path.includes("login") || to.path.includes("signup")) {
        // console.log(" I am in login or sign up ");
        // console.log(user.value);

        if (user.value?.aud === "authenticated") {
            // console.log(" I am also auth ");
            router.push({ name: "admin" })
        } else {
            // console.log(" I am not auth ");
            return;
        }
    }
})