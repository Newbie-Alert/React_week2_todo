import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Detail from "../components/Detail/Detail";
import Header from '../components/Header'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router