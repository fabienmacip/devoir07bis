import styled from "styled-components";
import GridButton from "./GridButton";

//const list = ["el1","el2","el3","el4"];

export default function Galerie() {
  //const {buttonsList} = useSounds();
  return (
    <Wrapper>
      <h1>
        Galerie photos
      </h1>

      {/* <Grid>
        Page d'accueil */}
        
    {/*     {buttonsList.map(({}, index) => {
          return (
            <GridButton />);
        })} */}
        
      {/* </Grid> */}
       
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: start;
`;

const Grid = styled.div`
  display: grid;
  width: 400px;
  height: 400px;
  
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px; 
  margin: auto;

 @media(max-width: 640px) {
    width: 300px;
    height: 300px;
  }
`;