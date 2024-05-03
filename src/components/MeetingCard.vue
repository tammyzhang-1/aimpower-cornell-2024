<script setup>
import avatar from './icons/avatar.vue';
defineProps({
    title: String,
  subtitle: String,
  participants: Array,
  description: String,
  starttime: String, 
  endtime: String,
  meetingCardInfo: Object
})
function getParticipants(participants) {
    const participantsString = participants.join(', ');
    return participantsString.length > 50 ? participantsString.substring(0, 50) + '...' : participantsString;
}
function directTo(page) {
        this.$router.push("/discussion/" + page);
}
</script>

<template>
   <Card class="meeting-card">  <!-- @click= "directTo(meetingCardInfo)" -->
        <template #title>
            <span class="title">{{title}}</span>
            <i class="pi pi-bookmark ml-auto" style="margin-left: 8px;"></i>
        </template>
        <template #subtitle>
            <datetime>{{starttime}} - {{ endtime }}</datetime>
        </template>
        <template #content>
        <div class="participant-avatar">
            <avatar />
            <span class="participants">{{ getParticipants(participants) }}</span>
        </div>
             <br>
            <span class="description">{{description}}</span>
        </template>
    </Card>
</template>

<style scoped>
.meeting-card {
    border-radius: 11.25px;
    background: #F9F9F9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
    max-width: 740px;
}

.meeting-card:hover {
    cursor: pointer;
}

.title {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    /* 28.8px */
}

.participants {
    color: #000;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.description {
    color: #000;
    /* Body Text/Source Serif Pro/16/Regular */
    font-family: serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    /* 22.4px */
}
.participant-avatar{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>