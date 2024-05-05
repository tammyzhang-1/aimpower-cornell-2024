<!-- View in which users can see a list of cards for each of their past/upcoming meetings where a discussion forum can be accessed. -->
<script setup>
  import Button from 'primevue/button';
  import MeetingCard from '../components/MeetingCard.vue';
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute();
  const router = useRouter();

  function directTo(page) {
    console.log(page)
        router.push("/discussion/" + page);
  }
</script>

<script>
  export default {
    created() {
     
    },
    computed: {
      allMeetings() {
        return this.fixtures.meetings;
      }
    }
  }
</script>

<template>
  <!-- todo: generate a component for each entry in fixture -->
  <div id="cards-container">
    <div id="filters">
      <Button id="all-filter" label="All" />
      <Button id="saved-filter" label="Saved" />
    </div>
    <template v-for="meeting in allMeetings">
      <div id="meeting-block">
        <span style="color: gray;">{{ meeting.date }}</span>
      <MeetingCard :meetingCardInfo="meeting.id" class="meeting-card" :title="meeting.title" :starttime="meeting['time-start']" :endtime="meeting['time-end']" :participants="meeting.participants"
              :description="meeting.summary" @click="directTo(meeting.id)" style="max-width: 1000px;"></MeetingCard>
      </div>
    </template>
  </div>
</template>

<style scoped>
  #cards-container {
    position: relative;
    width: fit-content;
    margin: auto;
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;
    flex-direction: column-reverse;
  }

  #filters {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 0.5em;
  }

  #all-filter, #saved-filter {
    background: none;
    color: gray;
    border: none;
    padding: 0.2em;
  } 

  #meeting-block {
    display: block;
    margin-bottom: 1.5em;
  }
</style>