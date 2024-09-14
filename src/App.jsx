import { ThemeProvider } from 'styled-components'
import { theme } from './Theme'

import { Header, TodoContainer } from './components'
import GlobalStyles from './components/styled/Global'
import { ContainerStyled } from './components/styled/ContainerStyled'
import { useThemeStore } from './store/ThemeStore'
import { useEffect } from 'react'



export default function App() {
  const isDarkMode = useThemeStore(state => state.dark)

  const toggleDarkmodeClass = (element, classname) => {
    isDarkMode 
      ? document.querySelector(element).classList.add(classname)
      : document.querySelector(element).classList.remove(classname) 
  }

  useEffect(() => {
    toggleDarkmodeClass('html', 'dark')
  },[isDarkMode])
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
          <Header />
        <ContainerStyled>
          <TodoContainer />
        </ContainerStyled>
      </>
    </ThemeProvider>
  )
}
