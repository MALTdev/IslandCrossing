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
          <div class="text-left"><strong>Série préféré : </strong></div>
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
        <q-btn :to="{ name: 'profile-update' }" rounded color="accent" label="Modifier mon profil" text-color="black"/>
      </div>
      <q-card class="text-center col-4 q-ma-lg bg-accent">
        <q-card-section>
          <div class="text-left">
            Insectes capturés
          </div>
          <div class="q-pa-md">
            <q-carousel
                v-model="slideInsect"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="black"
                navigation
                padding
                arrows
                height="300px"
                class="carousel-profile"
            >
              <q-carousel-slide v-for="insect in listInsect" :key="insect.id" :name="insect.id" :img-src="'src/assets/images/menu/' + insect.icon" />
            </q-carousel>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="text-center col-4 q-ma-lg bg-accent">
        <q-card-section>
          <div class="text-left">
            Poissons capturés
          </div>
          <div class="q-pa-md">
            <q-carousel
                v-model="slideFish"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="black"
                navigation
                padding
                arrows
                height="300px"
                class="carousel-profile"
            >
              <q-carousel-slide v-for="fish in listFish" :key="fish.id" :name="fish.id" :img-src="'src/assets/images/menu/' + fish.icon" />
            </q-carousel>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="text-center col-4 q-ma-lg bg-accent">
        <q-card-section>
          <div class="text-left">
            Créatures marines capturés
          </div>
          <div class="q-pa-md">
            <q-carousel
                v-model="slideCreature"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="black"
                navigation
                padding
                arrows
                height="300px"
                class="carousel-profile"
            >
              <q-carousel-slide v-for="creature in listCreature" :key="creature.id" :name="creature.id" :img-src="'src/assets/images/menu/' + creature.icon" />
            </q-carousel>
          </div>
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
import {ref} from "vue";
const { user } = useUserStore();

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
  }
])

</script>

<style lang="scss">
  @import '@/assets/scss/profile.scss';
</style>