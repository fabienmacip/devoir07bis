import styled from "styled-components";
import CardPhoto from "./CardPhoto";
//import CatButton from "./CatButton";

// Utilisation de Contentful CMS
import {useEffect, useState} from 'react';
import useContentful from '../../useContentful';

//const list = ["el1","el2","el3","el4"];

export default function Galerie() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const { getPhotos } = useContentful();
  const[filtreCategories,setFiltreCategories] = useState("all");

  useEffect(() => {
    fetchPhotos()
  }, []);  

  const fetchPhotos = async () => {
    const data = await getPhotos();
    setPhotos(data);
    //console.log(data)
    setIsLoading(false);
  }

  // Génération de la liste des catégories
  const tabCat = () => {
    const tab1 = photos.map((val) => val.fields.categorie[0]);
    const tabCatOK = tab1.filter((val, ind, arr) => arr.indexOf(val) === ind);
    return tabCatOK;
  }

  const handleFiltreCategorie = (e) => {
    setFiltreCategories(e.target.value)
  }




  return (
    <Wrapper id="wrapper-galerie">
      <ContentGalerie>
        <h1>
          Galerie photos
        </h1>

        <br/><br/><div>



        <Buttons>
        <button type="submit" key={"all"} onClick={handleFiltreCategorie} value="all">Tout</button>
        { isLoading ? "loading" : tabCat().map((cat,index) => <button type="submit" key={index} value={cat} onClick={handleFiltreCategorie}>{cat}</button>) }

        </Buttons>


        </div><br/><br/>

        <Grid>

          
          { isLoading ? "loading" : photos.filter((i) => {
            return filtreCategories === "all" ? i.fields.titre !== "" : i.fields.categorie[0] === filtreCategories 
          }).map((obj,index) => <CardPhoto key={index} id={obj.sys.id} titre={obj.fields.titre} url={obj.fields.photo.fields.file.url} />) 
          }

        </Grid>


      </ContentGalerie>
       
    </Wrapper>
  )
}

const Wrapper = styled.div`
 width: 100%;
display: flex;
justify-content: center;

margin-bottom: 1rem;
`;

const ContentGalerie = styled.div`

`;

const Buttons = styled.div`
  
  padding: 1rem;
  text-align: center;
  & button {
    border-radius: 5px;
    margin: 0.3rem;
    width: 7rem;
  }

  @media(max-width: 900px) {
   
    text-align: left;
  }
`;


const Grid = styled.div`

  display: grid;
  width: 95%;
    
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px; 
  margin: auto;
  
  @media(max-width: 1360px) {
    grid-template-columns: 1fr 1fr;  
    
    }

  

  @media(max-width: 860px) {
    
    /* width: 300px;
    height: 300px; */
  }

  @media(max-width: 900px) {
    grid-template-columns: 1fr;  
   
  }
`;

