<script setup>
    import Textarea from 'primevue/textarea';
    import FloatLabel from 'primevue/floatlabel';
    import Avatar from 'primevue/avatar';

    import { ref } from "vue";
    const value = ref('');

</script>

<template>
    <div id="reply-editor-container">
        <div>
            <Avatar class="profile-img" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"/>
        </div>
        <div id="reply-editor-right">
            <FloatLabel id="reply-label">
                <Textarea id="reply-editor" v-model="value" />
                <label>What are your thoughts on the meeting?</label>
            </FloatLabel>
        </div>
    </div>
</template>

<style scoped>
    #reply-editor-container {
        display: flex;
        gap: 0.5em;
        margin-top: 1em;
        margin-bottom: 1em;
        height: 10em;
    }

    #reply-editor-right {
        width: 100%;
        height: 100%;
    }

    #reply-editor {
        width: 100%;
        height: 100%;
    }

    #reply-label {
        width: 100%;
        height: 100%;
    }

    #reply-label label {
        padding-top: 0.5em;
    }

    .profile-img {
        width: 50px;
        height: 50px;
        aspect-ratio: 1 / 1;
    }
</style>