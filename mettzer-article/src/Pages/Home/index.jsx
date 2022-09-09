import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'
import axios from 'axios'
import { CardArticle } from '../../components/CardArticle'
import { HomeContainer, MainContainer, SearchContainer } from './styles'
import { NotArticles } from '../../components/NotArticles'

export function Home() {
  const [searchInput, setSearchInput] = useState('')
  const [articles, setArticles] = useState([])

  const handleChange = (target) => {
    const string = target.value.toLowerCase()
    const stringModify = string.replace(/ /g, '%20')
    setSearchInput(stringModify)
  }

  const handleClick = async () => {
    if (searchInput) {
      const response = await axios.get(
        `https://core.ac.uk:443/api-v2/articles/search/${searchInput}?page=1&pageSize=10&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=zNAMcfJVu3K2jFgZBo4qRas5DipeHkxC`,
      )
      setSearchInput('')
      setArticles(response.data.data)
    }
  }

  return (
    <HomeContainer>
      <MainContainer>
        <SearchContainer>
          <input
            type="text"
            placeholder="Pesquise um artigo"
            onChange={(e) => handleChange(e.target)}
          />
          <button onClick={() => handleClick()}>
            Pesquisar
            <MagnifyingGlass size={24} />
          </button>
        </SearchContainer>
        {articles.length === 0 ? (
          <NotArticles />
        ) : (
          articles.map((elem) => <CardArticle key={elem.id} article={elem} />)
        )}
      </MainContainer>
    </HomeContainer>
  )
}
