import { defineStore } from "pinia";
import http from "@/plugins/axios";

import { useUserStore } from "@/stores/user";

export interface SetFurniture {
  id?: number;
  label?: string;
}

export const useSetFurnituresStore = defineStore("setFurnituresStore", () => {
  const { getToken } = useUserStore();

  function getSetFurnitures(): Promise<SetFurniture[]> {
    return new Promise(async (resolve, reject) => {
      const setFurnitures = (
        await http.get(`/api/set_furnitures?api_token=${getToken}`)
      ).data;

      return resolve(setFurnitures);
    });
  }

  return { getSetFurnitures };
});
