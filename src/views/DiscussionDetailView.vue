<!-- View when user requests the discussion forum for a specific meeting -->
<script setup>
    import MeetingTab from '../components/MeetingTab.vue';
    import MeetingInfo from '../components/MeetingInfo.vue';
    import NoDiscussion from '../components/NoDiscussion.vue';
    import CreateDiscussion from '../components/CreateDiscussion.vue';
    import TextArea from '../components/TextArea.vue';
    import Post from '../components/Post.vue';
    import Reply from '../components/Reply.vue';
</script>

<template>
  <main>
    <aside id="meeting-tab-container">
      <!-- todo: generate a component for each entry in fixture -->
      <MeetingTab></MeetingTab> 
    </aside>
    <div id="main-post-area">
      <MeetingInfo></MeetingInfo>
      <NoDiscussion></NoDiscussion>
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
  }

</style>