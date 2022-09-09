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
    const myFavorites = JSON.parse(localStorage.getItem('favorites'))
    setIsFavorite(!isFavorite)
    if (myFavorites) {
      const findArticle = myFavorites.find((elem) => elem.id === article.id)
      if (findArticle) {
        const removeArticle = myFavorites.filter(
          (elem) => elem.id !== article.id,
        )
        localStorage.setItem('favorites', JSON.stringify(removeArticle))
      } else {
        localStorage.setItem(
          'favorites',
          JSON.stringify([...myFavorites, article]),
        )
      }
    } else {
      localStorage.setItem('favorites', JSON.stringify([article]))
    }
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
