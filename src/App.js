import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import '../src/app.css'
import { Main } from "./Layout/Main";

function App() {
  return (
    <div className="main" >
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
