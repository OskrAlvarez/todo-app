import { MoonIcon, SunIcon } from "./Icons";
import { InputText } from "./InputText";
import { ContainerStyled } from "./styled/ContainerStyled";
import { HeaderStyled } from "./styled/HeaderStyled";
import { useThemeStore } from "../store/ThemeStore";

export function Header() {
  const isDarkMode = useThemeStore(state => state.dark)
  const toggleDarkMode = useThemeStore(state => state.toggleDarkTheme)
  
  const onHandleToggleTheme = () => { 
    toggleDarkMode()
   }

  return (
    <HeaderStyled>
      <ContainerStyled>
        <h1>Todo</h1>
        <button onClick={onHandleToggleTheme}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </ContainerStyled>
      <InputText />
    </HeaderStyled>
  );
}
