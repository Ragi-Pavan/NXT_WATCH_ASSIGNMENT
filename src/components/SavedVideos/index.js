import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import {
  Maincontainer,
  Heading,
  SubContainer,
  VideosView,
  HeadingContainer,
  Icon,
  UlforItemm,
} from './styled'

import ContextForVideo from '../../Context/ContextVideo'

import Header from '../Header'

import Sidesbar from '../Sidebar'

import SavedVideoItem from '../SavedVideoItem'

import {
  NovideoContainer,
  ImgeForno,
  HeadingFornov,
  ParaforNov,
} from '../Home/styled'

class SavedVideos extends Component {
  renderview = () => (
    <ContextForVideo.Consumer>
      {value => {
        const {isDark, SavedVideosList} = value
        console.log(SavedVideosList)
        return (
          <VideosView>
            <HeadingContainer isDark={isDark}>
              <Icon isDark={isDark}>
                <HiFire />
              </Icon>
              <Heading isDark={isDark}>Saved Videos</Heading>
            </HeadingContainer>
            <UlforItemm>
              {SavedVideosList.map(each => (
                <SavedVideoItem details={each} key={each.id} />
              ))}
            </UlforItemm>
          </VideosView>
        )
      }}
    </ContextForVideo.Consumer>
  )

  NovideosView = () => (
    <ContextForVideo.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NovideoContainer isDark={isDark}>
            <ImgeForno
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <HeadingFornov isDark={isDark}>No saved videos found</HeadingFornov>
            <ParaforNov>
              You can save your videos while watching them
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
          const {isDark, SavedVideosList} = value
          const leng = SavedVideosList.length

          return (
            <Maincontainer isDark={isDark} data-testid="savedVideos">
              <Header />
              <SubContainer>
                <Sidesbar />
                {leng === 0 ? this.NovideosView() : this.renderview()}
              </SubContainer>
            </Maincontainer>
          )
        }}
      </ContextForVideo.Consumer>
    )
  }
}

export default SavedVideos
