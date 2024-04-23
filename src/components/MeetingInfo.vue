<script setup>
    
</script>

<template>
    <div id="meeting-info" class="test">
        <h1>Test Meeting Title</h1>
        <button id="create-post">Create a post</button>
        <p>Created today, at ... </p>
        <p>Meeting test info text</p>
    </div>
</template>

<style scoped>
    h1 {
        margin: 0;
        padding: 0;
    }

    #meeting-info {
        position: relative;
    }

    #create-post {
        position: absolute;
        top: 1em;
        right: 1em;
    }
    .test {
        border: solid thin gray;
    }
</style>