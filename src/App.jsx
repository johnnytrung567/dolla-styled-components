import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages'
import SignInPage from './pages/signin'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<SignInPage />} />
            </Routes>
        </Router>
    )
}

export default App
