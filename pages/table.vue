<template>
    <div>
        <div class="main text-center m-0 p-0" v-if="table && league && !error">
            <div class="league-logo-div">
                <h3>جدول ترتيب {{ league.name }}</h3>
                <img class="league-logo" v-if="league.image" :src="url + league.image" alt="League Logo">
                <table class="table table-striped table-hover mt-2">
                    <tr>
                        <th class="header">
                            الفريق
                        </th>
                        <th class="header">
                            لعب
                        </th>
                        <th class="header">
                            فاز
                        </th>
                        <th class="header">
                            خسر
                        </th>
                        <th class="header">
                            أبناط
                        </th>
                        <th class="header">
                            نقاط
                        </th>
                    </tr>
                    <tr v-for="team, index in table" :key="team.id">
                        <td class="data text-start team">
                            <span class="index">
                                {{ index + 1 }}
                            </span>
                            {{ team.name }}
                        </td>
                        <td class="data">{{ team.play }}</td>
                        <td class="data">{{ team.win }}</td>
                        <td class="data">{{ team.lost }}</td>
                        <td class="data">{{ team.abnat }}</td>
                        <td class="data">{{ team.totalScore }}</td>
                    </tr>
                </table>
            </div>

        </div>
        <div v-else class=" mt-3 text-center text-danger fs-3">
            {{ error }}
        </div>
    </div>
</template>

<script setup >
const client = useStrapiClient()
const table = ref(null)
const league = ref(null)
const error = ref(null)
const url = useStrapiUrl().slice(0, -4) // remove /api from strapi url 

onBeforeMount(() => {
    client('/leagues/1/summary', { method: 'GET' })
        .then((data) => {
            table.value = data.table
            league.value = data.league
        }).catch((err) => {
            console.error(err)
            error.value = "تواجد عطل اثناء تحميل جدول الترتيب "
        })
})


useHead({
    title: "جدول ترتيب دورى سام للبلوت"
})
definePageMeta({
    name: "table"
})

</script>

<style scoped>
table {
    border-collapse: separate;
    border-spacing: 7px;

}


.header {
    color: #EEEEEE;
    background-color: #CF0A0A;
    border-radius: 5px 5px;
}

.index {
    color: #000000;
    background-color: #ff8a31;
    border-radius: 5px 5px;
    padding: 0px 5px;
    position: relative;
    right: -2px;
}

.data {
    color: #000000;
    background-color: #EEEEEE;
    border-radius: 5px 5px;
}

.league-logo-div {
    color: #EEEEEE;
    padding: 1rem 0px;

}
</style>