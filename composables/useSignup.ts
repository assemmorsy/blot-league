export const useSignup = () => {
    const error = useState("signupError", (): null | string => { return null })
    const loading = useState("signupLoading", () => { return false })
    const supabase = useSupabaseClient()

    const signup = async (user: { email: string, password: string }) => {
        error.value = null; loading.value = true;
        const res = await supabase.auth.signUp({
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
            console.log(res);
        }
        return;

    }
    return { error, loading, signup }
}