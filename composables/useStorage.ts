export const useStorage = (folder: string) => {
    const error = useState("imageError", (): null | string => { return null })
    const loading = useState("imageLoading", () => { return false })
    const supabase = useSupabaseClient()
    const config = useRuntimeConfig();
    const upload = async (file: File) => {
        error.value = null;
        loading.value = true;
        let unique = new Date().toJSON().replace(/:/g, "");
        let fileName = `(${file.name})-(${unique})`
        const { data, error: err } = await supabase.storage.from("images").upload(`${folder}/${fileName}`, file)
        if (err) {
            console.error(err);
            error.value = err.message;
            loading.value = false;
            return;
        } else {
            error.value = null;
            loading.value = false;
            return { path: data.path, url: `${config.SUPABASE_STORAGE_URL}/storage/v1/object/public/images/${data.path}` }
        }
    }
    const remove = async (path: string[]) => {
        error.value = null;
        loading.value = true;
        const { data, error: err } = await supabase.storage.from("images").remove(path);

        if (err) {
            console.error(err);
            error.value = err.message;
            loading.value = false;
            return false;
        } else {
            loading.value = false;
            if (data.length > 0) {
                error.value = null;
                return true
            } else {
                error.value = "هذه الصورة غير موجودة بالاساس";
                return false
            }

        }
    }

    const replace = async (path: string, file: File) => {
        error.value = null;
        loading.value = true;
        const { data, error: err } = await supabase.storage.from("images").update(path, file)

        if (err) {
            console.error(err);
            error.value = err.message;
            loading.value = false;
            return -1;
        } else {
            error.value = null;
            loading.value = false;
            return { path: data.path, url: `${config.SUPABASE_STORAGE_URL}/storage/v1/object/public/images/${data.path}` }
        }
    }
    return {
        error, loading, upload, remove, replace
    }
}