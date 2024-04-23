<!-- View in which users can see a list of cards for each of their past/upcoming meetings where a discussion forum can be accessed. -->
<script setup>
    import Nav from '../components/Nav.vue';
    import MeetingCard from '../components/MeetingCard.vue';
</script>

<template>
  <Nav></Nav>
  <!-- todo: generate a component for each entry in fixture -->
  <MeetingCard></MeetingCard> 
</template>

<style>

</style>