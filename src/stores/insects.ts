import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "@/plugins/axios";
import { useUserStore } from "@/stores/user"
import type { User } from "@/stores/user"

export interface Insect {
	id?: number;
}

export const useInsectsStore = defineStore("insectsStore", () => {
  const {getToken} = useUserStore()
  const {getUserId} = useUserStore()

  function getInsects() {
    return new Promise(async (resolve, reject) => {
      const insects = await (
        await http.get(`/api/insects?api_token=${getToken}`)
      ).data;

      return resolve(insects);
    });
  }

  function getInsect(id: number) {
    return new Promise(async (resolve, reject) => {
      const insect = await (
        await http.get(`/api/insects/${id}?api_token=${getToken}`)
      ).data;

      return resolve(insect);
    });
  }

  function getInsectsUser() {
    return new Promise(async (resolve, reject) => {
      const insects = await (
        await http.get(`/api/user-insects?api_token=${getToken}&user_id=${getUserId}`)
      ).data;

      return resolve(insects);
    });
  }

  function addInsectInCollection(idInsect: number) {
    return new Promise(async (resolve, reject) => {
      const insect = await (
        await http.post(`/api/has-insect-user?api_token=${getToken}&user_id=${getUserId}&insect_id=${idInsect}`)
      ).data;

      return resolve(insect);
    });
  }

  function removeInsectFromCollection(idInsect: number) {
    return new Promise(async (resolve, reject) => {
      const insect = await (
        await http.delete(`/api/has-insects-user-remove?api_token=${getToken}&user_id=${getUserId}&insect_id=${idInsect}`)
      ).data;

      return resolve(insect);
    });
  }

  return { getInsects, getInsect, getInsectsUser, addInsectInCollection, removeInsectFromCollection};
});
