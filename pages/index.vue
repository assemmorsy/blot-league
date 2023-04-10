<template>
    <div class="container mt-0">
        <h2 class="my-3 header">جدول المباريات</h2>
        <hr>
        <div ref="matchCards" class="match-cards mt-0" v-if="matches && matches.length > 0">
            <template v-for="match in orderdMatches" :key="match.id">
                <MatchCard :match="match" :id="match.id" />
                <!-- <MatchStudioCard :match="match" :id="match.id" /> -->
            </template>
        </div>
        <div v-else class="text-danger">{{ error }}</div>
    </div>
</template>

<script setup >
useHead({
    title: "2 جدول مباريات دورى سام للبلوت",
})
definePageMeta({
    name: "home"
})
const client = useStrapiClient()

const matches = ref(null)
const error = ref(null)
const matchCards = ref(null);

const orderdMatches = computed(() => {
    if (matches.value) {
        return matches.value.sort((a, b) => new Date(a.start_at) - new Date(b.start_at))
    } else {
        return null
    }
})


onBeforeMount(() => {
    client('/leagues/1/matches', { method: 'GET' })
        .then((data) => {
            matches.value = data
        }).catch((err) => {
            console.error(err)
            error.value = "لا توجد مباريات"
        })
})



const offsetOfComingMatch = computed(() => {
    if (matches.value) {
        let currentDate = new Date()
        for (let i = 0; i < orderdMatches.value.length; i++) {
            if (new Date(orderdMatches.value[i].start_at) >= currentDate) {
                return i - 1 >= 0 ? i - 1 : 0
            }
        }
    }
    return null
})


watchEffect(() => {
    if (matches.value) {
        if (matchCards.value && offsetOfComingMatch.value) {
            matchCards.value.scrollTop = matchCards.value.children[offsetOfComingMatch.value - 1].offsetTop;
        }
    }
})

</script>

<style scoped>
.header {
    color: #eee;
}

hr {
    color: #fff;
    border: 2px solid #fff;
}

.match-cards {
    padding: 10px;
    height: 70vh;
    overflow-y: scroll;
    scroll-behavior: smooth;

}

.container {
    text-align: center;
    margin-top: 1em;
    overflow-y: hidden;

}
</style>