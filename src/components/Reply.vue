<script setup>
    import Avatar from 'primevue/avatar';
    import Button from 'primevue/button';

    const props = defineProps({
        replyInfo: Object
    })

    console.log(props.replyInfo)
</script>

<script>
  export default {
  methods: {
    getUserInfo(userId) {
        return this.fixtures.users[userId].name;
    },
    getOffset() {
        console.log(this.replyInfo["reply-level"])
        return this.replyInfo["reply-level"] * 3 + 'em';
    }
  }
}
</script>

<template>
    <div id="reply" v-bind:style="{marginLeft: getOffset()}">
        <Avatar class="profile-img" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"/>
        <Button id="more-reply-actions" label="..."/>

        <div id="reply-main">
            <div id="reply-info">
                <span id="replier-username">{{ getUserInfo(replyInfo['reply-author']) }}</span>
                <span class="divider">·</span>
                <span id="reply-timestamp">{{ replyInfo['reply-time'] }}</span>
            </div>
            <p class="reply-content">{{ replyInfo.content }}</p>
            <div id="reply-reactions">
                <Button id="love-react" class="inactive reply-reaction" icon="pi pi-heart" label="0" />
                <Button id="reply-react" class="reply-reaction" icon="pi pi-comment" label="0" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    #reply {
        display: flex;
        gap: 0.5em;
        position: relative;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    #more-reply-actions {
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

    #reply-info {
        display: flex;
        gap: 0.5em;
    }

    .profile-img {
        width: 50px;
        height: 50px;
        aspect-ratio: 1 / 1;
    }

    #replier-username {
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

    #reply-timestamp {
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

    .reply-content {
        color: var(--darkText, #322D2D);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        margin-top: 0.45em;
        margin-bottom: 0.25em;
    }

    #reply-reactions {
        display: flex;
        gap: 0.5em;
        margin-top: 1em;
    }
    .reply-reaction {
        border-radius: 45.155px;
        background: #E5E5E5;
        color: black;
        border: none;
    }

</style>