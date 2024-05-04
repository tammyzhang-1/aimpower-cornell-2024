<script setup>
import MeetingTab from '@/components/MeetingTab.vue';
import MeetingNotes from '@/components/MeetingNotes.vue'
</script>

<script>
// console.log(fixtures)
export default {
  created() {
    console.log(this.fixtures.meetings)
    console.log(this.fixtures.meetings[this.$route.params.meeting_key])
  },
  computed: {
    allMeetings() {
      return this.fixtures.meetings;
    },
    meeting() {
      return this.fixtures.meetings[this.$route.params.meeting_key];
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="left-column">
      <div v-for="(fixture, id) in fixtures.meetings">
            <MeetingTab :title="fixture.title" :starttime="fixture['time-start']" :endtime="fixture['time-end']" :date="fixture.date" @click="directTo(id)" href="/meeting_key" />\
        </div>
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