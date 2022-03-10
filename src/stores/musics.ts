import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { useUserStore } from "@/stores/user"
import type { User } from "@/stores/user"

export interface Music {
	id?: number;
}

export const useMusicsStore = defineStore("musicsStore", () => {
  const {getToken} = useUserStore()

  function getMusics() {
    return new Promise(async (resolve, reject) => {
      const musics = await (
        await axios.get(`/api/musics?api_token=${getToken}`)
      ).data;

      return resolve(musics);
    });
  }

  function getMusic(id: number) {
    return new Promise(async (resolve, reject) => {
      const music = await (
        await axios.get(`/api/musics/${id}?api_token=${getToken}`)
      ).data;

      return resolve(music);
    });
  }

  return { getMusics, getMusic };
});
