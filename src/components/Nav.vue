<script setup>
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
import logo from './icons/logo.vue';
import { ref } from "vue";

const items = ref([
  {
    label: 'Home'
  },
  {
    label: 'Discussion Forum'
  },
  {
    label: 'About Us'
  }
]);
</script>

<template>
  <div class="card">
      <Menubar :model="items" class="menu">
        <template #start>
          <logo style="margin-right: 24px;" />
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
          <a v-ripple class="flex align-items-center nav-item" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
              item.shortcut }}</span>
            <i v-if="hasSubmenu"
              :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
          </a>
        </template>
        <template #end>
          <div class="flex align-items-center search-avatar gap-2">
            <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" style="border-radius:8px; margin-right:163.5px"/>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" style="margin-right: 8px"/>
            <span class="ml-2">rmt223</span>
            <i class="pi pi-angle-down ml-auto" style="margin-left: 8px;"></i>
          </div>
        </template>
      </Menubar>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  border: none;
}

.menu{
    padding: 26px 31px 29px;
    border: none;
    display: flex;
    flex-direction: row;
    background-color: #EBEDF1;
}

.search-avatar{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.nav-item{
padding-top: 6px;
padding-bottom: 6px;
}
</style>