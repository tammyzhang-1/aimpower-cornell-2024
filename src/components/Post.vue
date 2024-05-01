<script setup>
    import Avatar from 'primevue/avatar';
    import Button from 'primevue/button';
    import Reply from './Reply.vue';
    import HearMyVoiceFlair from './icons/HearMyVoiceFlair.vue';
    import { ref } from 'vue';

    const props = defineProps({
        postInfo: Object
    });

    console.log(props.postInfo.flaired)

    const liked = ref(false);
</script>

<script>
  export default {
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
            <span id="post-banner">
                <h2 id="title">{{ postInfo['post-title'] }}</h2>
                
            </span>
            <p class="post-content" v-html=" postInfo.content "></p>
            <div id="post-reactions">
                <Button id="love-react" class="inactive post-reaction" 
                    @click="liked = !liked"
                    :icon="liked ? 'pi pi-heart-fill' : 'pi pi-heart'" :label="liked ? '1' : '0'" />
                <Button id="reply-react" class="post-reaction" icon="pi pi-comment" label="0" />
            </div>
        </div>
    </div>
    <template v-for="reply in postInfo['replies']">
        <Reply 
          :replyInfo="reply"
        />
    </template>
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