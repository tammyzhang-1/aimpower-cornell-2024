<script setup>
    import Avatar from 'primevue/avatar';
    import Button from 'primevue/button';
    import Reply from './Reply.vue';
    import HearMyVoiceFlair from './icons/HearMyVoiceFlair.vue';
    import CreateReply from './CreateReply.vue';
    import { ref } from 'vue';

    const props = defineProps({
        postInfo: Object
    });

    console.log(props.postInfo)

    const liked = ref(false);
    const editingReply = ref(false);
    const newReplies = ref([]);
    const replyCount = ref(0);

    function setHome() {
        editingReply.value = false;
    }

    function createReply(content) {
        editingReply.value = false;
        replyCount.value += 1;
        console.log(content)
        newReplies.value.push(
            {
                "reply-id": "04-19-2024-reply-1",
                "reply-author": "user-1",
                "reply-to": props.postInfo['post-id'],
                "reply-level": 1,
                "reply-datetime": Date.now(),
                "reply-time": "10:20 am",
                "content": content,
                "reactions": []
            }
        )
        newReplies.value.forEach(reply =>
            props.postInfo.replies.push(reply));
        
    }
</script>

<script>
  export default {
    computed: {
        allComments() {
            console.log(this)
            // this.postInfo.replies = this.newReplies;
            console.log(Object.keys(this.postInfo.replies).length)

            console.log(this.postInfo)
            return this.postInfo
        },
        commentCounter() {
            return Object.keys(this.postInfo.replies).length.toString();
        }
    },
    methods: {
        getUserInfo(userId) {
            return this.fixtures.users[userId].name;
        }
    }
  }
</script>

<template>
    <div id="post">
        <Avatar class="profile-img" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"/>
        <Button id="more-post-actions" label="..."/>

        <div id="post-main">
            <div id="post-info">
                <span id="poster-username">{{ getUserInfo(postInfo['post-author']) }}</span>
                <span class="divider">·</span>
                <span id="post-timestamp">{{ postInfo['post-time'] }}</span>
                <HearMyVoiceFlair v-if="postInfo.flaired" />
            </div>
            <span v-if="postInfo['post-title']" id="post-banner">
                <h2 id="title">{{ postInfo['post-title'] }}</h2>  
            </span>
            <p class="post-content" v-html=" postInfo.content "></p>
            <div id="post-reactions">
                <Button id="love-react" class="inactive post-reaction" 
                    @click="liked = !liked"
                    :icon="liked ? 'pi pi-heart-fill' : 'pi pi-heart'" :label="liked ? '1' : '0'" />
                <Button id="reply-react" class="post-reaction" 
                    @click="editingReply = !editingReply"
                    icon="pi pi-comment" :label="replyCount.toString()" />
            </div>
        </div>
    </div>
    <CreateReply @cancel="setHome" @submit="(content) => createReply(content)" v-if="editingReply" />
    <template v-for="reply in postInfo['replies']">
        <Reply 
          :replyInfo="reply"
        />
    </template>
    <span v-if="allComments"></span>
</template>

<style scoped>
    #post {
        display: flex;
        gap: 0.5em;
        position: relative;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    #post-banner {
        display: flex;
        gap: 0.5em;
    }

    #more-post-actions {
        position: absolute;
        top: 0em;
        right: 1em;
        color: black;
        background: none;
        border: none;
        font-size: 1.5em;
        padding-top: 0;
        height: 0.75em
    }

    #post-info {
        display: flex;
        gap: 0.5em;
        align-items: center;
    }

    .profile-img {
        width: 50px;
        height: 50px;
        aspect-ratio: 1 / 1;
    }

    #poster-username {
        color: #229AED;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
    }
    .divider {
        color: #C2C2C2;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
    }

    #post-timestamp {
        color: var(--Meta-Meta, #677E92);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }

    #title {
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        margin-top: 0.25em;
        margin-bottom: 0.25em;
        margin-right: 0;
        margin-left: 0;
    }

    .post-content {
        color: var(--darkText, #322D2D);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        margin-top: 0.45em;
        margin-bottom: 0.25em;
    }

    #post-reactions {
        display: flex;
        gap: 0.5em;
        margin-top: 1em;
    }
    .post-reaction {
        border-radius: 45.155px;
        background: #E5E5E5;
        color: black;
        border: none;
    }
</style>