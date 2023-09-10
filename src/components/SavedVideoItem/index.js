import {Component} from 'react'

import {Link} from 'react-router-dom'

import ContextForVideo from '../../Context/ContextVideo'

import {Container, Img, Content, Info, Para, Para1} from './styled'

class SavedVideoItem extends Component {
  render() {
    return (
      <ContextForVideo.Consumer>
        {value => {
          const {isDark, disableslider} = value
          const {details} = this.props
          const {id, thumbnailUrl, title, views, name} = details

          const disable = () => {
            disableslider()
          }

          return (
            <Link to={`/videos/${id}`} className="hello">
              <Container onClick={disable}>
                <Img src={thumbnailUrl} alt="video thumbnail" />
                <Content>
                  <Info>
                    <Para isDark={isDark}>{title}</Para>
                    <Para1>
                      {views}.{name}
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

export default SavedVideoItem
