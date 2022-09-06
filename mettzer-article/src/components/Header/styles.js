import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin: 1rem;
  }
`

export const LinksHeader = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;

  nav {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 600;
  }

  a {
    width: 16rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 1rem;
    color: ${(props) => props.theme['gray-500']};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['green-100']};
    }

    &.active {
      border-bottom: 1px solid ${(props) => props.theme['green-100']};
    }
  }

  svg {
    color: ${(props) => props.theme['green-100']};
  }
`
