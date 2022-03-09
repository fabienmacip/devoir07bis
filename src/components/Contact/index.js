import styled from "styled-components";
import FormContact from '../forms/FormContact';


export default function Contact() {
  return (
    <Wrapper>
      <h1>
        Contact
      </h1>
      <div>
        <FormContact />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & p {
    margin: 12px;
  }
`;