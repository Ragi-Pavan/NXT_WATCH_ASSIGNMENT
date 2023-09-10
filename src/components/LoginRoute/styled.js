import styled from 'styled-components'

export const Container = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : 'white')};
`

export const FormContainer = styled.div`
  width: 90vw;
  border-radius: 8px;
  box-shadow: 0px 0px 16px 0px #d7dfe9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  background-color: ${props => (props.isDark ? ' #0f0f0f' : 'white')};
  @media screen and (min-width: 768px) {
    width: 35vw;
    padding: 45px;
  }
`

export const Logorl = styled.img`
  width: 150px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const Form = styled.form`
  border: none;
  padding: 10px;
`

export const Label = styled.label`
  color: #475569;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${props => (props.isDark ? 'White' : 'Black')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const Input = styled.input`
  border: 1px solid #475569;
  height: 5vh;
  border-radius: 3px;
  padding: 10px;
  background-color: ${props => (props.isDark ? ' #0f0f0f' : 'white')};
  color: ${props => (props.isDark ? ' white' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    height: 7vh;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`
export const InputContainerone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`

export const Labelone = styled.label`
  margin-left: 10px;
  color: black;
  font-weight: 500;
  cursor: pointer;
  color: ${props => (props.isDark ? 'White' : 'Black')};
`

export const Inputone = styled.input`
  height: 20px;
  width: 20px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  width: 100%;
  height: 5vh;
  border: none;
  margin-top: 20px;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`

export const Paragraph = styled.p`
  color: #ff0b37;
`
