import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  // base: 設定靜態檔案的放置路徑(通常是 GitHub 遠端儲存庫名稱)
  base: "/sp-my-react-todo-072324"
})
