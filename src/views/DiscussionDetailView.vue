<!-- View when user requests the discussion forum for a specific meeting -->
<script setup>
    import MeetingTab from '../components/MeetingTab.vue';
    import MeetingInfo from '../components/MeetingInfo.vue';
    import NoDiscussion from '../components/NoDiscussion.vue';
    import CreateDiscussion from '../components/CreateDiscussion.vue';
    import Post from '../components/Post.vue';
    import CreateReply from '../components/CreateReply.vue';

    import { ref } from 'vue';
    import Button from 'primevue/button';
    import { useRoute } from 'vue-router'

    const route = useRoute();

    const state = ref("home");
    const newPosts = ref([]);

    function setEdit() {
      state.value = "edit";
    }

    function setHome() {
      state.value = "home";
    }

    function createPost(content) {
      state.value = "home";
      
      newPosts.value.push({
        "meeting": route.params.discussion_key,
        "flaired": content[1],
        "content": content[0],
        "post-author": "user-1",
        "post-datetime": Date.now(),
        "post-id": timestampToDateString(Date.now()) + "-post-" + newPosts.value.length,
        "post-time": timestampToTimeString(Date.now()),
        "post-title": "test",
        "reactions": [],
        "replies": {}
      })
      console.log(newPosts.value)
    }

    function timestampToTimeString(timestamp) {
      const date = new Date(timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const period = hours < 12 ? 'am' : 'pm';
      const timeString = `${formattedHours}:${formattedMinutes} ${period}`;
      return timeString;
    }

    function timestampToDateString(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
      const day = date.getDate().toString().padStart(2, '0');
      const dateString = `${month}-${day}-${year}`;
      return dateString;
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
        <MeetingTab :class="meeting.id == $route.params.discussion_key ? 'active-tab' : 'inactive-tab'" @click="setHome" :meetingTabInfo="meeting.id"></MeetingTab>
      </template>
    </aside>
    <div id="main-post-area">
      <Button v-if="state != 'edit'" id="create-post" label="+ Create a Post" rounded @click="setEdit" />
      <MeetingInfo></MeetingInfo>
      <CreateDiscussion 
        @cancel="setHome" 
        @submit="(content) =>createPost(content)"
        v-if="state == 'edit'">
      </CreateDiscussion>
      <NoDiscussion v-if="!Object.keys(meeting.posts).length && !Object.keys(newPosts.filter(post => post.meeting == $route.params.discussion_key)).length && state != 'edit'"></NoDiscussion>
      <template v-for="post in newPosts.filter(post => post.meeting == $route.params.discussion_key).slice().reverse()">
        <Post 
          :postInfo="post">
        </Post>
    </template>
      <template v-for="post in meeting.posts['main-posts']">
        <Post 
          :postInfo="post">
        </Post>
    </template>
    <!-- <CreateReply></CreateReply> -->
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

    .active-tab {
      background-color: #E2DCFF;
    }

</style>