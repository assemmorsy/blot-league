export const useLogin = () => {
    const error = useState("LoginError", (): null | string => { return null })
    const loading = useState("LoginLoading", () => { return false })
    const supabase = useSupabaseClient()

    const login = async (user: { email: string, password: string }) => {
        error.value = null; loading.value = true;
        const res = await supabase.auth.signInWithPassword({
            password: user.password,
            email: user.email
        })
        if (res.error) {
            console.error(res.error);
            error.value = res.error.message;
            loading.value = false;
        } else {
            error.value = null;
            loading.value = false;
            // console.log(res);
        }

    }
    return { error, loading, login }
}