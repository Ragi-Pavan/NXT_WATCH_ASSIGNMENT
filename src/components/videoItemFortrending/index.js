import {Component} from 'react'

import './index.css'

import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ContextForVideo from '../../Context/ContextVideo'

import {Container, Img, Content, Imgage, Info, Para, Para1} from './styled'

class VideoItemforTrending extends Component {
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

          const disable = () => {
            disableslider()
          }

          return (
            <Link to={`/videos/${id}`} className="hello">
              <Container onClick={disable}>
                <Img src={thumbnailUrl} alt="video thumbnail" />
                <Content>
                  <Imgage src={profileImg} alt={id} />
                  <Info>
                    <Para isDark={isDark}>{title}</Para>
                    <Para1>
                      {name} . {views} . {date}
                    </Para1>
                  </Info>
                </Content>
              </Container>
            </Link>
          )
        }}
      </ContextForVideo.Consumer>
    )
  }
}

export default VideoItemforTrending
