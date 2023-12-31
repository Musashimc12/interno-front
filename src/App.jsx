import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicUrls } from "./config";
import Header from "./components/Header";
import Home from "./screens/Home";
import Nuevo from "./screens/Nuevo";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import Tienda from "./screens/Tienda";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { UserContextProvider } from "../context/userContext";
import { Toaster } from 'react-hot-toast'

function App() {
  
  console.log("got to APP");
  return (
    <UserContextProvider>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path={publicUrls.home} element={<Home />} />
          <Route path={publicUrls.contact} element={<Contact /> }/>
          <Route path={publicUrls.tienda} element={<Tienda />} />
          <Route path={publicUrls.login} element={<Login/>} />
          <Route path={publicUrls.nuevo} element={<Nuevo />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
