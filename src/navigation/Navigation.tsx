import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LoginScreen = React.lazy(() => import('../screens/Login/LoginScreen'));
const HomeScreen = React.lazy(() => import('../screens/Home/HomeScreen'));
const DetailScreen = React.lazy(() => import('../screens/Detail/DetailScreen'));

const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading . . .</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/detail/:name" element={<DetailScreen />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default Navigation