import styled from 'styled-components'

export const FblinkedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:flex-start
  align-items: center;
`
export const Heading1 = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin: 0px;
  padding: 0px;
  font-size: 20px;
`

export const IconFb = styled.img`
  width: 35px;
  margin-right: 10px;
  margin-top: 30px;
`

export const SideBar = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 18.5vw;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  }
`

export const SideBottom = styled.div`
  padding: 20px;
`

export const Ulforpopup = styled.ul`
  margin: 0px;
  padding: 0px;
`

export const ParagraphFor = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-size: 18px;
  font-weight: 500;
`
