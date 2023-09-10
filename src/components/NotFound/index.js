import {Component} from 'react'

import {Maincontainer, SubContainer} from './styled'

import ContextForVideo from '../../Context/ContextVideo'

import Header from '../Header'

import Sidesbar from '../Sidebar'

import {
  NovideoContainer,
  ImgeForno,
  HeadingFornov,
  ParaforNov,
} from '../Home/styled'

class Notfound extends Component {
  NovideosView = () => (
    <ContextForVideo.Consumer>
      {value => {
        const {isDark} = value
        const imageUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <NovideoContainer isDark={isDark}>
            <ImgeForno src={imageUrl} alt="not found" />
            <HeadingFornov isDark={isDark}>Page Not Found</HeadingFornov>
            <ParaforNov>
              We are sorry, the page you requested could not be found.
            </ParaforNov>
          </NovideoContainer>
        )
      }}
    </ContextForVideo.Consumer>
  )

  render() {
    return (
      <ContextForVideo.Consumer>
        {value => {
          const {isDark} = value

          return (
            <Maincontainer isDark={isDark}>
              <Header />
              <SubContainer>
                <Sidesbar />
                {this.NovideosView()}
              </SubContainer>
            </Maincontainer>
          )
        }}
      </ContextForVideo.Consumer>
    )
  }
}

export default Notfound
