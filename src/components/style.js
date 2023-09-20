import styled from "styled-components";
import SFLogo from "../assets/images/sf.png";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
`;

export const Logo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 2px;
    background-image: url(${SFLogo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;