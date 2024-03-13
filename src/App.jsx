// import Button from '@mui/material/Button';
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  //типа запрос на сервер чекаем
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />

        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App
