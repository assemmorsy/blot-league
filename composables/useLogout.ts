export const useLogout = () => {
    const error = useState("logoutError", (): null | string => { return null })
    const loading = useState("logoutLoading", () => { return false })
    const supabase = useSupabaseClient()

    const logout = async () => {
        try {
            error.value = null; loading.value = true;
            const res = await supabase.auth.signOut()
            if (res.error) {
                throw Error(res.error.message)
            }
            error.value = null; loading.value = false;
            console.log(res);
        } catch (err) {
            console.error(err);
            error.value = "تعذر تسجيل الخروج حاليا برجاء المحاولة مرة اخري في وقت لاحق .";
            loading.value = false;
        }
    }
    return { error, loading, logout }
}