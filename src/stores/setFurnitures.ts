import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "@/plugins/axios";
import { useUserStore } from "@/stores/user"
import type { User } from "@/stores/user"

export interface SetFurniture {
	id?: number;
  label?: string;
}

export const useSetFurnituresStore = defineStore("setFurnituresStore", () => {
  const {getToken} = useUserStore()

  function getSetFurnitures() {
    return new Promise(async (resolve, reject) => {
      const setFurnitures = await (
        await http.get(`/api/set_furnitures?api_token=${getToken}`)
      ).data;

      return resolve(setFurnitures);
    });
  }

  return { getSetFurnitures };
});
