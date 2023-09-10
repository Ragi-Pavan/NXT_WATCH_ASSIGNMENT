import styled from 'styled-components'

export const Maincontainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  background-size: cover;
  min-height: 100vh;
`

export const Heading = styled.h1`
  padding: 0px;
  margin: 0px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin-left: 20px;
  font-weight: 400;
  font-family: 'bree serif';
  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-left: 30px;
  }
`

export const SubContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const VideosView = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const HeadingContainer = styled.div`
  padding: 10px;
  min-height: 15vh;
  background-color: ${props => (props.isDark ? '#313131' : '#ebebeb')};
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 35px;
  background-color: ${props => (props.isDark ? 'black' : '#d7dfe9')};
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 40px;
    border-radius: 50px;
  }
`

export const UlforItemm = styled.ul`
  margin: 0px;
  padding: 0px;
`
