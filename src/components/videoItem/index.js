import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import ContextForVideo from '../../Context/ContextVideo'

import {Container, Img, Content, Imgage, Info, Para, Para1} from './styled'

class VideoItem extends Component {
  render() {
    return (
      <ContextForVideo.Consumer>
        {value => {
          const {isDark, disableslider} = value
          const {details} = this.props
          const {
            id,
            name,
            profileImg,
            publishedAt,
            thumbnailUrl,
            title,
            views,
          } = details
          const date = formatDistanceToNow(new Date(publishedAt))
          const cangedisable = () => {
            disableslider()
          }
          return (
            <Container>
              <Link to={`/videos/${id}`}>
                <Img
                  src={thumbnailUrl}
                  alt="video thumbnail"
                  onClick={cangedisable}
                />
              </Link>
              <Content>
                <Imgage src={profileImg} alt="channel logo" />
                <Info>
                  <Para isDark={isDark}>{title}</Para>
                  <Para1>
                    {name} . {views} . {date}
                  </Para1>
                </Info>
              </Content>
            </Container>
          )
        }}
      </ContextForVideo.Consumer>
    )
  }
}

export default VideoItem
