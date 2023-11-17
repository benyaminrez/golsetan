import { Routes , BrowserRouter , Route } from "react-router-dom"
import './App.css'
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import ConectUs from "./pages/ConectUs/ConectUs"
import ApartementFlowers from "./pages/ApartementFlowers/ApartementFlowers"
import KindCactus from "./pages/KindCactus/KindCactus"
import ScrollUp from "./components/scrollup/Scrollup"
import Login from "./pages/login/Login"
function App() {

  return (
    <>
    <BrowserRouter>
<Header />
<Routes>
<Route path="/"  element={<Home />} />
<Route path="/About"  element={<About />} />

<Route path="/ConectUs"  element={<ConectUs />} />
<Route path="/KindCactus"  element={<KindCactus />} />
<Route path="/Login"  element={<Login />} />

<Route path="/ApartementFlowers"  element={<ApartementFlowers />} />


{/* </Route>
<Route path="/Todo"  element={q
  <TodoProvider>
    <Todo></Todo>
  </TodoProvider>
}>
*/}


</Routes>
<ScrollUp />
</BrowserRouter>
     
    </>
  )
}

export default App
