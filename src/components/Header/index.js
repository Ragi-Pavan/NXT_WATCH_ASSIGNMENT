import {Component} from 'react'

import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import Cookies from 'js-cookie'

import {FiSun, FiLogOut} from 'react-icons/fi'

import {RiMoonFill} from 'react-icons/ri'

import {GiHamburgerMenu} from 'react-icons/gi'

import {AiOutlineClose} from 'react-icons/ai'

import ListForPopup from '../PopupItem'

import ContextForVideo from '../../Context/ContextVideo'

import {
  HeaderContainer,
  Logo,
  IconsContainer,
  Icon,
  Para,
  HeaderContainer1,
  ImgProfile,
  Lougout,
  Ulforpopup,
  PopupCloseButton,
  ModelContainer,
  Parar,
  LogOUtPopup,
  ButtonForCancel,
  ButonForLogOut,
} from './styled'

const PopupItems = [
  {id: 1, name: 'Home', link: '/'},
  {id: 2, name: 'Trending', link: '/trending'},
  {id: 3, name: 'Gaming', link: '/gaming'},
  {id: 4, name: 'Saved Videos', link: '/saved-videos'},
]

class Header extends Component {
  logout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <ContextForVideo.Consumer>
        {value => {
          const {isDark} = value
          const ImgUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const contentStyle = {
            width: '100vw',
            height: '100vh',
            background: isDark ? '#181818' : '#f9f9f9',
          }

          const contentStyle1 = {
            padding: '20px',
            width: '30vw',
            height: '20vh',
            background: isDark ? '#181818' : '#f9f9f9',
            border: 'none',
            'border-radius': '5px',
          }

          const contentStyle2 = {
            padding: '20px',
            width: '50vw',
            height: '20vh',
            background: isDark ? '#181818' : '#f9f9f9',
            border: 'none',
            'border-radius': '5px',
          }

          const {toogleTheme} = value

          const changeTheme = () => {
            toogleTheme()
          }

          const {OptionId} = value

          return (
            <div>
              <HeaderContainer isDark={isDark}>
                <Link to="/">
                  <Logo src={ImgUrl} alt="website logo" />
                </Link>
                <IconsContainer>
                  <Icon
                    isDark={isDark}
                    onClick={changeTheme}
                    data-testid="theme"
                  >
                    <Para>{isDark ? <FiSun /> : <RiMoonFill />}</Para>
                  </Icon>
                  <Icon isDark={isDark}>
                    <Popup
                      modal
                      trigger={
                        <Para type="button" isDark={!isDark}>
                          <GiHamburgerMenu />
                        </Para>
                      }
                      contentStyle={contentStyle}
                      className="popup-content"
                    >
                      {close => (
                        <ModelContainer>
                          <PopupCloseButton
                            type="button"
                            onClick={() => close()}
                            isDark={isDark}
                          >
                            <AiOutlineClose />
                          </PopupCloseButton>
                          <Ulforpopup>
                            {PopupItems.map(each => (
                              <ListForPopup
                                data={each}
                                key={each.id}
                                isDark={isDark}
                                Active={each.id === OptionId}
                              />
                            ))}
                          </Ulforpopup>
                        </ModelContainer>
                      )}
                    </Popup>
                  </Icon>

                  <Icon isDark={isDark}>
                    <Popup
                      modal
                      trigger={
                        <Para>
                          <FiLogOut />
                        </Para>
                      }
                      contentStyle={contentStyle2}
                    >
                      {close => (
                        <LogOUtPopup>
                          <div>
                            <div>
                              <Parar isDark={isDark}>
                                Are you sure, you want to logout
                              </Parar>
                            </div>
                            <div>
                              <ButtonForCancel
                                type="button"
                                className="trigger-button"
                                onClick={() => close()}
                              >
                                Cancel
                              </ButtonForCancel>
                              <ButonForLogOut
                                type="button"
                                onClick={this.logout}
                              >
                                Confirm
                              </ButonForLogOut>
                            </div>
                          </div>
                        </LogOUtPopup>
                      )}
                    </Popup>
                  </Icon>
                </IconsContainer>
              </HeaderContainer>

              <HeaderContainer1 isDark={isDark}>
                <Link to="/">
                  <Logo src={ImgUrl} alt="website logo" />
                </Link>
                <IconsContainer>
                  <Icon
                    isDark={isDark}
                    onClick={changeTheme}
                    data-testid="theme"
                  >
                    <Para>{isDark ? <FiSun /> : <RiMoonFill />}</Para>
                  </Icon>
                  <Icon isDark={isDark}>
                    <Para>
                      <ImgProfile
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </Para>
                  </Icon>

                  <Popup
                    modal
                    trigger={<Lougout isDark={isDark}>Logout</Lougout>}
                    contentStyle={contentStyle1}
                  >
                    {close => (
                      <LogOUtPopup>
                        <div>
                          <div>
                            <Parar isDark={isDark}>
                              Are you sure want to logout?
                            </Parar>
                          </div>
                          <div>
                            <ButtonForCancel
                              type="button"
                              className="trigger-button"
                              onClick={() => close()}
                            >
                              Cancel
                            </ButtonForCancel>
                            <ButonForLogOut type="button" onClick={this.logout}>
                              Confirm
                            </ButonForLogOut>
                          </div>
                        </div>
                      </LogOUtPopup>
                    )}
                  </Popup>
                </IconsContainer>
              </HeaderContainer1>
            </div>
          )
        }}
      </ContextForVideo.Consumer>
    )
  }
}

export default withRouter(Header)
