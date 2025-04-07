import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./components/Body";
import Home from "./components/Home/Home"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}> 
          <Route path="/" element = {<Home/>} />
          </Route>  
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
