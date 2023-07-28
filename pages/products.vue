<template>
    <div class='-z-10 absolute bg-green-600 lg:-right-32 lg:-top-32 -right-16 -top-16 rounded-full blur-3xl lg:h-56 lg:w-56 h-28 w-28'></div>
    <div class='-z-10 absolute bg-green-600 lg:-left-32 bottom-1/2 top-1/2 -left-16 rounded-full blur-3xl lg:h-56 lg:w-56 h-28 w-28'></div>
    <div class='-z-10 absolute bg-green-600 lg:-right-32 lg:-bottom-32 -right-16 -bottom-16 rounded-full blur-3xl lg:h-56 lg:w-56 h-28 w-28'></div>
    <UContainer class='flex relative justify-center items-center m-20 cursor-default'>  
        <div class='flex flex-col justify-center text-center items-center'>
            <h1 class='lg:font-black lg:text-8xl font-bold text-4xl'>Products</h1>
            <p class='my-6 font-semibold text-xl text-gray-400'>All subscriptions, services and other products in one place...</p>
        </div>	
    </UContainer>
    <LazyUContainer class='flex justify-center items-center text-center m-20 cursor-default'>
        <div class='grid grid-cols-1 lg:grid-cols-3 justify-center items-center'>
            <LazyUCard class='flex flex-col justify-center items-center m-10'>
                <div class='flex flex-col justify-center items-center'>
                    <h3 class='lg:text-3xl font-bold text-xl'>PalachMC Subscription 1 Month</h3>
                    <p class='my-6 font-semibold text-xl text-gray-400'>Minecraft server subscription</p>
                </div>
                <UButton icon='i-heroicons-shopping-cart' label='Subscribe Now' variant='solid' @click="pay('price_1NXrcnHpZ1LTdlHTRuYGP0Ax')" />
            </LazyUCard>
            <LazyUCard class='flex flex-col justify-center items-center m-10'>
                <div class='flex flex-col justify-center items-center'>
                    <p class='text-xl font-medium text-green-500 dark:text-green-400'>Most Popular</p>
                    <h3 class='mt-3 lg:text-3xl font-bold text-xl'>PalachMC Subscription 3 Months</h3>
                    <p class='my-6 font-semibold text-xl text-gray-400'>Minecraft server subscription</p>
                </div>
                <UButton icon='i-heroicons-shopping-cart' label='Subscribe Now' variant='solid' @click="pay('price_1NY2S6HpZ1LTdlHTevjn6kqk')" />
            </LazyUCard>
            <LazyUCard class='flex flex-col justify-center items-center m-10'>
                <div class='flex flex-col justify-center items-center'>
                    <h3 class='lg:text-3xl font-bold text-xl'>PalachMC Subscription 12 Months</h3>
                    <p class='my-6 font-semibold text-xl text-gray-400'>Minecraft server subscription</p>
                </div>
                <UButton icon='i-heroicons-shopping-cart' label='Subscribe Now' variant='solid' @click="pay('price_1NY2S6HpZ1LTdlHTHzMizdAm')" />
            </LazyUCard>
        </div>
    </LazyUContainer>
</template>

<script setup lang="ts">
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
    async function pay(pId: string) {
        const res = await fetch('http://localhost:3030/checkout/create', {
            method: 'POST',
            body: pId
        })
        const data = await res.json()
        console.log(data)
        window.open(data.url, '_blank')
    }
</script>