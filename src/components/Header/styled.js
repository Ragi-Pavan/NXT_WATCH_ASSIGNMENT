import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : 'white')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Logo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`

export const IconsContainer = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    width: 20vw;
  }
`

export const Icon = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isDark ? 'white' : '#181818')};
  background-size: 100% 100%;
  width: 30px;
  height: 30px;
`
export const Para = styled.p`
  font-size: 25px;
  margin: 0px;
  padding: 0px;
`

export const HeaderContainer1 = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => (props.isDark ? '#181818' : 'white')};
  }
`

export const ImgProfile = styled.img`
  width: 30px;
`

export const Lougout = styled.button`
  background-color: transparent;
  border-color: ${props => (props.isDark ? 'white' : 'blue')};
  color: ${props => (props.isDark ? 'white' : '#181818')};
  padding-left: 10px;
  padding-right: 10px;
  height: 25px;
  border-radius: 5px;
`

export const PopopMenu = styled.button`
  border: none;
  background-color: transparent;
  font-size: 25px;
`

export const Ulforpopup = styled.ul`
  margin: 0px;
  padding: 0px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PopupCloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  color: ${props => (props.isDark ? 'white' : '#181818')};
  font-weight: 900;
  font-size: 25px;
`

export const ModelContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
`

export const Parar = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  padding: 0px;
  margin: 0px;
  font-size: 12px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const LogOUtPopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ButtonForCancel = styled.button`
  margin: 10px;
  @media screen and (min-width: 768px) {
    margin: 10px;
    height: 4vh;
    width: 6vw;
    font-size: 12px;
    margin-left: 30px;
  }
`

export const ButonForLogOut = styled.button`
  border: none;
  background-color: #3b82f6;
  color: white;
  @media screen and (min-width: 768px) {
    height: 4vh;
    width: 6vw;
    margin-left: 10px;
  }
`
