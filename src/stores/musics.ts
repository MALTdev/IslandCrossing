import { defineStore } from "pinia";
import http from "@/plugins/axios";

import { useUserStore } from "@/stores/user";

export interface Music {
  id?: number;
  name?: string;
  image_url?: string;
  music_url?: string;
  price?: number;
  sell_price?: number;
}

export const useMusicsStore = defineStore("musicsStore", () => {
  const { getToken } = useUserStore();

  function getMusics(): Promise<Music[]> {
    return new Promise(async (resolve, reject) => {
      const musics = (await http.get(`/api/musics?api_token=${getToken}`)).data;

      return resolve(musics);
    });
  }

  function getMusic(id: number): Promise<Music> {
    return new Promise(async (resolve, reject) => {
      const music = (await http.get(`/api/musics/${id}?api_token=${getToken}`))
        .data;

      return resolve(music);
    });
  }

  return { getMusics, getMusic };
});
