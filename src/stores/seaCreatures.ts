import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { useUserStore } from "@/stores/user"
import type { User } from "@/stores/user"

export interface SeaCreature {
	id?: number;
}

export const useSeaCreaturesStore = defineStore("seaCreaturesStore", () => {
  const {getToken} = useUserStore()

  function getSeaCreatures() {
    return new Promise(async (resolve, reject) => {
      const seaCreatures = await (
        await axios.get(`/api/sea_creatures?api_token=${getToken}`)
      ).data;

      return resolve(seaCreatures);
    });
  }

  function getSeaCreature(id: number) {
    return new Promise(async (resolve, reject) => {
      const seaCreature = await (
        await axios.get(`/api/sea_creatures/${id}?api_token=${getToken}`)
      ).data;

      return resolve(seaCreature);
    });
  }

  return { getSeaCreatures, getSeaCreature };
});
