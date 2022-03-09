import styled from "styled-components";

export default function TarifLine({prix,titre,description}) {
  return (
    <Wrapper>
      <div>
        {isNaN(prix) ? prix : prix + " €"}
      </div>
      <div>
        <h2>{titre}</h2>
        <Description>{description}</Description>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.backgroundColorLight};
  border-radius: 5px;
  & h2 {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

`;

const Description = styled.div`
  line-height: 1.3rem;
`;
