import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { useUserStore } from "@/stores/user"
import type { User } from "@/stores/user"

export interface Fish {
	id?: number;
}

export const useFishesStore = defineStore("fishesStore", () => {
  const {getToken} = useUserStore()
  const {getUserId} = useUserStore()

  function getFishes() {
    return new Promise(async (resolve, reject) => {
      const fishes = await (
        await axios.get(`/api/fishes?api_token=${getToken}`)
      ).data;

      return resolve(fishes);
    });
  }

  function getFish(id: number) {
    return new Promise(async (resolve, reject) => {
      const fish = await (
        await axios.get(`/api/fishes/${id}?api_token=${getToken}`)
      ).data;

      return resolve(fish);
    });
  }

  function getFishInCollection(idFish: number) {
    return new Promise(async (resolve, reject) => {
      const fish = await (
        await axios.get(`/api/has_fish?api_token=${getToken}&user_id=${getUserId}&fish_id=${idFish}`)
      ).data;

      return resolve(fish);
    });
  }

  function addFishInCollection(idFish: number) {
    // getUserId
    // @todo
  }

  function removeFishFromCollection(idFish: number) {
    // getUserId
    // @todo
  }

  return { getFishes, getFish, getFishInCollection, addFishInCollection, removeFishFromCollection };
});
