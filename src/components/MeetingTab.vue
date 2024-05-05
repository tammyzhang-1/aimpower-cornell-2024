<script setup>
defineProps({
    title: String,
    subtitle: String,
    starttime: String,
    endtime: String,
    meetingTabInfo: Object,
    date: String
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
    <Card class="meeting-card"> <!-- @click= "directTo(meetingTabInfo)" -->
        <template #title>
            <span class="title">{{ title }}</span>
        </template>
        <template #subtitle>
            <datetime>{{ starttime }} - {{ endtime }}</datetime>
            <datetime style="margin-left: 8px">{{ date }}</datetime>
        </template>
    </Card>
</template>

<style>
.title {
    overflow: hidden;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    /* 28.8px */
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