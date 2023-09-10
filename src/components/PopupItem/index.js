import {AiFillHome, AiFillFire} from 'react-icons/ai'

import './index.css'

import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'

import {RiMenuAddLine} from 'react-icons/ri'

import ContextForVideo from '../../Context/ContextVideo'

import {List, Button, Para, Para1} from './styled'

const ListForPopup = props => (
  <ContextForVideo.Consumer>
    {value => {
      const {data} = props
      const {id, name, link} = data
      const getvalue = () => {
        switch (name) {
          case 'Home':
            return <AiFillHome />
          case 'Trending':
            return <AiFillFire />
          case 'Gaming':
            return <SiYoutubegaming />
          case 'Saved Videos':
            return <RiMenuAddLine />

          default:
            return null
        }
      }

      const icon = getvalue()

      const {changeRoute, OptionId} = value

      const changeId = () => {
        changeRoute(id)
      }
      const {isDark} = value

      const Active = OptionId === id

      return (
        <Link to={link} className="hello">
          <List>
            <Button onClick={changeId} Active={Active}>
              <Para1 Active={Active}>{icon}</Para1>
              <Para Active={Active} isDark={isDark}>
                {name}
              </Para>
            </Button>
          </List>
        </Link>
      )
    }}
  </ContextForVideo.Consumer>
)

export default ListForPopup
