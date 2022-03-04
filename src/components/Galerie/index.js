import styled from "styled-components";
import CardPhoto from "./CardPhoto";

//const list = ["el1","el2","el3","el4"];

export default function Galerie() {
  
  return (
    <Wrapper id="wrapper-galerie">
      <h1>
        Galerie photos
      </h1>
      <Grid>
        <CardPhoto id="1" url="uploads/bebe.jpg" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <CardPhoto id="1" url="uploads/couple.jpg" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <CardPhoto id="1" url="uploads/famille.jpg" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <CardPhoto id="1" url="uploads/grossesse.jpg" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <CardPhoto id="1" url="uploads/mariage.jpg" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
      </Grid>

       
    </Wrapper>
  )
}

const Wrapper = styled.div`
/* width: 100%;
display: flex;
align-items: start;
 */

`;

const Grid = styled.div`

  display: grid;
  width: 400px;
  height: 400px;
  
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px; 
  margin: auto;
  
  @media(max-width: 1260px) {
    grid-template-columns: 1fr 1fr;  
    }

  @media(max-width: 860px) {
    width: 300px;
    height: 300px;
  }

  @media(max-width: 640px) {
    grid-template-columns: 1fr;  
  }


`;