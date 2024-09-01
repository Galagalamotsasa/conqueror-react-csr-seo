import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css'
import MainLayout from '@layouts/MainLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Helmet>
        <title>Welcome to Conqueror!!!</title>
      </Helmet>
      <MainLayout />
    </>
  )
}

export default App
