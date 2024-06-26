import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import SignUp from './pages/SignUp';  
import SignIn from './pages/SignIn'; 
import Dashboard from './pages/Dashboard'; 

function App() {
  return <>
  <BrowserRouter>
  <Routes>
  <Route path='/signup' element = {<SignUp></SignUp>}></Route>
  <Route path='/signin' element = {<SignIn></SignIn>}></Route>
  <Route path='/dashboard' element = {<Dashboard></Dashboard>}></Route>
  </Routes>
  </BrowserRouter>
  </>
}

export default App
