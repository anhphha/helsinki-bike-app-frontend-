import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
// import { AppBar, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <div className='footer'>
      {/* <br />
      <br />
      <br />
      <br />
      <AppBar position="static">
        <br />
        <br />
        <Toolbar> */}
          <h3 align="center" > Made by Anh Ha</h3>
          {/* <br /> */}
          <GithubLink
            href="https://github.com/anhphha"
            target="_blank"
            rel="noopener"
          >
            <FaGithub />
          </GithubLink>
          {/* <a href="https://unsplash.com/@tap5a">Background pic by Tapio Haaja</a> */}
        {/* </Toolbar>
      </AppBar> */}
    </div>
  );
};

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.3rem;
  font-size: 2rem;
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Footer;
