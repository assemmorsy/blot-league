export const getUser = () => {
    const supabase = useSupabaseClient()
    const user = useState("user", (): any => { return; })
    supabase.auth.onAuthStateChange((event, session) => {
        user.value = session?.user;
        // console.log(user.value);
    })
    return user
}
