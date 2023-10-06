import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import UpdatePassword from './screens/UpdatePassword';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const token = localStorage.getItem("token")

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path='/*' element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/updatepassword" element={<UpdatePassword />} />
            <Route path='/*' element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
