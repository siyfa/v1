import styled from "styled-components";

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
    background-color: rgba(0, 0, 0, 0.2);

    div{
        padding: 30px 60px;
        font-family: "Montserrat Alternates", sans-serif;

        img{
            width: 50px;
            height: 50px;
            border-radius: 5px;
            mix-blend-mode: multiply;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: center;
`;