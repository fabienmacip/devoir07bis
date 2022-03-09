import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";




export default function Header() {
  const location = useLocation();
  //console.log(location);
  let burgerOpened = false;

  
  const openBurger = (e) => {
    const burgerDiv = document.getElementById("burger-menu-links");
    
    if(burgerOpened){
      burgerDiv.style.display = "none";
    } else {
      burgerDiv.style.display = "block";
    }
    burgerOpened = !burgerOpened;
  }

  const closeBurger = (e) => {
    const burgerDiv = document.getElementById("burger-menu-links");
    burgerDiv.style.display = "none";
  }

  return (
    <Wrapper>
      <div>
        <img src="/uploads/logo.jpg" alt="logo Charles Cantin" id="logo" />
      </div>
      
      <nav id="nav">
        <MenuEl isCurrentPage={location.pathname === "/"}><Link to="/">Home</Link></MenuEl>
        <MenuEl isCurrentPage={location.pathname === "/galerie"}><Link to="/galerie">Galerie</Link></MenuEl>
        <MenuEl isCurrentPage={location.pathname === "/tarif"}><Link to="/tarif">Tarifs</Link></MenuEl>
        <MenuEl isCurrentPage={location.pathname === "/contact"}><Link to="/contact">Contact</Link></MenuEl>
      </nav>

      <nav id="burger-nav">
        <Burger>
          <div onClick={openBurger} id="burger-div">
            <img src="/uploads/burger.png" id="burger-img" alt="" /><br/>
          </div>
          <div id="burger-menu-links">
            <div>
              <MenuEl isCurrentPage={location.pathname === "/"} onClick={closeBurger}><Link to="/">Home</Link></MenuEl><br/>
            </div>
            <div>
              <MenuEl isCurrentPage={location.pathname === "/galerie"} onClick={closeBurger}><Link to="/galerie">Galerie</Link></MenuEl><br/>
            </div>
            <div>
              <MenuEl isCurrentPage={location.pathname === "/tarif"} onClick={closeBurger}><Link to="/tarif">Tarifs</Link></MenuEl><br/>
            </div>
            <div>
              <MenuEl isCurrentPage={location.pathname === "/contact"} onClick={closeBurger}><Link to="/contact">Contact</Link></MenuEl>
            </div>
          </div>

        </Burger>
      </nav>
    </Wrapper>
  )
}

const Burger = styled.div`
position: absolute;
top: 0;
right: 0;
background-color: silver;
padding: 1rem;

border-radius: 2px;

z-index: 3;
`;


const Wrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0px 24px;
  align-items: center;
  /*border-bottom : solid 1px;*/
  & a {
    text-decoration: none;
    color: inherit:
  }
  & a:first-child {
    /*margin-right: 16px;*/
  }

  & a:visited, a:link {
    color: ${(props) => props.theme.mainColor};
  }

  margin-bottom: 1rem;

`;

const MenuEl = styled.p`
font-size: 18px;
padding-bottom: 2px;
margin-right: 16px;  
border-bottom: solid 2px 
  ${(props) => (props.isCurrentPage ? "": "transparent")};
&:hover{
    border-bottom: solid 2px;
  }
`;