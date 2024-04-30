<script setup>
    import Avatar from 'primevue/avatar';
    import Button from 'primevue/button';
</script>

<template>
    <div id="post">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"
                        style="margin-right: 8px" />
        <Button id="more-post-actions" label="..."/>

        <div id="post-main">
            <div id="post-info">
                <span id="poster-username">test-username</span>
                <span class="divider">·</span>
                <span id="post-timestamp">test-timestamp</span>
            </div>
            <h2 id="title">Test Post Title</h2>
            <p class="post-content">Post test info text</p>
            <div id="post-reactions">
                <Button id="love-react" class="inactive post-reaction" icon="pi pi-heart" label="0" />
                <Button id="reply-react" class="post-reaction" icon="pi pi-comment" label="0" />
            </div>
        </div>
    </div>
</template>

<style scoped>

    #post {
        display: flex;
        gap: 0.5em;
        position: relative;
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