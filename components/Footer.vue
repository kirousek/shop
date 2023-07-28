<template>
    <div class='fixed cursor-default bottom-0 w-full flex justify-between items-center h-12 font-medium text-green-500 dark:text-green-400'>
        <div class='flex m-4'>
            <UIcon name='i-heroicons-heart' class='m-1' />
            <p class='truncate'>Made by</p>
            <UTooltip text='My personal website'>
                <NuxtLink to='https://kirousek.eu' class='ml-1 font-semibold text-green-700 dark:text-green-600'>Kirousek</NuxtLink>
            </UTooltip>
        </div>
    </div>
</template>