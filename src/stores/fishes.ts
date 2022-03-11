import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "@/plugins/axios";
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
        await http.get(`/api/fishes?api_token=${getToken}`)
      ).data;

      return resolve(fishes);
    });
  }

  function getFish(id: number) {
    return new Promise(async (resolve, reject) => {
      const fish = await (
        await http.get(`/api/fishes/${id}?api_token=${getToken}`)
      ).data;

      return resolve(fish);
    });
  }

  function getFishesUser() {
    return new Promise(async (resolve, reject) => {
      const fish = await (
        await http.get(`/api/user-fishes?api_token=${getToken}&user_id=${getUserId}`)
      ).data;

      return resolve(fish);
    });
  }

  function addFishInCollection(idFish: number) {
    return new Promise(async (resolve, reject) => {
      const fish = await (
        await http.post(`/api/has-fish-user?api_token=${getToken}&user_id=${getUserId}&fish_id=${idFish}`)
      ).data;

      return resolve(fish);
    });
  }

  function removeFishFromCollection(idFish: number) {
    return new Promise(async (resolve, reject) => {
      const fish = await (
        await http.delete(`/api/has-fish-user-remove?api_token=${getToken}&user_id=${getUserId}&fish_id=${idFish}`)
      ).data;

      return resolve(fish);
    });
  }

  return { getFishes, getFish, getFishesUser, addFishInCollection, removeFishFromCollection };
});
