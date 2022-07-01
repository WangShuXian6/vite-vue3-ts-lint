import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default ({ mode }) => {
  const BASE = loadEnv(mode, process.cwd()).VITE_BASE_URL; //'/abc'
  console.log("BASE :", BASE);
  return defineConfig({
    plugins: [vue()],
    // process.env.VITE_BASE_URL import.meta.env.VITE_BASE_URL 在这里不可用
    // process.env.VITE_BASE_URL 依赖 @types/node
    base: BASE,
  });
};
