import {Component} from 'react'

import ReactPlayer from 'react-player'

import Loader from 'react-loader-spinner'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {RiMenuAddLine} from 'react-icons/ri'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import {
  MainContainer,
  Heading,
  ViewsAndLikeContainer,
  ViewsContainer,
  LikesContainer,
  Paragraph,
  LikeButton,
  Icon,
  Para,
  Dislikebutton,
  SaveButton,
  VideoANdContent,
  SubContainer,
  Video,
  Content,
  Imgage,
  Info,
  Paraz,
  Paras,
  NovideoContainer,
} from './styled'

import {
  ImgeForno,
  ParaforNov,
  HeadingFornov,
  BubttonForNov,
} from '../Home/styled'

import ContextForVideo from '../../Context/ContextVideo'

import Header from '../Header'

import Sidesbar from '../Sidebar'

const apistatuses = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class VideoItemDetailedRoute extends Component {
  state = {
    data: {},
    ApiStatus: apistatuses.initial,
    likebutton: false,
    dislikebutton: false,
  }

  componentDidMount() {
    this.getProductsfromUrl()
  }

  getProductsfromUrl = async () => {
    this.setState({ApiStatus: apistatuses.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const videos = data.video_details
    if (response.ok === true) {
      const updatedData = {
        name: videos.channel.name,
        profileImg: videos.channel.profile_image_url,
        SubscriberCount: videos.channel.subscriber_count,
        description: videos.description,
        id: videos.id,
        publishedAt: formatDistanceToNow(new Date(videos.published_at)),
        thumbnailUrl: videos.thumbnail_url,
        title: videos.title,
        VideoUrl: videos.video_url,
        views: videos.view_count,
        origin: videos.video_url,
      }
      this.setState({data: updatedData, ApiStatus: apistatuses.success})
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
    this.getProductsfromUrl()
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

  renderVideosView = () => (
    <ContextForVideo.Consumer>
      {value => {
        const {isDark, clickonSave, SavedVideosList} = value
        const {data, likebutton, dislikebutton} = this.state

        const clicktosave = () => {
          clickonSave(data)
        }

        const isSave = SavedVideosList.find(each => each.id === data.id)
        const text = isSave ? 'Saved' : 'Save'

        return (
          <VideoANdContent>
            <Video>
              <ReactPlayer
                url={data.VideoUrl}
                controls
                width="100%"
                height="100%"
              />
            </Video>
            <Heading isDark={isDark}>{data.title}</Heading>
            <ViewsAndLikeContainer>
              <ViewsContainer>
                <Paragraph>
                  {data.views} . {data.publishedAt}
                </Paragraph>
              </ViewsContainer>
              <LikesContainer>
                <LikeButton
                  likebutton={likebutton}
                  onClick={this.clickedonlike}
                >
                  <Icon>
                    <AiOutlineLike />
                  </Icon>
                  <Para>Like</Para>
                </LikeButton>
                <Dislikebutton
                  dislikebutton={dislikebutton}
                  onClick={this.clickedondislike}
                >
                  <Icon>
                    <AiOutlineDislike />
                  </Icon>
                  <Para>Dislike</Para>
                </Dislikebutton>

                <SaveButton onClick={clicktosave} isSave={isSave}>
                  <Icon>
                    <RiMenuAddLine />
                  </Icon>
                  <Para>{text}</Para>
                </SaveButton>
              </LikesContainer>
            </ViewsAndLikeContainer>
            <hr />
            <Content>
              <Imgage src={data.profileImg} alt="channel logo" />
              <Info>
                <Paraz isDark={isDark}>
                  {data.name}
                  <br />
                  {`${data.SubscriberCount}  Subscribers`}
                </Paraz>
              </Info>
            </Content>
            <Paras isDark={isDark}>{data.description}</Paras>
          </VideoANdContent>
        )
      }}
    </ContextForVideo.Consumer>
  )

  clickedonlike = () => {
    this.setState(prev => ({
      likebutton: !prev.likebutton,
      dislikebutton: false,
    }))
  }

  clickedondislike = () => {
    this.setState(prev => ({
      likebutton: false,
      dislikebutton: !prev.dislikebutton,
    }))
  }

  render() {
    return (
      <ContextForVideo.Consumer>
        {value => {
          const {isDark} = value
          return (
            <MainContainer isDark={isDark} data-testid="videoItemDetails">
              <Header />
              <SubContainer>
                <Sidesbar />
                {this.renderViewsforApi()}
              </SubContainer>
            </MainContainer>
          )
        }}
      </ContextForVideo.Consumer>
    )
  }
}

export default VideoItemDetailedRoute
