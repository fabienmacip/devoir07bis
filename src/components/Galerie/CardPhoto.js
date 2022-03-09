import styled from "styled-components";
import {Link} from 'react-router-dom';

export default function CardPhoto({id,url,titre}) {
  
  
  return (
    <Wrapper key={id}>
      <Link to={`/photo/${id}`}>
        <div>
          <img src={url} alt={titre}/>
        </div>
          <div className="titre-photo-galerie">
            {titre}
          </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 400px;
  justify-content: center;

  border-radius: 5px;
  border: 1px solid lightgrey;
  padding: 0.3rem;
  background-color: ${(props) => props.theme.backgroundColorLight};

  margin: auto;

  & img {
    width: 100%;
  }

  & a:visited, a:link {
    color: ${(props) => props.theme.mainColor};
  }

  @media(max-width: 900px) {
    width: 90%;
   
  }

 @media(max-width: 640px) {
    width: 96%;
  }


`;