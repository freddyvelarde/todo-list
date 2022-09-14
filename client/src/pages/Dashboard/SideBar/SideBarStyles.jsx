import styled from "styled-components";

export const SideBarStyles = styled.div`
  background: ${({ color }) => color.third};
  color: ${({ color }) => color.titles};
  transition: 0.3s;
  height: 100vh;
  .header {
    width: 100%;
    height: 15vh;
    background: ${({ color }) => color.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
    }
  }
  .menu {
    height: 83vh;
    padding: 1vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .button {
    span {
      font-size: 10px;
      display: none;
      position: absolute;
      padding: 0.5vh 0.5%;
      left: 0;
      border: 1px solid ${({ color }) => color.titles};
      background: ${({ color }) => color.primary};
    }
    &:hover {
      span {
        display: block;
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    width: 30px;
    color: ${({ color }) => color.sidebar};
  }
  .logout {
    width: 35%;
    border-radius: 10px;
    /* background: ${({ color }) => color.secondary}; */
  }

  @media screen and (max-width: 575px) {
    position: fixed;
    height: 100vh;
    width: 15%;
  }
`;