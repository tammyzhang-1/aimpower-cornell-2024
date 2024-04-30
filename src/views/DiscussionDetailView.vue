<!-- View when user requests the discussion forum for a specific meeting -->
<script setup>
    import MeetingTab from '../components/MeetingTab.vue';
    import MeetingInfo from '../components/MeetingInfo.vue';
    import NoDiscussion from '../components/NoDiscussion.vue';
    import CreateDiscussion from '../components/CreateDiscussion.vue';
    import Post from '../components/Post.vue';
</script>

<template>
  <main>
    <aside id="meeting-tab-container">
      <!-- todo: generate a component for each entry in fixture -->
      <MeetingTab></MeetingTab> 
    </aside>
    <div id="main-post-area">
      <MeetingInfo></MeetingInfo>
      <!-- <NoDiscussion></NoDiscussion> -->
      <!-- <CreateDiscussion></CreateDiscussion> -->
      <Post></Post>
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
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9;
    border-radius: 11.25px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 2em;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

</style>