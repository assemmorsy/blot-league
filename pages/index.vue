<template>
    <div class="container">
        <h2>جدول المباريات</h2>
        <div class="match-cards">
            <template v-for="match in matches" :key="match.id">
                <MatchCard v-if="match.type === 'match'" :match="match" />
                <MatchStudioCard v-else :match="match" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({ title: "دورى سام للبلوت" })
const matches = useMatches();

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