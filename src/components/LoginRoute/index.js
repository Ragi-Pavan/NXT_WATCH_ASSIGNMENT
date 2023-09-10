import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ContextForVideo from '../../Context/ContextVideo'

import {
  FormContainer,
  Container,
  Logorl,
  Form,
  Label,
  Input,
  InputContainer,
  InputContainerone,
  Labelone,
  Inputone,
  LoginButton,
  Paragraph,
} from './styled'

class LoginRoute extends Component {
  state = {
    checkboxChecked: false,
    username: '',
    password: '',
    ShowError: false,
    errorMsg: '',
  }

  checkboxChecked = event => {
    this.setState({checkboxChecked: event.target.checked})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changepassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitform = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({ShowError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    return (
      <ContextForVideo.Consumer>
        {value => {
          const {isDark} = value
          const {checkboxChecked, errorMsg, ShowError} = this.state
          const logoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const passwordInputType = checkboxChecked ? 'text' : 'password'
          const JwtToken = Cookies.get('jwt_token')

          if (JwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <Container isDark={isDark}>
              <FormContainer isDark={isDark}>
                <Logorl src={logoUrl} alt="logo" />
                <Form onSubmit={this.submitform}>
                  <InputContainer>
                    <Label htmlFor="username" isDark={isDark}>
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="rahul"
                      isDark={isDark}
                      onChange={this.changeUsername}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="password" isDark={isDark}>
                      PASSWORD
                    </Label>
                    <Input
                      isDark={isDark}
                      type={passwordInputType}
                      id="password"
                      placeholder="rahul@2021"
                      onChange={this.changepassword}
                    />
                  </InputContainer>

                  <InputContainerone>
                    <Inputone
                      type="checkbox"
                      id="showpasword"
                      onClick={this.checkboxChecked}
                      value={checkboxChecked}
                    />
                    <Labelone htmlFor="showpasword" isDark={isDark}>
                      Show Password
                    </Labelone>
                  </InputContainerone>

                  <LoginButton type="submit">Login</LoginButton>
                  {ShowError && <Paragraph>* {errorMsg}</Paragraph>}
                </Form>
              </FormContainer>
            </Container>
          )
        }}
      </ContextForVideo.Consumer>
    )
  }
}

export default LoginRoute
