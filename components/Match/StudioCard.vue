<template>
    <div class="card match-card position-relative text-white">
        <div class="row align-items-center justify-content-between background-color  px-2 py-1">
            <p class=" col col-5  m-0 text-start">الجولة {{ parseInt(match.tournament_name).toLocaleString('ar-Eg') }}</p>
            <div class="col col-2 d-flex justify-content-center align-items-center">
                <div v-if="match.url" @click.prevent="handleYoutubeClick" style="cursor: pointer;"
                    class="icon-bg d-flex justify-content-center align-items-center">
                    <Icon name="ion:logo-youtube" class="text-danger " size="23"></Icon>
                </div>
            </div>
            <p class="col col-5  m-0 text-end">
            <div class="d-flex align-items-center justify-content-end">
                {{ new Date(match.start_at).toLocaleDateString("ar-EG") }}
                <Icon name="fontisto:date" size="18" class="mx-1 text-white" />
            </div>
            </p>
        </div>

        <div class="row align-items-center justify-content-center ">
            <div class="col-3 d-flex justify-content-center align-items-center">
                <div class="icon-wrapper">
                    <Icon class="micro_icon" name="emojione-v1:studio-microphone" size="100" />
                </div>
            </div>
            <div class="col-9 text-center text-black d-flex flex-column align-items-between">
                <h5>{{ match.name }}</h5>
                <div class="analysts ">
                    <span class="mx-2">المحلل</span>
                    <div v-for="analyst in match.analysts" class="analyst">
                        {{ analyst.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 

<script setup>
const props = defineProps(["match"])

function handleYoutubeClick(event) {
    window.open(props.match.url, "_blank")
    event.stopImmediatePropagation()
}
</script>

<style scoped>
.icon-wrapper {
    height: 90%;
    border-radius: 50%;
    background-color: #ffcc33;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
}

.micro_icon {
    padding: 1rem;
}

.card {
    border: none;
}

.icon-bg {
    background-color: #fff;
    height: 2rem;
    width: 2rem;
    border-radius: 50% 50%;
}


.match-card {
    margin: 5px 0px;
    overflow: hidden;
}

.background-color {
    background: #ffb347;
    background-image: linear-gradient(90.1deg, rgba(84, 212, 228, 1) 0.2%, rgba(68, 36, 164, 1) 99.9%);
}

.analysts {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.analyst {
    background-color: #ffcc33;
    padding: 0.3rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.8rem;
}
</style>    