import React, { lazy, Suspense } from 'react'
import './App.css';
import Main from './Main.js';
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