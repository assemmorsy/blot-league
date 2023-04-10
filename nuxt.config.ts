export default defineNuxtConfig({
    app: {
        head: {
            meta: [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }],
            noscript: [{ children: 'JavaScript is required' }],
        }
    },

    modules: ["@nuxtjs/strapi", "@nuxt/content", "@vueuse/nuxt", "nuxt-icon"],


    css: ["@/assets/css/main.css", "bootstrap/dist/css/bootstrap.rtl.min.css"],
    modulesDir: ['@/node_modules']
})

