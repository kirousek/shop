<template>
    <nav class='sticky top-0 m-1 z-10 backdrop-blur-xl'>
        <div class='flex justify-between items-center'>
            <div class='flex m-1.5'>
                <NuxtLink to='/' class='font-bold lg:text-xl text-2xl text-green-500 dark:text-green-400' aria-label='Home'>
                    <img 
                        src='/logo-transparent.png' 
                        width='45'
                        height='45'
                        alt='Logo'
                    />
                </NuxtLink>
            </div>
            <div class='flex lg:hidden mx-3'>
                <UDropdown :items='menuItems'>
                    <UButton variant='ghost' icon='i-heroicons-bars-3' aria-label='Menu' />
                    <template #item='{ item }'>
                        <span class='truncate'>{{ item.label }}</span>
                        <UIcon :name='item.icon' class='flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto' />
                    </template>
                </UDropdown>
            </div>
            <div class="hidden lg:flex lg:justify-center left-1/2 right-1/2">
                <UTooltip text='Go to the home page.'>
                    <UButton label='Home' icon="i-heroicons-home" variant='ghost' to='/' />
                </UTooltip>
                <UTooltip text='Browse our products.'>
                    <UButton label='Products' icon="i-heroicons-shopping-bag" variant='ghost' to='/products' />
                </UTooltip>        
                <UTooltip text='Contact us.'>
                    <UButton label='Contact' icon="i-heroicons-phone" variant='ghost' to='/contact' />
                </UTooltip>   
            </div>
            <div class='hidden lg:flex lg:justify-end lg:mx-3'>
                <UButton label='Account' icon="i-heroicons-user" to='https://billing.stripe.com/p/login/28o29R6Lk7Np3jG9AA' />
            </div>
        </div>    
    </nav>
</template>

<script setup lang="ts">
    const menuItems = [
        [{
            label: 'Account',
            icon: 'i-heroicons-lock-open',
            to: 'https://billing.stripe.com/p/login/28o29R6Lk7Np3jG9AA',
        }],
        [{
            label: 'Home',
            icon: 'i-heroicons-home',
            to: '/',
        },
        {
            label: 'Products',
            icon: 'i-heroicons-shopping-bag',
            to: '/products',
        },
        {
            label: 'Contact',
            icon: 'i-heroicons-phone',
            to: '/contact',
        }],
    ]
</script>