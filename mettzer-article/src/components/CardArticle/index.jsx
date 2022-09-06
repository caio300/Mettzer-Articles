import { CaretDown, CaretUp, FileArrowDown, Star } from 'phosphor-react'
import { useState } from 'react'
import {
  ArticleContainer,
  CardContainer,
  DescriptionContainer,
  UsefulContainer,
} from './styles'

export function CardArticle() {
  const [isDescription, setIsDescription] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <CardContainer>
      <ArticleContainer>
        <p>
          Tipo: <span>article</span>
        </p>
        <p>
          Autor(es): <span>Artificial Intelligence</span>
        </p>
        <p>
          Title: <span>Oxford Foundation for Theoretical</span>
        </p>
        <div onClick={() => setIsDescription(!isDescription)}>
          Descrição{' '}
          {isDescription ? <CaretDown size={18} /> : <CaretUp size={18} />}
        </div>
      </ArticleContainer>
      <UsefulContainer>
        <a
          href="http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.352.1504"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileArrowDown size={30} />
          Download
        </a>
        <div onClick={() => setIsFavorite(!isFavorite)}>
          <Star size={30} weight={isFavorite ? 'fill' : 'light'} />
        </div>
      </UsefulContainer>
      {isDescription ? (
        <DescriptionContainer>
          Discovering how the brain works is perhaps the most extraordinary
          scientific challenge of our time. Advances in understanding the brain
          will inform medical research into new treatments for neurological
          disorders, as well as lead to powerful new techniques in artificial
          intelligence and robot control. To meet this challenge, our foundation
          is raising funds to support a new Centre for Theoretical Neuroscience
          at Oxford, which will be dedicated to teaching and research in
          computer modelling of the brain. The Centre is currently based within
          the Oxford University Department of Experimental Psychology. Over the
          last year, we have made important contributions to understanding
          various areas of brain function, including for example: How do our
          visual systems learn to make sens
        </DescriptionContainer>
      ) : (
        false
      )}
    </CardContainer>
  )
}
