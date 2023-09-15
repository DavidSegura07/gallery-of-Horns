/* The code is importing CSS styles from the `App.css` file. It is also importing three components:
`Header`, `Gallery`, and `Footer` from their respective files. */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

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