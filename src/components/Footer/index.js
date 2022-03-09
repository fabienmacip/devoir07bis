import styled from "styled-components";

export default function Footer({isLight, handleToggleTheme}) {
  return (
    <Wrapper>
      <button onClick={handleToggleTheme}>
        Switch to {isLight ? "dark" : "light"} theme
      </button>
      <Socials>
        <img src="/uploads/facebook.png" alt="Facebook" id="logo-facebook" className="logos-reseaux-sociaux"/>
        <img src="/uploads/instagram.png" alt="Instagram" id="logo-instagram" className="logos-reseaux-sociaux"/>
      </Socials>

    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*border-top : solid 1px;*/
  background-color: ${(props) => props.theme.mainColor};

  @media(max-width: 380px) {
    & button {
      max-width: 120px;
    }
  }
`;

const Socials = styled.div`
margin-left : 2rem;
& img {
  margin-left: 1rem;
}
`;