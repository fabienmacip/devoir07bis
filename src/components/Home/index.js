import styled from "styled-components";


//const list = ["el1","el2","el3","el4"];

export default function Home() {
  //const {buttonsList} = useSounds();
  return (
    <Wrapper>
      <HomeDiv>
      <HomeTitle>
        Bienvenue chez<br/>Charles Cantin<br/>-<br/>Photographe professionnel et artiste
      </HomeTitle>
      
      <img src="uploads/photographe.jpg" alt="photographe"/>

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
`;

