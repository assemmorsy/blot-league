<template>
    <nav class="navbar  sticky-top background-grad ">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/">
                <img class="rounded-circle " style="width:50px;height: 50px;" src="@/assets/images/logo.jpg" alt="">
                دورى سام للبلوت
            </NuxtLink>


            <ClientOnly>

                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <GlobalSidebar />
            </ClientOnly>

        </div>
    </nav>
</template>

<script setup>

</script>   

<style  scoped>
.background-grad {
    background: #FDC830;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F37335, #FDC830);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F37335, #FDC830);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>