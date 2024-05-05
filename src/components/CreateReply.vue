<script setup>
    import Textarea from 'primevue/textarea';
    import FloatLabel from 'primevue/floatlabel';
    import Avatar from 'primevue/avatar';

    import { ref } from "vue";
    const value = ref('');

    const emit = defineEmits(['cancel', 'submit']);
    const submitReply = () => {
        emit('submit', value); 
    };

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
            <div id="reply-button-container">
            <Button @click="emit('cancel')" id="cancel-reply" label="Cancel" rounded />
            <Button @click="submitReply" id="submit-reply" :class="value.length == 0 ? 'inactive-reply-button' : 'active-reply-button'" label="Reply" rounded />
        </div>
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
        padding-left: 3em;
        padding-bottom: 3em;
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

    #reply-button-container {
        display: flex;
        gap: 0.5em;
        justify-content: flex-end;
        padding-top: 1em;
    }

    #cancel-reply {
        display: inline-flex;
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        border-radius: 48px;
        border: 1px solid #5538EE;
        background: #FFF;
        color: #5F5CE6;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        width: 5em;
    }

    #submit-reply {
        display: flex;
        width: 80px;
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        border-radius: 48px;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        border: none;
    }

    .inactive-reply-button {
        background: var(--Sky-Light, #E3E5E5);
        color: var(--Sky-Dark, #979C9E);
    }

    .active-reply-button {
        background: #5F5CE6;
        color: white;
    }

</style>