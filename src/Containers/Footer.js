import React from "react";
import styled from "styled-components";

const FooterMain = styled.footer`
  height: 40vh;
  margin: 20px;
  background: #0d0d0d;
  color: white;
  padding: 30px;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const IconSpan = styled.span`
  margin: 10px;
`;

const Myul = styled.ul`
  margin: 1px;
  li {
    list-style-type: none;
    padding-top: 15px;
    color: gray;
  }
`;

function Footer() {
  return (
    <FooterMain>
      <MainDiv>
        <div>
          <h1 style={{ textAlign: "center" }}>WTF</h1>
          <IconSpan>
            <i
              class="bi-facebook"
              style={{ color: "blue", fontSize: "32px" }}
            ></i>
          </IconSpan>
          <IconSpan>
            <i
              class="bi-instagram"
              style={{ color: "pink", fontSize: "32px" }}
            ></i>
          </IconSpan>
          <IconSpan>
            <i
              class="bi-twitter"
              style={{ color: "skyblue", fontSize: "32px" }}
            ></i>
          </IconSpan>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Myul>
            <li>About</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>WTF in News</li>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
          </Myul>
        </div>
        <div>
          <h3>Expore</h3>
          <Myul>
            <li>Arenas</li>
            <li>Stidios</li>
            <li>Nutrition</li>
          </Myul>
        </div>
        <div>
          <h3>Contact</h3>
          <div>
            <span style={{ color: "gray" }}>vikashkumar@gmail.com</span>
          </div>
        </div>
      </MainDiv>
    </FooterMain>
  );
}

export default Footer;
