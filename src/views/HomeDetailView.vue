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
  justify-content: space-evenly;
}
.right-column {
  display: flex;
  flex-direction: column;
  flex-grow: 3;
}
.left-column {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>