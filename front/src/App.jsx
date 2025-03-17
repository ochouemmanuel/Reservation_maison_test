import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Footer from "./composants/footer"
import './App.css'
import HomePage from "./pages/HomePage"
import MaisonPage from "./pages/MaisonPage"
import ReservationPage from "./pages/ReservationPage"
import Confirm from "./pages/confirm"

function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/reservation" element={<ReservationPage/>} />
          <Route path="/reservation/:id" element={<ReservationPage />} />
          <Route path="/maison" element={<MaisonPage/>} />
          <Route path="/confirmation" element={<Confirm/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
