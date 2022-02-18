<template>
  <q-page padding>
    <div class="row justify-center">
      <q-card class="text-center col-4">
        <q-card-section>
          <div class="text-h5 text-grey-8">Inscription</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit="submit" class="q-gutter-md">
            <q-input v-model="email" type="text" label="Adresse e-mail" />
            <q-input v-model="username" type="text" label="Nom d'utilisateur" />
            <q-input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              label="Mot de passe"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                  class="cursor-pointer"
                  @click="togglePassword"
                />
              </template>
            </q-input>
            <q-input
              v-model="passwordConfirm"
              :type="showPassword ? 'text' : 'password'"
              label="Confirmation du mot de passe"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                  class="cursor-pointer"
                  @click="togglePassword"
                />
              </template>
            </q-input>
            <div>
              <q-btn type="submit" label="Confirmer" color="primary" class="full-width" />
            </div>
            <div>
              Déjà un compte ?
              <RouterLink to="/login">Se connecter</RouterLink>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref<string>('')
const username = ref<string>('')
const password = ref<string>('')
const passwordConfirm = ref<string>('')
const showPassword = ref<boolean>(false)

function togglePassword() {
  showPassword.value = !showPassword.value
}

function submit() {
  alert("Hello " + username.value)
}
</script>
