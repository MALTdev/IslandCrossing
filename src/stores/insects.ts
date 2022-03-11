import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
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
        await axios.get(`/api/insects?api_token=${getToken}`)
      ).data;

      return resolve(insects);
    });
  }

  function getInsect(id: number) {
    return new Promise(async (resolve, reject) => {
      const insect = await (
        await axios.get(`/api/insects/${id}?api_token=${getToken}`)
      ).data;

      return resolve(insect);
    });
  }

  function addInsectInCollection(id: number) {
    // getUserId
    // @todo
  }

  function removeInsectFromCollection(id: number) {
    // getUserId
    // @todo
  }

  return { getInsects, getInsect, addInsectInCollection, removeInsectFromCollection};
});
