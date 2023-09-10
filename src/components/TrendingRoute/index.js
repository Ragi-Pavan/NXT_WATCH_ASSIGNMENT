import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Cookies from 'js-cookie'

import ContextForVideo from '../../Context/ContextVideo'

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

import VideoItemforTrending from '../videoItemFortrending'

const apistatuses = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class TrendingRoute extends Component {
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
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        name: each.channel.name,
        profileImg: each.channel.profile_image_url,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        views: each.view_count,
      }))
      this.setState({videosList: UpdatedData, ApiStatus: apistatuses.success})
    } else {
      this.setState({ApiStatus: apistatuses.failure})
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

  clickedonretry = () => {
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
            <BubttonForNov onClick={this.clickedonretry}>Retry</BubttonForNov>
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
          <VideoItemforTrending details={each} key={each.id} />
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
            <Container isDark={isDark} data-testid="trending">
              <Header />
              <Subcontainer>
                <Sidesbar />
                <Treding>
                  <HeadingContainer isDark={isDark}>
                    <Icon isDark={isDark}>
                      <HiFire />
                    </Icon>
                    <Heading isDark={isDark}>Trending</Heading>
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

export default TrendingRoute
