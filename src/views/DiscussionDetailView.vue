<!-- View when user requests the discussion forum for a specific meeting -->
<script setup>
    import MeetingTab from '../components/MeetingTab.vue';
    import MeetingInfo from '../components/MeetingInfo.vue';
    import NoDiscussion from '../components/NoDiscussion.vue';
    import CreateDiscussion from '../components/CreateDiscussion.vue';
    import Post from '../components/Post.vue';
    import { ref } from 'vue';
    import Button from 'primevue/button';

    const state = ref("home")

    function setEdit() {
      state.value = "edit";
      console.log(state.value)
    }
</script>

<script>
// console.log(fixtures)
export default {
  created() {
    console.log(this.fixtures.meetings)
    console.log(this.fixtures.meetings[this.$route.params.discussion_key])
  },
  computed: {
    allMeetings() {
      return this.fixtures.meetings;
    },
    meeting() {
      return this.fixtures.meetings[this.$route.params.discussion_key];
    }
  }
}
</script>

<template>
  <main>
    <aside id="meeting-tab-container">
      <template v-for="meeting in allMeetings">
        <MeetingTab :meetingTabInfo="meeting.id"></MeetingTab>
      </template>
    </aside>
    <div id="main-post-area">
      <Button v-if="state != 'edit'" id="create-post" label="+ Create a Post" rounded @click="setEdit" />
      <MeetingInfo></MeetingInfo>
      <CreateDiscussion v-if="state == 'edit'"></CreateDiscussion>
      <NoDiscussion v-if="!Object.keys(meeting.posts).length && state != 'edit'"></NoDiscussion>
      <template v-for="post in meeting.posts['main-posts']">
        <Post 
          :postInfo="post">
        </Post>
    </template>
    </div>
  </main>
</template>

<style>
  main {
    display: flex;
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }

  aside {
    width: 20%;
    height: 100%;
  }

  #main-post-area {
    width: 80%;
    min-height: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9;
    border-radius: 11.25px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 2em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    position: relative;
  }

  #create-post {
        position: absolute;
        top: 1em;
        right: 1em;
        background-color: #5F5CE6;
        padding: 16px 27px 16px 28px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        color: #FFF;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
        z-index: 2;
    }

</style>