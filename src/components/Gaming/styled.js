import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
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

export const Subcontainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const Treding = styled.div`
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`

export const HeadingContainer = styled.div`
  padding: 10px;
  min-height: 15vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
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
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
