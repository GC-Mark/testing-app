<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div>
        <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
        <div id="container">
          <router-link :to="{ name: 'career-centre.career-coach.topic', params: { topicId: 1, topicSlug: 'topic-1'  } }">You <i>can't</i> touch me</router-link>
          <br><small>(this is an inline <i>&lt;a&gt;</i> tag)</small>
          <br />
          <br />
          <br />
          <br />
          <br />
          <router-link :to="{ name: 'career-centre.career-coach.topic', params: { topicId: 1, topicSlug: 'topic-1'  } }" style="display:block">You <i>can</i> touch me</router-link>
          <small>(this is an inline <i>&lt;a&gt;</i> tag with <i>display: block</i> applied)</small>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>