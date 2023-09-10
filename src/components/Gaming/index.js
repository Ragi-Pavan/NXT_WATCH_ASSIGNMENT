import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'

import ContextForVideo from '../../Context/ContextVideo'

import VideoItemforGaming from '../VideoItemForGaming'

import {
  Subcontainer,
  Container,
  Heading,
  Treding,
  HeadingContainer,
  Icon,
  UlforItemm,
  NovideoContainer,
  ImgeForno,
  HeadingFornov,
  ParaforNov,
  BubttonForNov,
} from './styled'

import Header from '../Header'

import Sidesbar from '../Sidebar'

const apistatuses = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class GamingRoute extends Component {
  state = {
    videosList: [],
    ApiStatus: apistatuses.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({ApiStatus: apistatuses.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const {videos} = data

    if (response.ok === true) {
      const UpdatedData = videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        views: each.view_count,
        name: each.title,
      }))
      this.setState({videosList: UpdatedData, ApiStatus: apistatuses.success})
    } else {
      this.setState({
        ApiStatus: apistatuses.failure,
      })
    }
  }

  renderLoadingView = () => (
    <ContextForVideo.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NovideoContainer isDark={isDark} data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark ? 'white' : 'black'}
              height="50"
              width="50"
            />
          </NovideoContainer>
        )
      }}
    </ContextForVideo.Consumer>
  )

  clikedonRetry = () => {
    this.getVideosList()
  }

  renderFailureView = () => (
    <ContextForVideo.Consumer>
      {value => {
        const {isDark} = value
        const UrlForImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <NovideoContainer isDark={isDark}>
            <ImgeForno src={UrlForImg} alt="failure view" />
            <HeadingFornov isDark={isDark}>
              Oops! Something Went Wrong
            </HeadingFornov>
            <ParaforNov>
              We are having some trouble to complete your request. Please try
              again.
            </ParaforNov>
            <BubttonForNov onClick={this.clikedonRetry}>Retry</BubttonForNov>
          </NovideoContainer>
        )
      }}
    </ContextForVideo.Consumer>
  )

  renderViewsforApi = () => {
    const {ApiStatus} = this.state
    switch (ApiStatus) {
      case 'SUCCESS':
        return this.renderVideosView()
      case 'FAILURE':
        return this.renderFailureView()
      case 'LOADING':
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderVideosView = () => {
    const {videosList} = this.state
    return (
      <UlforItemm>
        {videosList.map(each => (
          <VideoItemforGaming key={each.id} details={each} />
        ))}
      </UlforItemm>
    )
  }

  render() {
    return (
      <ContextForVideo.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Container isDark={isDark} data-testid="gaming">
              <Header />
              <Subcontainer>
                <Sidesbar />
                <Treding>
                  <HeadingContainer isDark={isDark}>
                    <Icon isDark={isDark}>
                      <SiYoutubegaming />
                    </Icon>
                    <Heading isDark={isDark}>Gaming</Heading>
                  </HeadingContainer>
                  {this.renderViewsforApi()}
                </Treding>
              </Subcontainer>
            </Container>
          )
        }}
      </ContextForVideo.Consumer>
    )
  }
}

export default GamingRoute
