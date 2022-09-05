import { HeaderContainer, LinksHeader } from './styles'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo-mettzer.png'
import { Article, Star } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <LinksHeader>
        <nav>
          <NavLink to="/" title="Artigos">
            Artigos
            <Article size={24} />
          </NavLink>
        </nav>
        <nav>
          <NavLink to="/favorite" title="Favoritos">
            Favoritos
            <Star />
          </NavLink>
        </nav>
      </LinksHeader>
    </HeaderContainer>
  )
}
