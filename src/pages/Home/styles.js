import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 100px;
`;

export const Title = styled.h1`
  color: #073b4c;
  font-size: 64px;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
`;

export const Button = styled.button`
  background: #118ab2;
  border: 0;
  border-radius: 2px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;
  padding: 10px;
  text-transform: uppercase;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.6;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
