import './App.css'
import Header from './componets/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import About from './pages/About'
import Footer from './componets/Footer'

function App(){
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path= '/contact' element={<Contact/>}/>
        <Route path= '/portfolio' element={<Portfolio/>}/>
        <Route path= '/resume' element={<Resume/>}/>
      </Routes>

      <Footer/>


    </BrowserRouter>
  )
}

export default App
