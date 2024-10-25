import { BrowserRouter,Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import LoginPage from "./components/LoginPage"
import Profile from "./components/Profile"

function App() {

  return (
    <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<Body/>}>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
