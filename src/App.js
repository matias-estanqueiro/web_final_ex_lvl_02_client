import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ----- Pages -----
import Main from '../src/pages/Main'
import User from '../src/pages/User'
import Shop from '../src/pages/Shop'
import Blog from '../src/pages/Blog'
import MeetUs from './pages/MeetUs';
import Error404 from './pages/Error404'

// ----- Components -----
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UserLogin from './components/UserLogin';
import UserSingUp from './components/UserSingUp';


function App() {
    return (
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/user' element={<User />} />
                        <Route path='/user/login' element={<UserLogin />} />
                        <Route path='/user/register' element={<UserSingUp />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/meet-us' element={<MeetUs />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
    );
}

export default App;
