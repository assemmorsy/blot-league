<template>
    <nav class="navbar sticky-top background-grad ">
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


    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(255, 209, 67, 1) 0%, rgba(255, 145, 83, 1) 90%);

}
</style>