import { MagnifyingGlass } from 'phosphor-react'
import { CardArticle } from '../../components/CardArticle'
import { HomeContainer, MainContainer, SearchContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <MainContainer>
        <SearchContainer>
          <input type="text" placeholder="Pesquise um artigo" />
          <button>
            Pesquisar
            <MagnifyingGlass size={24} />
          </button>
        </SearchContainer>
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </MainContainer>
    </HomeContainer>
  )
}
