import Navbar from "./Navbar"
import Landing from "./pages/landingpage";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import {Route, Routes} from "react-router-dom"

function App(){

    return(
      <>
      <Navbar />
      <div className="container">
      <Routes>
          <Route path="/" element={ <Landing />} />
          <Route path="/page1" element={ <Page1 />} />
          <Route path="/page2" element={ <Page2 />} />
          <Route path="/page3" element={ <Page3 />} />
        </Routes>
      </div>
      </>
    )
}


export default App

{/**
  let component
    switch(window.location.pathname){
      case "/":
        component = <Landing />
        break
      case "/page1":
        component = <Page1 />
        break
      case "/page2":
        component = <Page2 />
        break
      case "/page3":
        component = <Page3 />
        break

 */}