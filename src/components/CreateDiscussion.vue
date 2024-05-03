<script setup>
    import Editor from 'primevue/editor';
    import Button from 'primevue/button';

    import { ref } from "vue";

    const value = ref('');
    const flaired = ref(false);

    console.log(flaired.value)

    const emit = defineEmits(['cancel', 'submit']);

    const toggleFlair = () => {
        flaired.value = !flaired.value;
        console.log(flaired.value)
    };

    const submitPost = () => {
        emit('submit', [value, flaired.value]); 
    };
</script>


<template>
    <div>
        <Button @click="toggleFlair" :class="flaired ? 'flaired' : 'not-flaired'" id="add-hear-my-voice-flair" 
            :label="flaired ? 'Hear My Voice' : '+ Hear My Voice'" rounded />
        <Editor v-model="value" editorStyle="height: 300px" />
        <div id="post-button-container">
            <Button @click="emit('cancel')" id="cancel-post" label="Cancel" rounded />
            <Button @click="submitPost" id="submit-post" :class="value.length == 0 ? 'inactive-post-button' : 'active-post-button'" label="Post" rounded />
        </div>
    </div>
</template>

<style>
    #add-hear-my-voice-flair {
        border-radius: 24.939px;
        box-shadow: 0px 1.995px 1.995px 0px rgba(0, 0, 0, 0.25);
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        text-align: center;
        width: 190px;
        height: 44.326px;
        flex-shrink: 0;
        font-size: 17.956px;
        line-height: 120%; 
        margin-bottom: 0.5em;
    }

    .flaired {
        background: #ECFDE5;
        color: #188156;
        font-style: bold;
        border: none;
    }

    .not-flaired {
        background: #FFF;
        color: var(--Meta-Meta, #677E92);
        font-weight: 600;
        font-style: normal;
        border: 0.499px solid black;
    }

    #post-button-container {
        display: flex;
        margin-top: 1em;
        gap: 0.5em;
        justify-content: flex-end;
    }

    #cancel-post {
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

    #submit-post {
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

    .inactive-post-button {
        background: var(--Sky-Light, #E3E5E5);
        color: var(--Sky-Dark, #979C9E);
    }

    .active-post-button {
        background: #5F5CE6;
        color: white;
    }

</style>