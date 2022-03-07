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
          <q-btn color="primary" label="DS"></q-btn>
          <q-btn color="primary" label="Wii"></q-btn>
          <q-btn color="primary" label="Switch"></q-btn>
        </div>
        <div class="reaction">
          <strong>Réaction la plus utilisée :  </strong>
        </div>
      </div>
      <div class="text-center col-4 q-ma-lg-sm">
        <q-btn outline rounded color="accent" label="Modifier mon profil" />
      </div>
      <q-card class="text-center col-4 q-ma-lg bg-accent">
        <q-card-section>
          <div class="text-left">
            Insectes capturés
          </div>
        </q-card-section>
      </q-card>
      <q-card class="text-center col-4 q-ma-lg bg-accent">
        <q-card-section>
          <div class="text-left">
            Poissons capturés
          </div>
        </q-card-section>
      </q-card>
      <q-card class="text-center col-4 q-ma-lg bg-accent">
        <q-card-section>
          <div class="text-left">
            Créatures marines capturés
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const { user } = useUserStore();
</script>

<style>
@import '@/assets/profile/profile.css';
</style>