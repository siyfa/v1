import React, { useState, useEffect } from "react";
import { Hero } from "./sections/hero";
import { Splash } from "./components/splash";
import { About } from "./sections/about";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          <Hero />
          {/* <About /> */}
        </>
      )}
    </>
  );
}

export default App;
