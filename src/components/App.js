import React from "react";
import { Container, Wrapper } from "./AppElements";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Main />
                    <Sidebar />
                </Wrapper>
            </Container>
        </div>
    );
}

export default App;
