import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Button = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100vw;
  background-color: ${props => (props.Active ? '#909090' : 'transparent')};
  padding-top: 10px;
  align-items: center;
`

export const Para = styled.p`
  padding-left: 10px;
  margin: 0px;
  font-size: 15px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-family: ${props => (props.Active ? 'bree serif' : 'roboto')};
`
export const Para1 = styled.p`
  font-weight: 500;
  padding: 0px;
  margin: 0px;
  font-size: 25px;
  color: ${props => (props.Active ? 'red' : '#64748b')};
  margin-left: 30px;
`
