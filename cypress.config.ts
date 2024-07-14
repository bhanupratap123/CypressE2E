import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {

    watchForFileChanges : false,
    defaultCommandTimeout : 3000,
    setupNodeEvents(on, config) {
   
    },
  },
});