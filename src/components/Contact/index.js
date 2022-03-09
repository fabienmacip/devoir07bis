import styled from "styled-components";
import FormContact from '../forms/FormContact';


export default function Contact() {
  return (
    <Wrapper>
      <h1>
        Contact
      </h1>
      <div>
        <div>
          <FormContact />
        </div>      

        
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

width: 90%;

& div {

  display: flex;
  justify-content: center;
  width: auto;
  
}

@media(max-width: 860px) {
  & div {
    width: 100%;
  }
}
`;