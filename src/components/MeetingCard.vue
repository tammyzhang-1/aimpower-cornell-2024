<script setup>
import avatar from './icons/avatar.vue';
</script>

<template>
  <Card class="meeting-card">
      <template #title>
        <span class="title">AI Generative Study Team Meeting</span>
        <i class="pi pi-bookmark ml-auto" style="margin-left: 8px;"></i>
      </template>
      <template #subtitle>
        <datetime v-model="date">9am - 10am</datetime>
      </template>
      <template #content>
      <avatar />
      <span class="participants">Sam Samuels, Amy Winehouse, Britney Spare, and 3 more.</span> <br>
      <span class="description">Roxanne Tanenbaum asked the panelists about their biggest challenges and frustrations in user research. 
      Sam struggled with getting users to open up, while Amy discussed the difficulties of conducting research in a remote setting.</span>
      </template>
    </Card>
</template>

<style scoped>
.meeting-card {
height: 270px;
border-radius: 11.25px;
background: #F9F9F9;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-bottom: 20px;
}

.title{
color: #000;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 120%; /* 28.8px */
}
.participants{
color: #000;
font-family: "Source Sans Pro", sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.description{
color:#000;
/* Body Text/Source Serif Pro/16/Regular */
font-family: "Source Serif Pro";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
}
</style>