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
    console.log(data)
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
      <h1>
        Galerie photos
      </h1>

<br/><br/><div>



<div>
<button type="submit" key={"all"} onClick={handleFiltreCategorie} value="all">Tout</button>
{ isLoading ? "loading" : tabCat().map((cat,index) => <button type="submit" key={index} value={cat} onClick={handleFiltreCategorie}>{cat}</button>) }

</div>


</div><br/><br/>

      <Grid>

        
        { isLoading ? "loading" : photos.filter((i) => {
          return filtreCategories === "all" ? i.fields.titre !== "" : i.fields.categorie[0] === filtreCategories 
        }).map((obj,index) => <CardPhoto key={index} id={obj.sys.id} titre={obj.fields.titre} url={obj.fields.photo.fields.file.url} />) 
        }

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