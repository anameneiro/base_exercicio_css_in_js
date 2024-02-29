import { ThemeProvider } from 'styled-components' 

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, {Container} from './styles'
import temaMain from './themes/temas'



function App() {
  return (
    <ThemeProvider theme={temaMain}>
    <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
