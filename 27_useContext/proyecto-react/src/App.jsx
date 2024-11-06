import { Navigate, Route, Routes } from "react-router-dom"
import { ComponenteNavBar } from "./components/ComponenteNavBar"
import { HomeScreen } from "./routes/HomeScreen"
import { ContactScreen } from "./routes/ContactScreen"
import { AboutScreen } from "./routes/AboutScreen"
import { UsuarioProvider } from "./context/UsuarioProvider"
import { LoginScreen } from "./routes/LoginScreen"

// Todos los componentes que estén por debajo de la App, van a tener acceso al contexto provisto por UsuarioProvider
// Esto evita trasladar objetos mediante props anidadas
export const App = () => {
    return (
        <UsuarioProvider>
            <ComponenteNavBar />
            <Routes>
                <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
                <Route path="/contact" element={<ContactScreen></ContactScreen>}></Route>
                <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
                <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
        </UsuarioProvider>
    )
}
