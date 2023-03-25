<template>
    <div class="container">
        <h2>جدول المباريات</h2>
        <div class="match-cards">
            <template v-for="match in matches" :key="match.id">
                <MatchCard v-if="match.type === 'match'" :match="match" :id="match.id" />
                <MatchStudioCard v-else :match="match" :id="match.id" />
            </template>
        </div>
    </div>
</template>

<script setup >


useHead({
    title: "جدول مباريات دورى سام للبلوت"
})
definePageMeta({
    name: "home"
})



const matches = useMatches();

const offsetOfComingMatch = computed(() => {
    let currentDate = new Date()
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i]
        if (match.startAt >= currentDate) {
            return i
        }
    }
    return null
})
let cards = ref(null);
let parent = ref(null);
onMounted(() => {
    cards.value = document.getElementsByClassName("match-card")
    parent.value = cards.value[0].parentElement;
})

watchEffect(() => {
    if (cards.value && parent.value && offsetOfComingMatch.value) {
        parent.value.scrollTop = cards.value[offsetOfComingMatch.value - 1].offsetTop;
    }
})

</script>

<style scoped>
.match-cards {
    padding: 10px;
    height: 70vh;
    overflow-y: scroll;

}

.container {
    text-align: center;
    margin-top: 1em;
    overflow-y: hidden;

}
</style>