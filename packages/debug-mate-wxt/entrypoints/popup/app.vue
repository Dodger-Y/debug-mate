<script setup lang="ts">
import { useSystemStore } from '@/store/system'
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'

const systemStore = useSystemStore()
</script>

<template>
  <n-config-provider
    inline-theme-disabled
    :theme="systemStore.isDark ? darkTheme : undefined"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <n-el tag="div">
      <div h-500 w-700>
        <n-layout position="absolute">
          <n-layout-header bordered>
            <popup-nav-bar />
          </n-layout-header>
          <n-layout has-sider position="absolute" style="top: 41px">
            <n-layout-sider :collapsed="true" collapse-mode="width" bordered>
              <popup-side-bar />
            </n-layout-sider>
            <n-layout-content content-style="padding: 10px" :native-scrollbar="false">
              <RouterView />
            </n-layout-content>
          </n-layout>
        </n-layout>
      </div>
    </n-el>

    <n-global-style />
  </n-config-provider>
</template>
