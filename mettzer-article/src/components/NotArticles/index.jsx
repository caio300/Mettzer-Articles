import { NotArticlesContainer } from './styles'
import { ClipboardText } from 'phosphor-react'

export function NotArticles() {
  return (
    <NotArticlesContainer>
      <div>
        <ClipboardText size={150} />
      </div>
      <h4>Não foi encontrado artigos</h4>
      <p>Pesquise um artigo acima</p>
    </NotArticlesContainer>
  )
}
