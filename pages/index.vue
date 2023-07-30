<template>
  <UContainer class='flex relative justify-center items-center m-20 cursor-default'>  
    <div class='flex flex-col justify-center text-center items-center'>
      <h1 class='lg:font-black lg:text-8xl font-bold text-4xl'>Kirousek's Shop</h1>
      <p class='my-6 font-semibold text-xl text-gray-400'>Subscriptions, services and other products...</p>
    </div>	
  </UContainer>
  <LazyUContainer class='flex justify-center items-center m-20 cursor-default'>
    <div class='flex flex-col justify-center text-center items-center'>
      <h2 class='lg:text-5xl font-bold text-3xl'>Products</h2>
      <div class='flex justify-center items-center'>
        <LazyUCard class='flex flex-col justify-center items-center m-10'>
          <div class='flex flex-col justify-center items-center'>
            <p class='text-xl font-medium text-green-500 dark:text-green-400'>Most Popular</p>
            <h3 class='mt-3 lg:text-3xl font-bold text-xl'>PalachMC Subscription 3 Months</h3>
            <p class='my-6 font-semibold text-xl text-gray-400'>Minecraft server subscription</p>
          </div>
          <UButton icon='i-heroicons-shopping-cart' label='Subscribe Now' variant='solid' @click="pay('price_1NY2S6HpZ1LTdlHTevjn6kqk')" />
        </LazyUCard>
        
      </div>
      <UButton label='Find More' icon='i-heroicons-squares-plus' variant='ghost' to='/products' />
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

  async function pay(priceId: string) {
    const res = await fetch('/api/checkout-create', {
      method: 'POST',
      body: priceId
    })
    const body = await res.json()
    window.open(body.url, '_blank')
  }
</script>
