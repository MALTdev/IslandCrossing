<template>
  <q-page padding class="text-center" v-if="villager">
    <h1>Villageois {{ villager.name }}</h1>

    <section id="section-villager-detail">
      <section id="section-villager-detail-top">
        <div class="first-section">
          <div>
            <q-icon
              v-if="villager?.gender?.name === 'Mâle'"
              name="fas fa-mars"
              color="blue"
            />
            <q-icon v-else name="fas fa-venus" color="red" />
          </div>
          <div>
            <span class="text-bold">Espèce : </span>
            <span>{{ villager?.species?.name }}</span>
          </div>
          <div>
            <span class="text-bold">Personnalité : </span>
            <span>{{ villager?.personality?.name }}</span>
          </div>
        </div>

        <div class="second-section">
          <div class="villager-detail-image">
            <q-img
              :src="villager.image_url"
              class="villager-image"
              fit="scale-down"
            />
          </div>

          <span class="text-bold villager-name">{{ villager.name }}</span>
        </div>

        <div class="third-section">
          <div>
            <span class="text-bold">Date d'anniversaire : </span>
            <span
              >{{ villager.birthday_day }} {{ villager.birthday_month }}</span
            >
          </div>
          <div>
            <span class="text-bold">Signe astrologique : </span>
            <span>{{ villager.sign_id }}</span>
          </div>
        </div>
      </section>

      <section id="section-villager-detail-bottom">
        <div>
          <h2>{{ villager.phrase }}</h2>
          <!--<div>
					<q-img :src="villager.house" class="villager-image-house" fit="scale-down"/>
				</div>-->
        </div>
      </section>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

import { useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { useVillagersStore, type Villager } from "@/stores/villagers";

const route = useRoute();
const $q = useQuasar();
const villagersStore = useVillagersStore();

const villager = ref<Villager>({});

onBeforeMount(async () => {
  try {
    const id = parseInt(route.params.id as string);
    villager.value = await villagersStore.getVillager(id);
  } catch (error) {
    $q.notify({
      message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
      type: "negative",
    });
  }
});
</script>

<style scoped>
@import "@/assets/css/wiki/villager.css";
</style>

<style lang="scss" scoped>
@import "@/assets/scss/wiki/villager.scss";
</style>
