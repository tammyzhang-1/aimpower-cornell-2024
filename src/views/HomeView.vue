<script setup>
import Calendar from '@/components/Calendar.vue';
import MeetingCard from '@/components/MeetingCard.vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
import Card from 'primevue/card';

function directTo(page) {
      router.push("/meeting/" + page);
}
</script>

<template>
  <div class="content">
    <div class="left-column">
      <Calendar />
      <Card class="card1">
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque
            quas!
          </p>
        </template>
      </Card>
    </div>
    <div class="center-column">
      <div v-for="(fixture, id) in fixtures.meetings">
            <MeetingCard :title="fixture.title" :starttime="fixture['time-start']" :endtime="fixture['time-end']" :participants="fixture.participants"
              :description="fixture.summary" @click="directTo(id)" href="/meeting_key" />\
        </div>
      </div>
    <div class="right-column">
      <Card class="discussion-card">
        <template #title>
          <span class="discussion-title">You have an important voice</span>
        </template>
        <template #subtitle>
          <span style="font-size: 20px; color: #FFFFFF; font-weight: 400;">Use it with our meeting</span>
        </template>
        <template #content>
          <router-link v-slot="{ href, navigate }" to="/discussion" custom>
            <Button :href="href" label="Discussion Forum" class="w-100 button" @click="navigate" />
          </router-link>
        </template>
      </Card>
      <Card class="card3">
        <template #title>Advanced Card</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque
            quas!
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.card1 {
  overflow: hidden;
  /* margin-left: 3vw; */
  border-radius: 11.5px;
  margin-top: 20px;
  max-width: 359px;
}

.left-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 2vh;
  padding-right: 30px;
  padding-left: 30px;
}

.discussion-card {
  text-align: center;
  border-radius: 7.626px;
  max-width: 359px;
  background: linear-gradient(180deg, #229AED 0%, #5C70E6 63.89%, rgba(163, 43, 141, 0.04) 135.44%, #B69DE0 135.46%, rgba(42, 176, 251, 0.00) 139.08%);
}


.button {
  padding: 16px 50px 16px 50px;
  border-radius: 35px;
  background-color: #FFDD67;
  border-color: #000000;
  color: #000000;
}

.discussion-title {
  color: #F9F6F6;
  text-align: center;
  font-size: 30.503px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.402px;
  /* 80% */
  letter-spacing: 0.763px;
}

.card3 {
  max-width: 359px;
  flex-shrink: 0;
  border-radius: 11.25px;
  background: #A6B2ED;
  margin-top: 33px;
  color: #FFFFFF;
  /* margin-right: 3vw; */
}
</style>
