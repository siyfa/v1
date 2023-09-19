import React, { useState, useEffect } from 'react';

import "./App.css";
import { Hero } from "./components/hero";
import { Splash } from "./components/splash";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
    {loading ? <Splash />: (
      <Hero />
    )}
    </>
  );
}

export default App;
