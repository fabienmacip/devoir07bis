import styled from "styled-components";
import {Link} from 'react-router-dom';

export default function CardPhoto({id,url,titre}) {
  
  
  return (
    <Wrapper key={id}>
      <div>
        <img src={url} alt={titre}/>
      </div>
      <Link to={`/photo/${id}`}>
        <div>
          {titre}
        </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  
  margin: auto;

  & img {
    width: 90%;
  }

 @media(max-width: 640px) {
    width: 300px;
    height: 300px;
  }
`;