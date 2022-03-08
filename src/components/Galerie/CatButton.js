import styled from "styled-components";

export default function CatButton({id,titre}) {
    
  return (
    <Wrapper key={id}>
      <div>
        {titre}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.button`

border-radius: 5px;

  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};

 @media(max-width: 640px) {
  }
`;