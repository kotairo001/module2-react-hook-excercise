import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Layout from "./components/Layout/Layout"
import UserDetail from './components/UserDetail';
import Users from './components/Users';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/users' element={<Users></Users>}></Route>
          <Route path='/userDetail' element={<UserDetail></UserDetail>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
