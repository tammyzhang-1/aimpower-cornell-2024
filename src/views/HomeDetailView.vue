<script setup>
import MeetingTab from '@/components/MeetingTab.vue';
import MeetingNotes from '@/components/MeetingNotes.vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute();
function directTo(page) {
      router.push("/meeting/" + page);
}
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
    <div class="reverse">
      <div v-for="(fixture, id) in fixtures.meetings">
            <MeetingTab :class="fixture.id == $route.params.meeting_key ? 'active-tab' : 'inactive-tab'" :title="fixture.title" :starttime="fixture['time-start']" :endtime="fixture['time-end']" :date="fixture.date" @click="directTo(id)" href="/meeting_key" />\
        </div>
    </div>
    </div>
    <div v-for="(fixture, id) in fixtures.meetings" class="right-column">
      <div v-if="fixture.id == $route.params.meeting_key">
        <MeetingNotes :title="fixture.title" :starttime="fixture['time-start']" :endtime="fixture['time-end']" :participants="fixture.participants"
              :description="fixture.summary" :dateyear="fixture['date-year']" :transcript="fixture.transcript.dialogue" :meetingCardInfo="fixture.id"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

.active-tab {
      background-color: #E2DCFF;
    }
</style>