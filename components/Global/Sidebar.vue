<template>
    <div class="offcanvas offcanvas-end background-grad" tabindex="-1" id="offcanvasNavbar" ref="offcanvasNavbar">
        <div class="sidebar-header">
            <div>
                <img class="sidebar-logo rounded-circle " src="@/assets/images/logo.jpg">
                <h5 class=" offcanvas-title">دورى سام للبلوت </h5>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <li class="nav-item ">
                    <a @click="handleNvigation('/')" :class="route.path === '/' ? 'active' : ''"
                        class="nav-link pointer d-flex align-items-center">
                        <Icon name='mdi:table-large' class="nav-item-icon" size="35" />
                        <span class="mx-2"> جدول المباريات</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a @click="handleNvigation('/laws')" :class="route.path.includes('/laws') ? 'active' : ''"
                        class="nav-link pointer d-flex align-items-center ">
                        <Icon name='codicon:law' class="nav-item-icon" size="35" />
                        <span class="mx-2"> قوانين الدورى</span>
                    </a>
                </li>

            </ul>

            <div v-if="user" class="text-center mt-5">
                <p class="m-0">المستخدم</p>
                <p>{{ user.email }}</p>
                <button @click.prevent="handleLogout" class="btn btn-primary" :disabled="loading">تسجيل خروج</button>
                <p class="text-danger" v-if="error">{{ error }}</p>
            </div>
            <button type="button" class="btn-info rounded-3 text-white-50" @click="handleNvigation('/admin')">
                <Icon name="ic:sharp-mode-edit" size="25" />
            </button>

        </div>
    </div>
</template>

<script setup >
const offcanvasNavbar = ref(null)
const route = useRoute()
const { $bootstrap } = useNuxtApp()
let bt_offcanvas = null;
onMounted(() => {
    bt_offcanvas = new $bootstrap.Offcanvas(offcanvasNavbar.value)
})
const handleNvigation = (path) => {
    bt_offcanvas.hide()
    navigateTo(path);
}
const user = getUser()
const { error, loading, logout } = useLogout()
const handleLogout = async () => {
    await logout();
    if (!error.value) {
        handleNvigation("/")
    }
}
</script>

<style scoped>
.btn-info {

    height: 2rem;
    width: 2rem;

    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pointer {
    cursor: pointer !important;
    font-size: 1.5em;

}

.nav-item-icon {
    color: rgb(43, 42, 42);
}


.btn-close {
    background-color: #fff;
}

.offcanvas-title {
    font-size: 2em;
    color: black;
}

.sidebar-logo {
    width: 10em;
    height: 10em;
    object-fit: cover;
    object-position: 50% 50%;
}

.sidebar-header {
    text-align: center;
    padding-top: 1em;
    position: relative;
}

.sidebar-header>.btn-close {
    position: absolute;
    top: 1em;
    right: 1em;
    width: 2em;
    height: 2em;
}
</style>