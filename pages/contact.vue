<template>
    <UContainer class='flex relative justify-center items-center mt-20 cursor-default'>  
        <div class='flex flex-col justify-center text-center items-center'>
            <h1 class='lg:font-black lg:text-8xl font-bold text-4xl'>Contacts</h1>
            <p class='my-6 font-semibold text-xl text-gray-400'>How to contact us.</p>
        </div>	
    </UContainer>
    <LazyUContainer class='flex justify-center items-center text-center cursor-default'>
        <div class='flex justify-center items-center lg:grid-cols-2'>
            <LazyUCard class='flex flex-col justify-center items-center m-10'>
                <div class='flex flex-col justify-center items-center'>
                    <h3 class='lg:text-3xl font-bold text-xl'><UIcon name='i-heroicons-envelope' /> Email</h3>
                    <NuxtLink class='my-6 font-semibold text-xl text-gray-400' to='mailto:shop@kirousek.eu'>shop@kirousek.eu</NuxtLink>
                </div>
            </LazyUCard>
        </div>
    </LazyUContainer>
</template>
<script setup>
    useSeoMeta({
        title: "Kirousek's Shop",
        description: "Kirousek's Shop",
        ogTitle: "Kirousek's Shop",
        ogDescription: "Kirousek's Shop",
        ogUrl: 'https://shop.kirousek.eu/',
        ogImage: '/logo-rounded.png',
        twitterImage: '/logo-rounded.png',
        twitterTitle: "Kirousek's Shop",
        twitterDescription: "Kirousek's Shop",
        twitterCard: 'summary'
    })
</script>