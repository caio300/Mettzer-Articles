import { CaretDown, CaretUp, FileArrowDown, Star } from 'phosphor-react'
import { useState } from 'react'
import {
  ArticleContainer,
  CardContainer,
  DescriptionContainer,
  UsefulContainer,
} from './styles'

export function CardArticle(articles) {
  const { article } = articles
  const [isDescription, setIsDescription] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClickFavorites = () => {
    console.log('Favoritou')
    setIsFavorite(!isFavorite)
  }

  return (
    <CardContainer>
      <ArticleContainer>
        <p>
          Title: <span>{article.title}</span>
        </p>
        <p>
          Autor(es):{' '}
          {article.authors.map((elem, index) => (
            <span key={index}>{elem}</span>
          ))}
        </p>
        <p>
          Tipo: <span>article</span>
        </p>
        <div onClick={() => setIsDescription(!isDescription)}>
          Descrição{' '}
          {isDescription ? <CaretDown size={18} /> : <CaretUp size={18} />}
        </div>
      </ArticleContainer>
      <UsefulContainer>
        <a href={article.downloadUrl} target="_blank" rel="noopener noreferrer">
          <FileArrowDown size={30} />
          Download
        </a>
        <div onClick={() => handleClickFavorites()}>
          <Star size={30} weight={isFavorite ? 'fill' : 'light'} />
          Favorite
        </div>
      </UsefulContainer>
      {isDescription ? (
        <DescriptionContainer>{article.description}</DescriptionContainer>
      ) : (
        false
      )}
    </CardContainer>
  )
}
