<script setup>
defineProps({
    title: String,
  subtitle: String,
  participants: Array,
  description: String,
  starttime: String, 
  endtime: String,
  meetingTabInfo: Object
}) 
</script>

<script>
  export default {
  methods: {
    directTo(page) {
        this.$router.push("/discussion/" + page);
    }
  }
}
</script>

<template>
  <Card class="meeting-card" @click= "directTo(meetingTabInfo)">
        <template #title>
            <span class="title">{{title}}</span>
        </template>
        <template #subtitle>
            <datetime v-model="date">{{starttime}} - {{ endtime }}</datetime>
            <datetime style="margin-left: 8px">Today</datetime> 
        </template>
    </Card>
</template>

<style>
.title{
    overflow: hidden;
}
.meeting-card {
    border-radius: 11.25px;
    background: #F9F9F9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    max-width: 359px;
    overflow: hidden;
}

.meeting-card:hover {
    cursor: pointer;
}
</style>