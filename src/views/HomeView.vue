<script setup>
import Calendar from 'primevue/calendar';

// if we want to set a particular date as default:
// const date = defineModel({ default: "01/01/24" })

import { ref } from "vue";
const date = ref();

</script>

<template>
  <main>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" inline showWeek />
    </div>
  </main>
</template>
