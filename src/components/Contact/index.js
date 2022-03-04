import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper>
      <h1>
        Contact
      </h1>
      <p>
        Formulaire contact
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & p {
    margin: 12px;
  }
`;