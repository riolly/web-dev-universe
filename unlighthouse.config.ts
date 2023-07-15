// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

export default defineConfig({
  site: "localhost:3000",
  scanner: {
    device: "mobile",
  },
  debug: true,
  cache: false,
});
