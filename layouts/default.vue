<template>
    <Navbar />
    <slot />
    <Footer />
</template>

<script setup lang="ts"> 
    useHead({
        htmlAttrs: {
            lang: 'en'
        },
        bodyAttrs: {
            class: 'antialiased text-gray-700 dark:text-gray-200',
        },
        link: [{
            rel: 'icon',
            type: 'image/png',
            href: '/logo-rounded.png'
        }]
    })
</script>

<style>
::-webkit-scrollbar { 
    display: none;
}

* {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>

