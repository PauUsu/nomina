import  Header  from "./assets/components/layouts/components/auth/Header";
import  InfoLogin  from "./assets/components/layouts/components/auth/InfoLogin";
import  Login  from "./assets/components/layouts/components/auth/Login";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="containerInfo">
        <InfoLogin />
        <Login />
      </div>
    </React.Fragment>
  )
}

export default App;
