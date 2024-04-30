<script setup>
import MeetingTab from '@/components/MeetingTab.vue';
import MeetingNotes from '@/components/MeetingNotes.vue'
</script>

<template>
  <div class="content">
    <div class="left-column">
      <MeetingTab />
      <MeetingTab />
      <MeetingTab />
      <MeetingTab />
    </div>
    <div class="right-column">
      <MeetingNotes />
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 2vh;
  padding-right: 30px;
  padding-left: 30px;
}
.right-column {
  display: flex;
  flex-direction: column;
}
.left-column {
  display: flex;
  flex-direction: column;
}
</style>