import { Navigate, Route, Routes } from "react-router-dom"
import { ComponenteNavBar } from "./components/ComponenteNavBar"
import { HomeScreen } from "./routes/HomeScreen"
import { ContactScreen } from "./routes/ContactScreen"
import { AboutScreen } from "./routes/AboutScreen"

// Routes y Route crean las rutas para los componentes que son screens
// Se resuelve la ruta /* si el usuario ingresa una ruta inválida en la barra del navegador
export const App = () => {
    return (
        <>
            <ComponenteNavBar />
            <Routes>
                <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                <Route path="/contact" element={<ContactScreen></ContactScreen>}></Route>
                <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
                <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
        </>
    )
}
