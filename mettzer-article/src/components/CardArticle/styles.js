import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  background: ${(props) => props.theme['gray-100']};
  border-top: 1px solid ${(props) => props.theme['green-100']};
  padding: 1rem;
  margin-bottom: 1rem;
`

export const ArticleContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  width: 50%;

  p {
    color: ${(props) => props.theme['gray-500']};
    font-weight: 600;
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 600;
    color: ${(props) => props.theme['green-100']};
    cursor: pointer;
  }

  div:hover {
    text-decoration: underline;
  }
`

export const UsefulContainer = styled.div`
  display: flex;
  width: 50%;

  a {
    text-decoration: none;
  }

  div,
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme['green-100']};
  }
`

export const DescriptionContainer = styled.span`
  color: ${(props) => props.theme['gray-300']};
  font-weight: 400;
  padding-top: 0.5rem;
`
