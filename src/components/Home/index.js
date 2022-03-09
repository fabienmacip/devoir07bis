import styled from "styled-components";

import {useEffect, useState} from 'react';
import useContentful from "useContentful";

//const list = ["el1","el2","el3","el4"];

export default function Home() {
  
  const [homePage, setHomePage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { getHomePage } = useContentful();

  useEffect(() => {
    fetchHomePage()
  }, []);  

  const fetchHomePage = async () => {
    const data = await getHomePage();
    setHomePage(data);
    setIsLoading(false);
  }



  return (
    <Wrapper>
      <HomeDiv>
      <HomeTitle>
      {isLoading ? "" : homePage[0].titre}
        
      </HomeTitle>
      
      {isLoading ? "..." : <img src={homePage[0].photo.fields.file.url} alt="photographe" />}

      </HomeDiv>
       
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: start;
`;

const HomeDiv = styled.div`
  position: relative;
  text-align: center;
  color: #000;
  font-size: 2.5rem;
  & img {
    width: 100%;
    height: 100%;
  }

`;

const HomeTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(179, 179, 179, 0.466)  ;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  padding: 0.3rem 1.2rem 0.5rem 1.2rem;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  max-width: 40%;

  @media(max-width: 900px) {
    font-size: 2rem;
    max-width: 80%;
   }

   @media(max-width: 640px) {
    font-size: 1.7rem;
    max-width: 80%;
   }
`;

