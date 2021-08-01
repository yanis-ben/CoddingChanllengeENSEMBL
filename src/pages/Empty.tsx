import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 10em;
`;

const Empty = () => {
    const history = useHistory();
    
  return (
          <div>
            <Wrapper>
              This page does not exist yet.{" "}
              <button onClick={() => history.push("/")}>Back to home</button>
            </Wrapper>
          </div>
  );
};

export default Empty;