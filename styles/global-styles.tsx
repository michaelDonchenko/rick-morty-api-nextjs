import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Courier New', Courier, monospace;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: white
  }
`

export default GlobalStyle
