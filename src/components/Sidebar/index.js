import {Component} from 'react'

import ContextForVideo from '../../Context/ContextVideo'

import {
  SideBar,
  Ulforpopup,
  SideBottom,
  Heading1,
  FblinkedContainer,
  IconFb,
  ParagraphFor,
} from './styled'

import ListForPopup from '../PopupItem'

const PopupItems = [
  {id: 1, name: 'Home', link: '/'},
  {id: 2, name: 'Trending', link: '/trending'},
  {id: 3, name: 'Gaming', link: '/gaming'},
  {id: 4, name: 'Saved Videos', link: '/saved-videos'},
]
class Sidesbar extends Component {
  render() {
    return (
      <ContextForVideo.Consumer>
        {value => {
          const {isDark} = value

          return (
            <SideBar isDark={isDark}>
              <Ulforpopup>
                {PopupItems.map(each => (
                  <ListForPopup
                    data={each}
                    key={each.id}
                    changePopup={this.changePopup}
                    isDark={isDark}
                  />
                ))}
              </Ulforpopup>
              <SideBottom>
                <Heading1 isDark={isDark}>CONTACT US</Heading1>
                <FblinkedContainer>
                  <IconFb
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconFb
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <IconFb
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </FblinkedContainer>
                <ParagraphFor isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </ParagraphFor>
              </SideBottom>
            </SideBar>
          )
        }}
      </ContextForVideo.Consumer>
    )
  }
}

export default Sidesbar
