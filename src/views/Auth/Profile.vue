<template>
  <q-page padding>
    <div class="row justify-center row-profil">
      <q-card class="text-center col-4">
        <q-card-section>
          <span>Bonjour {{ user.username }} 👋</span>
          <div class="text-h5 text-grey-8"><strong>Mon profil</strong></div>
        </q-card-section>
        <q-card-section>
          J’adore faire “Aouuuh” le matin dès 6h du matin après une bonne séance de sport :
          rien de mieux qu’un bon footing près de la plage, loin de cette méchante Éloïse.
        </q-card-section>
        <q-card-section>
          <div class="text-left"><strong>Série préféré : </strong> Moderne </div>
        </q-card-section>
      </q-card>
      <div class="text-center col-4 console-reaction q-ma-lg">
        <div class="q-gutter-x-md text-left">
          <q-btn color="secondary" v-for="platform in listPlatforms" :key="platform.platform" :label="platform.name"></q-btn>
        </div>
        <div class="reaction">
          <strong>Réaction la plus utilisée :  </strong>
        </div>
      </div>
      <div class="text-center col-4 q-ma-lg-sm">
        <q-btn  rounded color="accent" label="Modifier mon profil" text-color="black"/>
      </div>
      <q-card class="text-center col-4 q-ma-lg bg-accent">
        <q-card-section>
          <div class="text-left">
            Insectes capturés
          </div>
          <swiper
              :modules="modules"
              :slides-per-view="3"
              navigation
              :pagination="{ clickable: true }"
              :space-between="5"
          >
            <swiper-slide v-for="insect in listInsect" :key="insect.id">
              <img :src="'src/assets/images/menu/' + insect.icon">
            </swiper-slide>
          </swiper>
        </q-card-section>
      </q-card>
      <q-card class="text-center col-4 q-ma-lg bg-accent">
        <q-card-section>
          <div class="text-left">
            Poissons capturés
          </div>
          <swiper
              :modules="modules"
              :slides-per-view="3"
              navigation
              :pagination="{ clickable: true }"
              :space-between="5"
          >
            <swiper-slide v-for="fish in listFish" :key="fish.id">
              <img :src="'src/assets/images/menu/' + fish.icon">
            </swiper-slide>
          </swiper>
        </q-card-section>
      </q-card>
      <q-card class="text-center col-4 q-ma-lg bg-accent">
        <q-card-section>
          <div class="text-left">
            Créatures marines capturés
          </div>
          <swiper
              :modules="modules"
              :slides-per-view="3"
              navigation
              :pagination="{ clickable: true }"
              :space-between="5"
          >
            <swiper-slide v-for="creature in listCreature" :key="creature.id">
              <img :src="'src/assets/images/menu/' + creature.icon">
            </swiper-slide>
          </swiper>
        </q-card-section>
      </q-card>
      <q-card class="text-center col-4 q-ma-lg bg-primary">
        <q-card-section>
          <div class="text-left">
            <q-img src="@/assets/images/pencil.png" style="height: 50px; max-width: 50px"></q-img>
            Publications partagées
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

import { Navigation, Pagination } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const { user } = useUserStore();

const modules = [Navigation, Pagination];

const slideInsect = ref(1)
const slideFish = ref(2)
const slideCreature = ref(3)

const listPlatforms = ref<Array<Object>>([
  {
    platform: 'DS',
    name: 'DS',
  },
  {
    platform: 'Wii',
    name: 'Wii',
  },
  {
    platform: 'Switch',
    name: 'Switch',
  }
])

const listInsect = ref<Array<Object>>([
  {
    id: 1,
    icon: 'bug.png',
    text: 'Insectes1',
  },
  {
    id: 2,
    icon: 'bug.png',
    text: 'Insectes2',
  },
  {
    id: 3,
    icon: 'bug.png',
    text: 'Insectes3',
  },
  {
    id: 4,
    icon: 'bug.png',
    text: 'Insectes4',
  },
  {
    id: 5,
    icon: 'bug.png',
    text: 'Insectes5',
  },
  {
    id: 6,
    icon: 'bug.png',
    text: 'Insectes6',
  }
])

const listFish = ref<Array<Object>>([
  {
    id: 1,
    icon: 'fish.png',
    text: 'Poisson1',
  },
  {
    id: 2,
    icon: 'fish.png',
    text: 'Poisson2',
  },
  {
    id: 3,
    icon: 'fish.png',
    text: 'Poisson3',
  },
  {
    id: 4,
    icon: 'fish.png',
    text: 'Poisson4',
  },
  {
    id: 5,
    icon: 'fish.png',
    text: 'Poisson5',
  },
  {
    id: 6,
    icon: 'fish.png',
    text: 'Poisson6',
  }
])

const listCreature = ref<Array<Object>>([
  {
    id: 1,
    icon: 'creature.png',
    text: 'Creature1',
  },
  {
    id: 2,
    icon: 'creature.png',
    text: 'Creature2',
  },
  {
    id: 3,
    icon: 'creature.png',
    text: 'Creature3',
  },
  {
    id: 4,
    icon: 'creature.png',
    text: 'Creature4',
  },
  {
    id: 5,
    icon: 'creature.png',
    text: 'Creature5',
  },
  {
    id: 6,
    icon: 'creature.png',
    text: 'Creature6',
  }
])

</script>

<style lang="scss">
  @import '@/assets/scss/profile.scss';
</style>