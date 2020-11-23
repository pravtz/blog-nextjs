import styled from "styled-components";

export const container = styled.div`
  display: flex;
`;
export const wrapperImage = styled.div`
  img {
    border-radius: 50%;
  }
`;
export const wrapperProfile = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const nameProfile = styled.h1`
  font-family: ${(props) => props.theme.fonts.font_family_secundary};
  color: #558;
  font-size: 36px;
  font-weight: 700;
`;
export const descriptionProfile = styled.h2`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.font_family_primary};
`;
