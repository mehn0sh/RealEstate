import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import PropertyDetail from './components/pages/PropertyDetail'
function App() {

  return (
  <div className='max-w-[85%] mx-auto bg-white min-h-screen flex flex-col'>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Property/:id' element={<PropertyDetail/>}/>   
     </Routes>
     <Footer/>
  </div>
  )
}

export default App
