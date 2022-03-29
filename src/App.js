import React from "react";
import './App.css';
import Main from './Main.js';
import { Suspense } from 'react';
import { CustomLoader } from "./components/customLoader";
import { Homepage } from "./containers/homepage";


function App(props) {
  return (
    <Suspense fallback={<CustomLoader />}>
      <Main />
    </Suspense>
  );
}

export default App;