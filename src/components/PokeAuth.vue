<template>
  <main class="container my-16 flex flex-col items-center">
    <FormKit
      :actions="false"
      @submit="handleSubmit"
      submit-label="Login"
      type="form"
    >
      <FormKit
        id="username"
        input-class="poke-input"
        label-class="poke-input-label"
        label="Username"
        message-class="poke-input-message"
        name="username"
        placeholder="ash@pokemon.com"
        type="text"
        validation="required|email"
      />

      <FormKit
        autocomplete="on"
        input-class="poke-input"
        message-class="poke-input-message"
        label="Password"
        name="password"
        placeholder="***"
        type="password"
        validation="required|length:6"
      />

      <FormKit input-class="poke-btn-primary" label="Login" type="submit" />
    </FormKit>
  </main>
</template>

<script lang="ts" setup>
import { FormKit } from "@formkit/vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store";

const router = useRouter();

const { login } = useAuthStore();

const handleSubmit = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  login();

  router.push("/");
};
</script>
