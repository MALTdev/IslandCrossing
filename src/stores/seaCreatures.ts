import { defineStore } from "pinia";
import http from "@/plugins/axios";

import { useUserStore } from "@/stores/user";

export interface SeaCreature {
  id?: number;
  name?: string;
  image_url?: string;
  period?: string;
  hours?: string;
  place?: string;
  movement?: string;
  price?: number;
}

export const useSeaCreaturesStore = defineStore("seaCreaturesStore", () => {
  const { getToken } = useUserStore();

  function getSeaCreatures(): Promise<SeaCreature[]> {
    return new Promise(async (resolve, reject) => {
      const seaCreatures = (
        await http.get(`/api/sea_creatures?api_token=${getToken}`)
      ).data;

      return resolve(seaCreatures);
    });
  }

  function getSeaCreature(id: number): Promise<SeaCreature> {
    return new Promise(async (resolve, reject) => {
      const seaCreature = (
        await http.get(`/api/sea_creatures/${id}?api_token=${getToken}`)
      ).data;

      return resolve(seaCreature);
    });
  }

  return { getSeaCreatures, getSeaCreature };
});
