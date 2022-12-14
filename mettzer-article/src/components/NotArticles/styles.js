import styled from 'styled-components'

export const NotArticlesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  div {
    color: ${(prop) => prop.theme['gray-300']};
  }
`
