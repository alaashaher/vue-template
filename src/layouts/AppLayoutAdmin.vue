<script setup>
import { ref } from 'vue';
import {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';


const selectedKeys = ref(['1']);
const collapsed = ref(false);



</script>
<template>
    <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" theme="light" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
                <a-menu-item key="1">
                    <user-outlined />
                    <span>posts</span>
                </a-menu-item>

            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0px 20px">
                <menu-unfold-outlined v-if="collapsed" class="triggpxer" @click="() => (collapsed = !collapsed)" />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <slot />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
