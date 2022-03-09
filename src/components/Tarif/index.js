import styled from "styled-components";
import TarifLine from "./TarifLine";
import { useEffect, useState } from "react";

import useContentful from '../../useContentful';

export default function Tarif() {
  
  const [tarifs, setTarifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { getTarifs } = useContentful();

  useEffect(() => {
    fetchTarifs()
  }, []);  

  const fetchTarifs = async () => {
    const data = await getTarifs();
    setTarifs(data);
    setIsLoading(false);
    
    
  }

  
  return (
    <Wrapper>
      <h1>
        Tarifs & Prestations
      </h1>
      <Grid>

      
      {isLoading ? "loading tarifs" : tarifs.map((obj,ind) => <TarifLine key={ind} prix={obj.prix} titre={obj.titre} description={obj.description} />)}
       {/*  <TarifLine key="1" prix="130" titre="Photos anniversaire" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <TarifLine key="2" prix="131" titre="Photos anniversaire" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <TarifLine key="3" prix="130" titre="Photos anniversaire" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <TarifLine key="4" prix="130" titre="Photos anniversaire" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <TarifLine key="5" prix="130" titre="Photos anniversaire" description="Faites-vous plaisir avec un souvenir inoubliable de votre anniversaire" />
        <TarifLine key="6" prix="Sur mesure" titre="Photos mariage" description="Lorem ipsum..." /> */}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & p {
    margin: 12px;
  }
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