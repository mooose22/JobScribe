import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  .logo {
    margin-top: 7rem;
    background-color: white;
    max-width: 170px;
  }

  .big-sidebar-logo {
    width: 16px;
    height: 16px;
  }

  h1 {
    margin-top: 3rem;
    font-weight: 700;
    span {
      color: #a8b3d9;
    }
  }
  p {
    color: #f2f6f8;
  }

  .btn {
    font-size: 1rem;
    color: white;
    background-color: #4e74c3;
    /* Hover Styles */
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #a8b3d9;
  }

  .main-img {
    margin-top: 2rem;
    display: none;
  }
  @media (min-width: 750px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;
