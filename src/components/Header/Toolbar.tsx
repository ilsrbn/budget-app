import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 0 0;
  background: white;
`

const Nav = styled.nav`
  display: flex;
  margin: 0 36px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--black);
`
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
`
const ListItem = styled.li`
  list-style: none;
  border-left: 1px solid var(--black);
  padding: 8px 24px;
  cursor: pointer;
  transition: all 150ms ease-in;
  &:hover {
    border-left: 15px solid var(--black);
  }
  a {
    text-decoration: none;
  }
`

const Span = styled.span`
  color: var(--black);
  text-transform: uppercase;
  font-weight: 900;
  text-decoration: none;
`
export default function Toolbar() {
  return (
    <Header>
      <Nav>
        <Ul>
          <ListItem>
            <Link to={'/'}><Span>Home</Span></Link>
          </ListItem>
        </Ul>
      </Nav>
    </Header>
  )
}
