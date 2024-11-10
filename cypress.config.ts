import { defineConfig } from 'cypress';
import viteConfig from './vite.config';
import coverageTask from "@cypress/code-coverage/task";
export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
		setupNodeEvents(on, config) {
			coverageTask(on, config);

			return config;
		},
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
      setupNodeEvents(on, config) {
      // implement node event listeners here
      coverageTask(on, config);

			return config;
    },
  },
});
