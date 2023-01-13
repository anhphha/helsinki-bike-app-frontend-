import React, { useState, useEffect } from "react";
import { Button2 } from "./Button";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //   useEffect(() => {
  //     showButton();
  //   }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fa-solid fa-tree-city"/>
            City App
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/journeys"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Journeys
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/stations"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Stations
              </Link>
            </li>

            <li>
              <Link
                to="/home"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
          </ul>
          {button && <Button2 buttonStyle="btn--outline">Home</Button2>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import { AppBar, IconButton, Toolbar, Typography, Button } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

// const Navbar = () => {
//   return (
//     <AppBar position='static'>
//       <Toolbar>
//         <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
//           <DirectionsBikeIcon />
//         </IconButton>
//         <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
//           Helsinki City Bike App
//         </Typography>
//         <Stack direction='row' spacing={2}>
//           <Button color='inherit'>Journeys</Button>
//           <Button color='inherit'>Stations</Button>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
