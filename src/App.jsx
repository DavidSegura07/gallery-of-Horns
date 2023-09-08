/* The code is importing CSS styles from the `App.css` file. It is also importing three components:
`Header`, `Gallery`, and `Footer` from their respective files. */
import './App.css'
import Header from './components/header.jsx';
import Gallery from './components/gallery'
import Footer from './components/footer.jsx';

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