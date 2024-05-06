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
console.log(route.params.discussion_key)

const state = ref("home");
const editingPost = ref("");
const allPosts = ref([]);

function setEdit() {
  state.value = "edit";
}

function setReply(id) {
  state.value = "replying";
  editingPost.value = id;
}

function setHome() {
  state.value = "home";
}

function createPost(content) {
    state.value = "home";
    let newPost = {
      "id": timestampToDateString(Date.now()) + "-post-" + allPosts.value.length,
      "main-post-id": content[2] ? content[2]['main-post-id'] : content[2].id,
      "meeting": route.params.discussion_key,
      "flaired": content[1],
      "author": "user-1",
      "datetime": Date.now(),
      "time": timestampToTimeString(Date.now()),
      "content": content[0],
      "reply-to": content[2] ? content[2].id : "",
      "level": content[2] ? content[2].level + 1 : 0,
      "reply-counter": 0,
    }
    allPosts.value.push(newPost);
}

function updatedList(posts) {
  allPosts.value.forEach((post) => {
    const filteredPosts = posts.filter((p) => {
      return (p['reply-to'] == post['reply-to'] && p['reply-to'] != ""); 
    });
    const filteredIndices = filteredPosts.map((filteredPost) => {
      return posts.indexOf(filteredPost);
    });

    if (filteredIndices.length > 0) {
      let shift = filteredIndices[filteredIndices.length - 1] + 1;
      for (let i = filteredIndices[filteredIndices.length - 1] + 1; i < posts.length; i++) {
        if (posts[i]['level'] != post.level) {
          shift = i;
        } else {
          break;
        }
      }
      posts.splice(shift + 1, 0, post);
    } else {
      if (post['reply-to'] != "") {
        let replyingTo = posts.find((p) => p.id == post['reply-to']);
        posts.splice(posts.indexOf(replyingTo) + 1, 0, post);
      } else {
        posts.push(post);
      } 
    }
  })
  let uniqueDicts = [];
  const seenIds = new Set();

  posts.forEach((dict) => {
    if (!seenIds.has(dict.id)) {
      uniqueDicts.push(dict);
      seenIds.add(dict.id);
    }
  });

  uniqueDicts = uniqueDicts.filter((post) => post.meeting == route.params.discussion_key);

  let finalPosts = [];
  uniqueDicts.forEach((dict) => {
    finalPosts.push({ ...dict, 'reply-counter':  uniqueDicts.filter((p) => p['reply-to'] == dict.id).length});
  });

  return finalPosts;
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
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const day = date.getDate().toString().padStart(2, '0');
  const dateString = `${month}-${day}-${year}`;
  return dateString;
}
</script>

<script>
export default {
  computed: {
    allMeetings() {
      const filteredEntries = Object.fromEntries(
        Object.entries(this.fixtures.meetings).filter(([key, value]) => value.exists === true)
      );
      return filteredEntries;
    },
    meeting() {
      return this.fixtures.meetings[this.$route.params.discussion_key];
    }
  },
  methods: {
    directTo(page) {
      this.$router.push("/discussion/" + page);
    }
  }
}
</script>

<template>
  <div class="discussion-detail">
    <div class="reverse" id="meeting-tab-container">
      <div v-for="meeting in allMeetings" class="meeting-style">
        <MeetingTab :class="meeting.id == $route.params.discussion_key ? 'active-tab' : 'inactive-tab'"
          :title="meeting.title" :starttime="meeting['time-start']" :endtime="meeting['time-end']" :date="meeting.date"
          @click="setHome(), directTo(meeting.id)" :meetingTabInfo="meeting.id"></MeetingTab>
      </div>
    </div>
    <div id="main-post-area">
      <Button v-if="state != 'edit'" id="create-post" label="+ Create a Post" rounded @click="setEdit" />
      <MeetingInfo></MeetingInfo>
      <CreateDiscussion @cancel="setHome" @submit="(content) => createPost([content, false].flat())" v-if="state == 'edit'">
      </CreateDiscussion>
      <NoDiscussion
        v-if="!Object.keys(meeting.posts).length && !Object.keys(allPosts.filter(post => post.meeting == $route.params.discussion_key)).length && state != 'edit'">
      </NoDiscussion>
      <template v-for="post in updatedList(meeting.posts)">
        <Post :postInfo="post" @reply="(id) => setReply(id)"></Post>
        <CreateReply @cancel="setHome" @submit="(content) => createPost([content, false, post])" v-if="state == 'replying' && post.id == editingPost"/>
      </template>
    </div>
  </div>
</template>

<style>
.discussion-detail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  column-gap: 2vh;
  padding-right: 30px;
  padding-left: 30px;
}

#meeting-tab-container {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  row-gap: 2vh;
  align-items: center;
  flex-grow: 1;
}
#main-post-area {
  min-height: 100%;
  width: 80%;
  max-width: 1000px;
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

.reverse {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
}
</style>