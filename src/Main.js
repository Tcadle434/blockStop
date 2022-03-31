import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Homepage } from "./containers/homepage";
import { Partners } from "./containers/partners";
import { Services } from "./containers/services";
import { CustomLoader } from "./components/customLoader";


const Main = () => {
  return (
    <Suspense fallback={<CustomLoader />}>
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={ <Homepage />}></Route>
      <Route exact path='/partners' element={ <Partners />}></Route>
      <Route exact path='/services' element={ <Services />}></Route>
    </Routes>
    </Suspense>
  );
}

export default Main;