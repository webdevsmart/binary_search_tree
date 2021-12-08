import styled from "styled-components";

export const RootSection = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleSection = styled.div`
  font-size: 50px;
`;

export const TreeSection = styled.div`
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
  }

  li {
    width: 100%;
    list-style: none;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 1em;
    position: relative;
    /* :first-child {
      left: calc(50% - 0.03125em);
      max-width: calc(50% + 0.0625em);
    }
    :not(:first-child) {
      ::before {
        border-top: 0.0625em solid #000;
        content: "";
        display: block;
        height: 0.0625em;
        left: -0.03125em;
        position: absolute;
        top: -1.03125em;
        width: 100%;
      } 
    } */
  }

  span {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: none;
    background: dodgerblue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    ::after {
      top: calc(100% + 0.03125em);
      border-left: 0.0625em solid #000;
      content: "";
      display: block;
      height: 1em;
      left: calc(50% - 0.03125em);
      position: absolute;
      width: 0.0625em;
    }
  }
`;
