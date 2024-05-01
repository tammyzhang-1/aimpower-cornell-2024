<script setup>
    import Button from 'primevue/button';
</script>

<script>
export default {
    created() {
    //   console.log(this.fixtures.meetings[this.$route.params.discussion_key])
    },
    computed: {
    meeting() {
      return this.fixtures.meetings[this.$route.params.discussion_key];
    }
  }
}
</script>

<template>
    <div id="meeting-info">
        <h1 id="title">{{ meeting.title }}</h1>
        <Button id="create-post" label="+ Create a Post" rounded />
        <p>Created today, at {{ meeting["time-forum-started"] }}</p>
        <p>{{ meeting.summary }}</p>
    </div>
</template>

<style scoped>
    #title {
        margin: 0;
        padding: 0;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
    }

    #meeting-info {
        position: relative;
    }

    #meeting-info p {
        font-family: "Source Serif Pro", serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }

    #create-post {
        position: absolute;
        top: 0em;
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
    }
    .test {
        border: solid thin gray;
    }
</style>