import styled from "styled-components";

export default function CardPhoto({id,url,description}) {
  
  
  return (
    <Wrapper key={id}>
      <div>
        <img src={url} alt={description}/>
      </div>
      <div>
        {description}
      </div>
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