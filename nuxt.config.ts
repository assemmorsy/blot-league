export default defineNuxtConfig({
    app: {
        head: {
            meta: [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }],
            noscript: [{ children: 'JavaScript is required' }],
        }
    },

    modules: ["@nuxt/content", "@vueuse/nuxt", "@nuxtjs/supabase", "nuxt-icon"],

    runtimeConfig: {
        public: {
            SUPABASE_STORAGE_URL: process.env.SUPABASE_URL
        }
    },

    css: ["@/assets/css/main.css", "bootstrap/dist/css/bootstrap.rtl.min.css"],
    modulesDir: ['@/node_modules']
})

