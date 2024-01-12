
import { Route, Routes } from 'react-router'
import HomePage from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Portfolio from './components/pages/Portfolio'
import Detail from './components/pages/detail'
import { SignupForm } from './components/pages/AddPage'


function App() {
  

  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path='/SignupForm' element={<SignupForm/>}/>
      </Routes>
    </>
  )
}

export default App

