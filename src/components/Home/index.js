import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import ContextForVideo from '../../Context/ContextVideo'

import {
  HomeMainContainer,
  BubttonForNov,
  OpenPopup,
  Logo,
  ParaforOp,
  ButtonOp,
  Icon,
  Subcontainer,
  SearchContainer,
  InputSearch,
  Homes,
  SearchButton,
  VideosContainer,
  NovideoContainer,
  ImgeForno,
  HeadingFornov,
  ParaforNov,
} from './styled'

import Header from '../Header'

import VideoItem from '../videoItem'

import Sidesbar from '../Sidebar'

const apistatuses = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    isDispayOpoen: true,
    VideosList: [],
    SearchInput: '',
    ApiStatus: apistatuses.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  closePopup = () => {
    this.setState({isDispayOpoen: false})
  }

  getVideosList = async () => {
    this.setState({ApiStatus: apistatuses.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {SearchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${SearchInput}`
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
      this.setState({VideosList: UpdatedData, ApiStatus: apistatuses.success})
    } else {
      this.setState({ApiStatus: apistatuses.failure})
    }
  }

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

  changeSearchInput = event => {
    this.setState({SearchInput: event.target.value})
  }

  search = () => {
    this.getVideosList()
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

  NovideosView = () => (
    <ContextForVideo.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NovideoContainer isDark={isDark}>
            <ImgeForno
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HeadingFornov isDark={isDark}>
              No Search results found
            </HeadingFornov>
            <ParaforNov>
              Try different key words or remove search filter
            </ParaforNov>
            <BubttonForNov onClick={this.clickedonretry}>Retry</BubttonForNov>
          </NovideoContainer>
        )
      }}
    </ContextForVideo.Consumer>
  )

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
            <BubttonForNov>Retry</BubttonForNov>
          </NovideoContainer>
        )
      }}
    </ContextForVideo.Consumer>
  )

  renderVideosView = () => {
    const {VideosList} = this.state
    const Length = VideosList.length
    if (Length !== 0) {
      return (
        <VideosContainer>
          {VideosList.map(each => (
            <VideoItem key={each.id} details={each} />
          ))}
        </VideosContainer>
      )
    }
    return this.NovideosView()
  }

  renderView = () => (
    <ContextForVideo.Consumer>
      {value => {
        const {isDark} = value
        const {isDispayOpoen} = this.state
        return (
          <HomeMainContainer isDark={isDark} data-testid="home">
            <Header />
            <Subcontainer>
              <Sidesbar />
              <Homes isDark={isDark}>
                {isDispayOpoen && (
                  <OpenPopup>
                    <Icon onClick={this.closePopup} data-testid="close">
                      <AiOutlineClose />
                    </Icon>
                    <Logo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <ParaforOp>
                      Buy Nxt Watch Premium prepaid plans With UPI
                    </ParaforOp>
                    <ButtonOp>GET IT NOW</ButtonOp>
                  </OpenPopup>
                )}
                <SearchContainer isDark={isDark}>
                  <InputSearch
                    type="search"
                    placeholder="Search"
                    onChange={this.changeSearchInput}
                    isDark={isDark}
                  />
                  <SearchButton
                    onClick={this.search}
                    isDark={isDark}
                    data-testid="searchButton"
                  >
                    <AiOutlineSearch />
                  </SearchButton>
                </SearchContainer>
                {this.renderViewsforApi()}
              </Homes>
            </Subcontainer>
          </HomeMainContainer>
        )
      }}
    </ContextForVideo.Consumer>
  )

  render() {
    return this.renderView()
  }
}

export default Home
