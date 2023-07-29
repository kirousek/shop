<script setup lang='ts'>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <Navbar />
    <div class='flex flex-col justify-center text-center items-center mt-20 cursor-default'>
        <h1 class='lg:font-black lg:text-8xl font-bold text-4xl'>Error {{ error!.statusCode }}</h1>
        <p class='my-6 font-semibold text-xl text-gray-400'>{{ error!.statusMessage }}</p>
        <UButton label='Go back' @click="handleError" />
    </div>
    <Footer />
</template>