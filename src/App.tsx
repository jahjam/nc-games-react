import * as Styled from './styles';

import Header from './feature/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <Styled.App>
      <Header />

      <Home />
    </Styled.App>
  );
}

export default App;
