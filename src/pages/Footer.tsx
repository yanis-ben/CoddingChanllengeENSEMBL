import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import facebook from "./../assets/social/facebook-white.svg";
import instagram from "./../assets/social/instagram-white.svg";
import twitter from "./../assets/social/twitter-white.svg";
import apple from "./../assets/store/app-store.svg";
import google from "./../assets/store/play-store.svg";
import microsoft from "./../assets/store/windows-store.svg";

const Wrapper = styled(({ ...other }) => <div {...other}/>)`
  display: flex;
  color: aliceblue;
  background-color: #232323;
  padding-top: 2em;
  padding-bottom: 3em;
  padding-left: 15em;
  padding-right: 15em;
  position: ${(props) => props.$islistingPage ? 'fixed':'relative'};
  bottom: 0;
  left: 0;
  right: 0;
`;

const InternalLink = styled.div`
  color: white;
  text-align: left;
  width: 100%;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftIcon = styled.img`
  width: 40px;
  margin-right: 20px;
`;
const RightIcon = styled.img`
  width: 120px;
  margin-right: 20px;
`;

const Copyright = styled.p`
  font-size: small;
  margin-bottom: 40px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
`;

const Footer = () => {
    const history = useHistory();
    const page = history.location.pathname.split('/').pop() ;
    const islistingPage = page === 'series' || page === 'movies';

  return (
    <Wrapper $islistingPage={!islistingPage}>
        <InternalLink>
          <p>
              {" "}
              <Link href={"/"}>Home</Link> |{" "}
              <Link href={"/terms"}>Terms and condition</Link> |
              <Link href={"/privacy-policy"}>Privacy policy</Link> |{" "}
              <Link href={"/collection-statement"}>Collection statement</Link> |{" "}
              <Link href={"/help"}>Help</Link> |{" "}
              <Link href={"/manage-account"}>Manage account</Link>
          </p>
          <Copyright>
              Copyright © 2021 DEMO Streaming All Rights Reserved.
          </Copyright>
          <IconsWrapper>
              <div>
                  <LeftIcon src={facebook} alt="facebook" style={{ width: "25px" }} />
                  <LeftIcon src={twitter} alt="twitter" />
                  <LeftIcon src={instagram} alt="instagram" />
              </div>
              <div>
                  <RightIcon src={apple} alt="apple" />
                  <RightIcon src={google} alt="google" />
                  <RightIcon
                      src={microsoft}
                      alt="microsoft"
                      style={{ width: "100px" }}
                />
              </div>
          </IconsWrapper>
        </InternalLink>
    </Wrapper>
  );
};

export default Footer;