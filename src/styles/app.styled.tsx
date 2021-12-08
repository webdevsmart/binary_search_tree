import styled from "styled-components";

export const RootSection = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleSection = styled.div`
  font-weight: 900;
  text-align: center;
  font-size: 50px;
`;

export const TreeSection = styled.div`
  padding: 50px 0;
  width: 100%;
  margin-top: 20px;
  height: calc(100vh - 87px);
  background: black;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #00000000;
    box-shadow: inset 1px 1px 2px transparent;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: dodgerblue !important;
    border-radius: 10px;
    box-shadow: inset 1px 1px 2px rgb(155 155 155 / 40%);
  }
`;
