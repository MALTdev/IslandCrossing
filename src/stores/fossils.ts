import { defineStore } from "pinia";
import http from "@/plugins/axios";

import { useUserStore } from "@/stores/user";

export interface Fossil {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
}

export const useFossilsStore = defineStore("fossilsStore", () => {
  const { getToken } = useUserStore();

  function getFossils(): Promise<Fossil[]> {
    return new Promise(async (resolve, reject) => {
      const fossils = (await http.get(`/api/fossils?api_token=${getToken}`))
        .data;

      return resolve(fossils);
    });
  }

  function getFossil(id: number): Promise<Fossil> {
    return new Promise(async (resolve, reject) => {
      const fossil = (
        await http.get(`/api/fossils/${id}?api_token=${getToken}`)
      ).data;

      return resolve(fossil);
    });
  }

  return { getFossils, getFossil };
});
