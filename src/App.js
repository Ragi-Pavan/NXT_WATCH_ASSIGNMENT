import './App.css'

import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ContextForVideo from './Context/ContextVideo'

import LoginRoute from './components/LoginRoute'

import Home from './components/Home'

import TrendingRoute from './components/TrendingRoute'

import GamingRoute from './components/Gaming'

import VideoItemDetailedRoute from './components/VideoItemDetailedRoute'

import SavedVideos from './components/SavedVideos'

import ProtectedRoute from './components/ProtectedRoute'

import Notfound from './components/NotFound'

class App extends Component {
  state = {
    isDark: false,
    OptionId: 1,
    savedVideos: [],
  }

  changeTheme = () => {
    const {isDark} = this.state
    this.setState({
      isDark: !isDark,
    })
  }

  changepage = id => {
    this.setState({
      OptionId: id,
    })
  }

  disable = () => {
    this.setState({OptionId: 0})
  }

  saveisClicked = data => {
    const {savedVideos} = this.state
    const value = savedVideos.find(each => each.id === data.id)
    if (value) {
      const list = savedVideos.filter(each => each.id !== data.id)
      this.setState({savedVideos: list})
    } else {
      this.setState(prev => ({
        savedVideos: [...prev.savedVideos, data],
      }))
    }
  }

  render() {
    const {isDark, OptionId, savedVideos} = this.state

    return (
      <ContextForVideo.Provider
        value={{
          isDark,
          OptionId,
          SavedVideosList: savedVideos,
          toogleTheme: this.changeTheme,
          changeRoute: this.changepage,
          disableslider: this.disable,
          clickonSave: this.saveisClicked,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailedRoute}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={Notfound} />
          <Redirect to="/not-found" />
        </Switch>
      </ContextForVideo.Provider>
    )
  }
}

export default App
