import React from 'react';
import Header from "./Header";
import Scroll from "./Scroll";
import Footer from "./Footer";

function App() {

  let height = window.innerHeight;
  return (
      <div style={{height: height}}>
        <Header />
        <Scroll />
        <Footer/>
      </div>
      );
}

export default App;
