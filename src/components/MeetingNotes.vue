<script setup>
import BackButton from '@/components/icons/BackButton.vue';
import AvatarLady from 'primevue/avatar';
import logo from './icons/logo.vue';
import avatar from './icons/avatar.vue';
</script>


<template>
    <Card class="meeting-card">
        <template #title>
            <BackButton />
            <span class="title">AI Generative Study Team Meeting</span>
        </template>
        <template #subtitle>
            <div class="search-avatar">
                <AvatarLady image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"
                    style="margin-right: 8px" />
                <span class="ml-2">rmt223</span>
                <div class="CalIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path
                        d="M21.375 4.5H5.625C4.38236 4.5 3.375 5.50736 3.375 6.75V22.5C3.375 23.7426 4.38236 24.75 5.625 24.75H21.375C22.6176 24.75 23.625 23.7426 23.625 22.5V6.75C23.625 5.50736 22.6176 4.5 21.375 4.5Z"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 2.25V6.75" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M9 2.25V6.75" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M3.375 11.25H23.625" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                </div>
                <datetime>9am - 10am</datetime>
            </div>
        </template>
        <template #content>
            <avatar />
            <span class="participants">Sam Samuels, Amy Winehouse, Britney Spare, and 3 more.</span> <br>
            <span class="description">Roxanne Tanenbaum asked the panelists about their biggest challenges and
                frustrations in user research.
                Sam struggled with getting users to open up, while Amy discussed the difficulties of conducting research
                in a remote setting.</span>
        </template>
    </Card>
</template>

<style scoped>
.meeting-card {
    border-radius: 11.25px;
    background: #F9F9F9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
    max-width: 1000px;
}

.title {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    /* 28.8px */
}
</style>