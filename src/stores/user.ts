import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "@/plugins/axios";

export interface User {
  id?: number;
  api_token?: string;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  description?: string;
  setFurniture?: string;
}

interface LoginForm {
  email: string;
  password: string;
}

interface RegisterForm {
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
}

export const useUserStore = defineStore("userStore", () => {
  const user = ref(useLocalStorage<User>("user", {}));

  function login(form: LoginForm) {
    return new Promise(async (resolve, reject) => {
      const xsrfToken = (await http.get("/api/token")).data;

      const { success, message, api_token } = (
        await http.post("/api/login", form, {
          headers: { "XSRF-TOKEN": xsrfToken },
        })
      ).data;

      if (!success) return reject(message);

      const userInformations = (
        await http.get(`/api/me?api_token=${api_token}`)
      ).data;

      user.value = {
        api_token,
        ...userInformations,
      };

      return resolve(user.value.username);
    });
  }

  async function register(form: RegisterForm) {
    return new Promise(async (resolve, reject) => {
      const xsrfToken = (await http.get("/api/token")).data;

      const { success, message, api_token } = (
        await http.post("/api/register", form, {
          headers: { "XSRF-TOKEN": xsrfToken },
        })
      ).data;

      if (!success) return reject(message);

      const userInformations = (
        await http.get(`/api/me?api_token=${api_token}`)
      ).data;

      user.value = {
        api_token,
        ...userInformations,
      };

      return resolve(user.value.username);
    });
  }

  async function logout() {
    return new Promise(async (resolve, reject) => {
      const xsrfToken = (await http.get("/api/token")).data;

      const { success, message } = (
        await http.post(
          "/api/logout",
          {},
          { headers: { "XSRF-TOKEN": xsrfToken } }
        )
      ).data;

      if (!success) return reject(message);

      user.value = {};

      return resolve(true);
    });
  }

  const getToken = computed(() => {
    return user.value.api_token;
  });

  const getUserId = computed(() => {
    return user.value.id;
  });

  return { user, login, register, logout, getToken, getUserId };
});
