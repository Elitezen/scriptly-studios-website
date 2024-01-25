<script setup lang="ts">
import Header from './components/Header.vue';
import Showcase from './components/Showcase.vue';
import DesktopHeader from './components/DesktopHeader.vue';
import Footer from './components/Footer.vue';

import { onBeforeUnmount, onMounted, ref } from 'vue';

const MOBILE_BREAKPOINT_PX = 1_000;

const data = ref({
  isDesktop: window.innerWidth >= MOBILE_BREAKPOINT_PX,
});

const methods = {
  handleResize() {
    data.value.isDesktop = window.innerWidth >= MOBILE_BREAKPOINT_PX;
  },
};

onMounted(() => {
  window.addEventListener('resize', methods.handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', methods.handleResize);
});

</script>

<template>
  <component :is="data.isDesktop ? DesktopHeader : Header" />
  <Showcase />
  <Footer />
</template>

<style scoped lang="scss">
html {
    scroll-behavior: smooth;
}
</style>
