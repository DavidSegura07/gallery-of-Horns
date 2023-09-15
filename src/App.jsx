/* The code is importing CSS styles from the `App.css` file. It is also importing three components:
`Header`, `Gallery`, and `Footer` from their respective files. */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Gallery from './components/gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
      <Header />
      <Gallery />
      <Footer />
      </div>
    </>
  )
}

export default App;