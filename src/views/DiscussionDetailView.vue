<!-- View when user requests the discussion forum for a specific meeting -->
<script setup>
    import Nav from '../components/Nav.vue';
    import MeetingTab from '../components/MeetingTab.vue';
    import MeetingInfo from '../components/MeetingInfo.vue';
    import NoDiscussion from '../components/NoDiscussion.vue';
    import CreateDiscussion from '../components/CreateDiscussion.vue';
    import TextArea from '../components/TextArea.vue';
    import Post from '../components/Post.vue';
    import Reply from '../components/Reply.vue';
</script>

<template>
  <Nav></Nav>
  <!-- todo: generate a component for each entry in fixture -->
  <MeetingTab></MeetingTab> 

  <MeetingInfo></MeetingInfo>
</template>

<style>

</style>