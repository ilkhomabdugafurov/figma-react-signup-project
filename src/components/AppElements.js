import styled from "styled-components";
import bgImg from "../assets/bg.png";

export const Container = styled.div`
    background: #eefcff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Wrapper = styled.div`
    background-image: url(${bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
`;
