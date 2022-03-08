import styled from "styled-components";
import CardPhoto from "./CardPhoto";
import CatButton from "./CatButton";

// Utilisation de Contentful CMS
import {useEffect, useState} from 'react';
import useContentful from '../../useContentful';

//const list = ["el1","el2","el3","el4"];

export default function Galerie() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { getCategories } = useContentful();

  useEffect(() => {
    fetchCategories()
  }, []);  

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
    setIsLoading(false);
  }

  return (
    <Wrapper id="wrapper-galerie">
      <h1>
        Galerie photos
      </h1>

<br/><br/><div>
{isLoading ? "loading" : categories.map((cat,index) => <CatButton key={index} titre={cat.titre} />)}

</div><br/><br/>

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