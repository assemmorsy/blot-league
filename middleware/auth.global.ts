export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()
    const router = useRouter()
    if (to.path.includes("admin")) {
        if (user.value) {
            return;
        } else {
            router.push("/admin").catch((err) => {
                console.log("================================================");
                console.log(err);
                console.log("================================================");
            })
        }
    } else if (to.path.includes("login") || to.path.includes("signup")) {
        if (user.value) {
            router.push("/admin").catch((err) => {
                console.log("================================================");
                console.log(err);
                console.log("================================================");
            })
        } else {
            return;

        }
    }
})