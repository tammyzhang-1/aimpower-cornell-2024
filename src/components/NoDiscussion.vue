<script setup>
    
</script>

<template>
    <div id="no-discussion-container">
        <div id="no-discussion">
            <img id="no-discussion-img" src="/no-discussion-img.png" />
            <p class="upper-margin-reduced-p">Dicussion has not started yet.</p>
            <p class="reduced-margin-p">Share your thoughts.</p>
            <p class="reduced-margin-p">Other meeting participants are eager to hear from you!</p>
        </div>
    </div>
  
</template>

<style scoped>
    #no-discussion-container {
        width: 100%;
        height: 100%;
        padding-left: 2em;
        padding-right: 2em;
    }

    #no-discussion {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #no-discussion p {
        color: var(--Meta-Meta, #677E92);
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
    }

    .upper-margin-reduced-p {
        margin-top: 0;
    }
    .reduced-margin-p {
        margin-top: 0;
        margin-bottom: 0;
    
    }

    #no-discussion-img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 15%;
    }

    .test {
        border: solid thin gray;
    }
</style>