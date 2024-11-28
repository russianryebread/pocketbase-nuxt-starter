import { defineNuxtPlugin } from "#app";
import PocketBase from "pocketbase";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const pb = new PocketBase(runtimeConfig.public.pocketbaseUrl);

  return {
    provide: {
      pb: pb,
    },
  };
});
