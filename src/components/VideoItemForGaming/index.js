import {Component} from 'react'

import {Link} from 'react-router-dom'

import ContextForVideo from '../../Context/ContextVideo'

import {Container, Img, Content, Info, Para, Para1} from './styled'

class VideoItemforGaming extends Component {
  render() {
    return (
      <ContextForVideo.Consumer>
        {value => {
          const {isDark, disableslider} = value
          const {details} = this.props
          const {id, thumbnailUrl, title, views} = details

          const disable = () => {
            disableslider()
          }

          return (
            <Container>
              <Link to={`/videos/${id}`}>
                <Img
                  src={thumbnailUrl}
                  alt="video thumbnail"
                  onClick={disable}
                />
              </Link>

              <Content>
                <Info>
                  <Para isDark={isDark}>{title}</Para>
                  <Para1>{views} Watching Worldwide</Para1>
                </Info>
              </Content>
            </Container>
          )
        }}
      </ContextForVideo.Consumer>
    )
  }
}

export default VideoItemforGaming
