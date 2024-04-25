<script setup>
import Calendar from '@/components/Calendar.vue';
import MeetingCard from '@/components/MeetingCard.vue';
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
    </Card>
    </div>
    <div class="center-column">
      <MeetingCard />
      <MeetingCard />
      <MeetingCard />
    </div>
    <div class="right-column">
    <Card class="discussion-card">
      <template #title>
        <span style="font-size: 30px; color: #F9F6F6">You have an important voice</span>
      </template>
      <template #subtitle>
        <span style="font-size: 20px; color: #FFFFFF">Use it with our meeting</span>
      </template>
        <template #content>
          <Button label="Discussion Forum" class="w-100 button" />
        </template>
    </Card>
    <Card class="card3">
        <template #title>Advanced Card</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
    </Card>
    </div>
  </div>
</template>

<style scoped>
.card1{
  overflow: hidden; 
  /* margin-left: 3vw; */
  border-radius: 11.5px;
  margin-top: 20px;
}
.left-column { 
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right-column { 
  display: flex;
  flex-direction: column;
}
.content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.discussion-card{
  text-align: center;
  border-radius: 7.626px;
  background: linear-gradient(180deg, #229AED 0%, #5C70E6 63.89%, rgba(163, 43, 141, 0.04) 135.44%, #B69DE0 135.46%, rgba(42, 176, 251, 0.00) 139.08%);
  /* margin-right: 3vw; */
}


.button{
  padding: 16px 50px 16px 50px;
  border-radius: 35px;
  background-color: #FFDD67;
  border-color: #000000;
  color: #000000;
}

.card3{
  height: 510px;
  flex-shrink: 0;
  border-radius: 11.25px;
  background: #A6B2ED;
  margin-top: 33px;
  color: #FFFFFF;
  /* margin-right: 3vw; */
}
</style>
