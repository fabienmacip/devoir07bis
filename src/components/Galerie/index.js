import styled from "styled-components";
import CardPhoto from "./CardPhoto";
import CatButton from "./CatButton";

// Utilisation de Contentful CMS
import {useEffect, useState} from 'react';
import useContentful from '../../useContentful';

//const list = ["el1","el2","el3","el4"];

export default function Galerie() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const { getPhotos } = useContentful();
  

  useEffect(() => {
    fetchPhotos()
  }, []);  

  const fetchPhotos = async () => {
    const data = await getPhotos();
    setPhotos(data);
    setIsLoading(false);
  }

  // Génération de la liste des catégories
  const tabCat = () => {
    const tab1 = photos.map((val) => val.categorie[0]);
    const tabCatOK = tab1.filter((val, ind, arr) => arr.indexOf(val) === ind);
    return tabCatOK;
  }

  return (
    <Wrapper id="wrapper-galerie">
      <h1>
        Galerie photos
      </h1>

<br/><br/><div>

{isLoading ? "loading" : console.log(tabCat())}


{ isLoading ? "loading" : tabCat().map((cat,index) => <CatButton key={index} titre={cat} />) }


</div><br/><br/>

      <Grid>
      {/* isLoading ? "loading" : photos.map((cat,index) => <CatButton key={index} titre={cat.categorie} />)  */}
        { isLoading ? "loading" : console.log(photos) }
        { isLoading ? "loading" : photos.map((obj,index) => <CardPhoto key={index} titre={obj.titre} url={obj.photo.fields.file.url} />) }

        {/* <CardPhoto id="1" url="uploads/bebe.jpg" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <CardPhoto id="1" url="uploads/couple.jpg" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <CardPhoto id="1" url="uploads/famille.jpg" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <CardPhoto id="1" url="uploads/grossesse.jpg" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <CardPhoto id="1" url="uploads/mariage.jpg" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" /> */}
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