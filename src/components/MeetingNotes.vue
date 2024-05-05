<script setup>
import BackButton from '@/components/icons/BackButton.vue';
import AvatarLady from 'primevue/avatar';
import avatar from './icons/avatar.vue';
import CalendarIcon from './icons/CalendarIcon.vue';
import Dropdown from 'primevue/dropdown';
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
defineProps({
    title: String,
    subtitle: String,
    participants: Array,
    description: String,
    starttime: String,
    endtime: String,
    meetingCardInfo: Object,
    dateyear: String,
    transcript: Array,
    timestamp: Number,
    post: Boolean
})
function timestampToTimeString(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const period = hours < 12 ? 'am' : 'pm';
    const timeString = `${formattedHours}:${formattedMinutes} ${period}`;
    return timeString;
}
function getParticipantCount(participants) {
    return participants.length;
}

const visible = ref(false);
function setDialogue(title, page) {
    if (title == "Product Development Team Meeting") {
        visible.value = true;
    }
    else {
        console.log(page)
        goTo(page)
    }
}


function goTo(page) {
    router.push("/discussion/" + page);
}

function setHome() {
    router.push("/");
}
</script>


<template>
    <Card class="meeting-card">
        <template #title>
            <div class="meeting-title">
                <div class="heading">
                    <BackButton @click="setHome()" />
                    <span class="title">{{ title }}</span>
                </div>
                <div>
                    <Button :href="href" label="Discussion Forum" class="w-100 button"
                        @click="setDialogue(title, meetingCardInfo)" />
                    <Dialog v-model:visible="visible" modal header="Send Invitation" class="font-bold w-6rem">
                        <p style="margin-top:0; font-weight: semibold">Would you like to send invitation emails to all
                            participants?</p>
                        <div class="button-container">
                            <Button link style="color: gray;">Don't Send</Button>
                            <Button link style="color: #6B4EFF" @click="goTo(meetingCardInfo)">Send</Button>
                        </div>
                    </Dialog>
                </div>
            </div>
        </template>
        <template #subtitle>
            <div class="user-info" style="column-gap: 30px;">
                <div class="user">
                    <AvatarLady image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"
                        style="margin-right: 8px" />
                    <span class="ml-2" style="font-size: 15px">rmt223</span>
                </div>
                <div class="date">
                    <CalendarIcon />
                    <date>{{ dateyear }}</date>
                    <datetime>{{ starttime }} - {{ endtime }}</datetime>
                </div>
                <div class="users">
                    <UsersIcon />
                    <span>Shared with {{ getParticipantCount(participants) }} people</span>
                </div>
            </div>
        </template>
        <template #content>
            <div>
                <span style="font-size: 20px; 
                font-style: normal; 
                font-weight: 600;
                line-height: normal;">Summary</span>
                <p class="description">{{ description }}</p>
            </div>
            <div class="transcript-container">
                <span style="font-size: 20px; 
                font-style: normal; 
                font-weight: 600;
                line-height: normal;">Transcript</span>
                <div class="card flex justify-content-center" style="margin-top: 20px;">
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                        placeholder="Select a post from Discussion Forum ..." class="w-full md:w-14rem" />
                </div>
                <div class="transcript" v-for="dialogueitem in transcript">
                    <div class="user-info">
                        <avatar />
                        <span style="font-weight: 600;">{{ dialogueitem.speaker }}</span>
                        <datetime style="font-weight: 400; color:#677E92">{{
                            timestampToTimeString(dialogueitem.timestamp) }}</datetime>
                    </div>
                    <p class="description" style="margin: 0;">{{ dialogueitem.message }}</p>
                </div>
            </div>
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

.users {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 12px;
}

.title {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    /* 28.8px */
}

.meeting-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.transcript {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 8px;
    margin-top: 20px;
}

.user-info {
    color: #000;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10px;

}

.pi-users {
    font-size: 15px;
}

.user {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
}

.button {
    display: flex;
    width: 202px;
    height: 48px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 48px;
    background: #6B4EFF;
    border: none;
    font-size: 14px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.date {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10px;
}

.heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10px;
}

.button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}
</style>