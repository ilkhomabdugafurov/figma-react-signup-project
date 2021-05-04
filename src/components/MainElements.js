import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 65px;
        font-weight: 600;
        color: #343434;

        @media screen and (max-width: 900px) {
            display: none;
        }
    }
`;
