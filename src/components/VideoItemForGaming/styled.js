import styled from 'styled-components'

export const Container = styled.li`
  padding: 10px;
  width: 50%;
  margin-top: 10px;
  list-style-type: none;

  @media screen and (min-width: 576px) {
    width: 33%;
  }
`

export const Head = styled.h1`
  color: black;
`
export const Img = styled.img`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
`

export const Info = styled.div`
  margin-left: 10px;
`

export const Para = styled.p`
  color: white;
  padding: 0px;
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (min-width: 567px) {
    font-size: 20px;
  }
`

export const Para1 = styled.p`
  color: gray;
  padding: 0px;
  margin: 0px;
  margin-top: 10px;
  font-size: 18px;
  @media screen and (min-width: 567px) {
    font-size: 20px;
  }
`
