import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FreeSolo from "./components/Autocomplete";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
// import { Autocomplete } from "@mui/material";
// import { Button } from '@material-ui/core';

const App = () => {
  // //Client input
  // const [departure_station, setDepartureStation] = React.useState("");
  // const [return_station, setReturnStation] = React.useState("");
  // const handleInput = () => {
  //   console.log(departure_station, return_station);
  // };

  //Current position
  // useEffect(() => {
  //   try {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log(position);
  //     });
  //   } catch (e) {
  //     console.log("The Locator was denied.");
  //   }
  // }, []);

  return (
    <>
      <Router>
        <Navbar />
        <br/>
        <Routes>
          {/* <Route path="/" exact /> */}
          <Route path="/" element={<FreeSolo />} />
          <Route path="/home" exact element={<Home />} />
        </Routes>
        <br/>
        {/* <FreeSolo /> */}
        <br/>
        <Footer />
      </Router>
    </>

    // <div
    //   className="container"
    //   style={{ flexDirection: "column", display: "flex" }}
    // >
    //   < div className="main">
    //     {/* <form
    //     className="form-group custom-form"
    //     autoComplete="off"
    //     onSubmit={departureOptions}
    //   ></form> */}
    //     {/* <input
    //     placeholder="departure station"
    //     onChange={(e) => setDepartureStation(e.target.value)}
    //   />
    //   <input
    //     placeholder="return station"
    //     onChange={(e) => setReturnStation(e.target.value)}
    //   />
    //   <button onClick={() => handleInput()}>Input</button>
    //   {departure_station ? (
    //     <p>
    //       {" "}
    //       New journey from {departure_station} to {return_station} received
    //     </p>
    //   ) : (
    //     ""
    //   )} */}
    //     <Navbar />
    //     <br />
    //     <br />
    //     {/* <Routes>
    //       <Route path="/" element={<Home />} />
    //     </Routes> */}
    //     {/* <FreeSolo /> */}
    //     <Home/>
    //     {/* <form>
    //     <button type="submit" variant="contained" color="primary" >
    //       Submit
    //     </button>
    //   </form> */}
    //   </div>
    //   <Footer />
    // </div>
  );
};

export default App;
