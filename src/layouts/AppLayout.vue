

<script setup>
import AppLayoutDefault from './AppLayoutDefault.vue'
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
const layout = ref()
const route = useRoute()
console.log('====================================');
console.log(route);
console.log('====================================');

const router = useRouter()

let currentPathObject = router.currentRoute.value;


watch(
    () => route.meta?.layout,
    async (metaLayout) => {
        try {
            const component = metaLayout && await import(/* @vite-ignore */ `./${metaLayout}.vue`)
            layout.value = markRaw(component?.default || AppLayoutDefault)
        } catch (e) {
            layout.value = markRaw(AppLayoutDefault)
        }
    },
    { immediate: true }
)
</script>

<template>
    <component :is="layout">
        <RouterView />
    </component>
</template>