// 載入路由設置 Components
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 載入頁面
import TodoWrapper from "./components/Todowrapper";

// 設定應用程式的基礎路徑 (通常是 GitHub 遠端儲存庫名稱)
const basename = import.meta.env.VITE_PUBLIC_URL;

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {/* 定義首頁路由 */}
        <Route path="*" Component={TodoWrapper}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
