import styled from "styled-components";

// Utilisation de Contentful CMS
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import useContentful from "useContentful";

import { Link } from "react-router-dom";

export default function Photo() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [photo, setPhoto] = useState([]);
  
  const { getPhoto } = useContentful();
  
  const {id} = useParams();
  

  useEffect(() => {
    fetchPhoto(id)
  }, []);  


    const fetchPhoto = async (id) => {
    const data = await getPhoto(id);
    setPhoto(data);
    setIsLoading(false);
  } 

  return (
    <Wrapper id="wrapper-photo">
      
      <Link to='/galerie'>
      <h1>
        { isLoading ? "loading" : photo[0].fields.titre }
      </h1>
        <div>
          { isLoading ? "loading" : <img src={photo[0].fields.photo.fields.file.url} alt={photo[0].fields.titre} />}
        </div>
      </Link>
       
    </Wrapper>
  )
}

const Wrapper = styled.div`
/* width: 100%;
display: flex;
align-items: start;
 */

`;