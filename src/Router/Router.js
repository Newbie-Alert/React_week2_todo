import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Detail from "../components/Detail";
import Header from '../components/Header'
import { GlobalStyle } from '../GlobalStyle'

const Router = () => {
  return (
    <BrowserRouter>
      {/* Global Style 적용 */}
      <GlobalStyle />
      {/* 고정 레이아웃 */}
      <Header />
      {/* 라우트 */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router