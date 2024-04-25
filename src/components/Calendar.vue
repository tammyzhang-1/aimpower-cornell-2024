<script setup>
import { ref } from "vue";
import Calendar from 'primevue/calendar';

const date = ref();
</script>

<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" inline showWeek  class="cal"/>
    </div>
</template>

<style scoped>
/* .card {
    margin-left: 3vw;
} */

.calendar{
    width: 358px;
    overflow: hidden;
    border-radius: 11.5px;
}
#pv_id_2_panel{
    width:358px;
}
</style>

