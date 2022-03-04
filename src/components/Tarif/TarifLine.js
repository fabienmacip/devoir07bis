import styled from "styled-components";

export default function TarifLine({prix,titre,description}) {
  return (
    <Wrapper>
      <div>{isNaN(prix) ? prix : prix + " €"}</div><div><h2>{titre}</h2>{description}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;