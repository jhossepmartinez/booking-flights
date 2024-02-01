import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Flights from './components/Flights/Flights'

// Router

function App() {
    return (
        <BrowserRouter>        
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/flights" element={<Flights />}/>
            </Routes>
        </BrowserRouter>        
    )
}

export default App
