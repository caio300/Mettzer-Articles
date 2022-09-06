import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 3rem 0;
  height: 100vh;
`

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70rem;
  margin: 0 2rem 0 2rem;
  padding-top: 1rem;
  border-radius: 8px;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 2.5rem;

  input {
    border: none;
    width: 20rem;
    height: 3.5rem;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme['green-100']};
    padding-left: 0.5rem;
  }

  input:focus {
    outline: transparent;
  }

  button {
    border: none;
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: ${(props) => props.theme['green-100']};
    border-radius: 8px;
    cursor: pointer;
  }

  button:hover {
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme.white};
  }
`
