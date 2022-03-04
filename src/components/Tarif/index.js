import styled from "styled-components";

export default function Tarif() {
  return (
    <Wrapper>
      <h1>
        Tarifs & Prestations
      </h1>
      <p>
        Prix ici...
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & p {
    margin: 12px;
  }
`;