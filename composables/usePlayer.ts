type Player = {
    name: string;
    image: {
        url: string;
        path: string;
    };
    coordinates: {
        top: Number;
        left: Number;
        height: Number;
        width: Number
    }
}

export const usePlayer = () => {
    const error = useState("playerError", (): null | string => { return null })
    const loading = useState("playerLoading", () => { return false })
    const create = async (player: Player) => {
        error.value = null; loading.value = true;

        const imageBody = {
            coordinates: player.coordinates,
            imagePath: player.image.path,
            imageUrl: player.image.url,
        }

        const { data: createdImage, error: imageError } = await useFetch("/api/image", {
            method: "POST",
            body: imageBody
        })

        console.log(createdImage);

        if (imageError.value) {
            console.log(imageError.value);
            error.value = "تعذر حفظ صورة اللاعب برجاء المحاولة مرة اخري";
            loading.value = false;
            return;
        }

        const { data: createdPlayer, error: PlayerError } = await useFetch("/api/player", {
            method: "post",
            body: {
                name: player.name,
                imageId: createdImage.value?.id
            }
        })

        if (PlayerError.value) {
            console.log(PlayerError.value);
            error.value = "تعذر حفظ اللاعب برجاء المحاولة مرة اخري";
            await useFetch(`/api/image/${createdImage.value?.id}`, {
                method: "DELETE",
            })
            loading.value = false;
            return;
        }

        console.log(createdPlayer);
        error.value = null; loading.value = false;
        return createdPlayer;
    }
    const getAllPlayers = async () => {
        error.value = null; loading.value = true;
        try {
            const response = await $fetch("/api/player/", {
                method: "GET",
            })
            // console.log(response);
            error.value = null; loading.value = false;
            return response;
        } catch (err) {
            console.log(err);
            error.value = "تعذر تحميل اللاعبين برجاء المحاولة مرة اخري";
            loading.value = false;
        }
    }
    const remove = async (player: { id: number; imageId: number }) => {
        error.value = null; loading.value = true;
        const { data: deletedPlayer, error: deletePlayerError } = await useFetch(`/api/player/${player.id}`, {
            method: "DELETE",
        })

        console.log(deletedPlayer);

        if (deletePlayerError.value) {
            console.log(deletePlayerError.value);
            error.value = "تعذر حذف اللاعب اللاعب برجاء المحاولة مرة اخري";
            loading.value = false;
            return;
        }

        const { data: deletedImage, error: deleteImageError } = await useFetch(`/api/image/${player.imageId}`, {
            method: "DELETE",
        })

        if (deleteImageError.value) {
            console.log(deleteImageError.value);
            error.value = "تعذر حذف صورة اللاعب اللاعب برجاء المحاولة مرة اخري";
            loading.value = false;
            return;
        }

        error.value = null; loading.value = false;
        return { deletedPlayer };
    }
    const getPlayer = async (playerId: number) => {
        error.value = null; loading.value = true;
        const { data: Player, error: getError } = await useFetch(`/api/player/${playerId}`, {
            method: "GET",
        })

        console.log(Player);

        if (getError.value) {
            console.log(getError.value);
            error.value = "هذا اللاعب غير موجود!";
            loading.value = false;
            return;
        }
        error.value = null; loading.value = false;
        return Player;
    }

    return {
        error, loading, create, getAllPlayers, remove, getPlayer
    }


}