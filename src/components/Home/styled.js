import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  background-color: 'white';
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const OpenPopup = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px;
  max-height: 30vh;
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`
export const Logo = styled.img`
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const ParaforOp = styled.p`
  font-size: 20px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const ButtonOp = styled.button`
  background-color: transparent;
  padding: 5px;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    height: 5vh;
    width: 15vw;
    margin-top: 10px;
  }
`

export const Icon = styled.button`
  align-self: flex-end;
  padding: 0px;
  margin: 0px;
  background-color: transparent;
  border: none;
`

export const Subcontainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const Homes = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`

export const SearchContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 40vw;
  }
`

export const InputSearch = styled.input`
  border: 2px solid gray;
  width: 80vw;
  height: 4vh;
  padding: 10px;
  background-color: transparent;
  outline: none;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (min-width: 768px) {
    height: 6vh;
  }
`
export const SearchButton = styled.button`
  height: 4vh;
  width: 8vw;
  background-color: transparent;
  color: ${props => (props.isDark ? 'white' : 'black')};
  border: 2px solid gray;
  border-left: none;
  @media screen and (min-width: 768px) {
    height: 6vh;
  }
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`

export const NovideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 10px;
  background-color: ${props => (props.isDark ? 'black' : '#f9f9f9')};
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const ImgeForno = styled.img`
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const HeadingFornov = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-size: 20px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const ParaforNov = styled.p`
  color: #7e858e;
  font-size: 20px;
  padding: 0px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const BubttonForNov = styled.button`
  background-color: #4f46e5;
  border: none;
  width: 20vw;
  height: 5vh;
  border-radius: 5px;
  color: white;
  @media screen and (min-width: 768px) {
    width: 10vw;
    height: 5vh;
  }
`
