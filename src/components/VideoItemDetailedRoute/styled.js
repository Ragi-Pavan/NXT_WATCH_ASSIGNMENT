import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 200vh;
  background-size: cover;
  background-color: ${props => (props.isDark ? '#0f0f0f ' : '#f9f9f9')};
`

export const Heading = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin: 10px;
  font-size: 15px;
  font-weight: 200;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    font-weight: 500;
  }
`

export const ViewsAndLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const ViewsContainer = styled.div`
  color: #7e858e;
`

export const LikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const Paragraph = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 20px;
`

export const LikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  color: ${props => (props.likebutton ? '#2563eb' : '#64748b')};
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const Icon = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 20px;
`
export const Para = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 20px;
  margin-left: 10px;
`

export const Dislikebutton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  color: ${props => (props.dislikebutton ? '#2563eb' : '#64748b')};
  margin-left: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  color: ${props => (props.isSave ? '#2563eb' : '#64748b')};
  margin-left: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const VideoANdContent = styled.div`
  padding: 10px;
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Video = styled.div`
  width: 100%;
  height: 40vh;
  @media screen and (min-width: 768px) {
    height: 80vh;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10px;
`

export const Imgage = styled.img`
  width: 50px;
  align-self: flex-start;
`

export const Info = styled.div`
  margin-left: 10px;
`

export const Paraz = styled.p`
  color: white;
  padding: 0px;
  margin: 0px;
  font-size: 16px;
  font-weight: ${props => (props.isDark ? '300' : '500')};
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding-left: 20px;
  }
`

export const Paras = styled.p`
  color: white;
  padding: 0px;
  margin: 10px;
  font-size: 16px;
  font-weight: ${props => (props.isDark ? '300' : '500')};
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding-left: 20px;
  }
`

export const NovideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 10px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.isDark ? 'white' : 'black')};
`
