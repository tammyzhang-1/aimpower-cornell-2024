<script setup>
    function timestampToFormattedDate(timestamp) {
        const date = new Date(timestamp * 1000);
        const options = { 
            weekday: 'long', 
            month: 'long',  
            day: 'numeric', 
            year: 'numeric' 
        };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;
    }
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
       
        <p>Created {{ meeting.date }}, at {{ meeting["time-forum-started"] }}</p>
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
        font-family: "Source Serif 4", serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }
    .test {
        border: solid thin gray;
    }
</style>