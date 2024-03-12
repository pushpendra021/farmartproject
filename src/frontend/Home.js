import React from "react";
import styled from "styled-components";

const Home=()=>{
    return (
        //  wrapper is a section or div or component in side styled component
        <Wrapper className="test">Home</Wrapper>
    );
}

const Wrapper = styled.section`
height: 100vh;
background-color: &{({theme})=> theme.colors.bg};

`; 
export default Home;