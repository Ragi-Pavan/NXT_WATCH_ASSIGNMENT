import React from 'react'

const ContextForVideo = React.createContext({
  isDark: true,
  OptionId: 1,
  SavedVideosList: [1, 2],
  toogleTheme: () => {},
  changeRoute: () => {},
  disableslider: () => {},
  clickonSave: () => {},
})

export default ContextForVideo
