/* The code is importing CSS styles from the `App.css` file. It is also importing three components:
`Header`, `Gallery`, and `Footer` from their respective files. */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import data from "./assets/galleryphotos.json";
import SelectedBeast from './components/SelectedBeast';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      beast: {},
      showModal: false,
    };
  }

  handleOpenModal = () => this.setState({showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });

  setSelectBeast = (beast) => {
    console.log(beast)
    this.setState({beast: beast,showModal:true}, () => console.log(beast))}

  render() {
    console.log(this.state.beast)
    return (
      <>
        <Header />
        <Gallery 
        data={data}
        setSelectBeast={this.setSelectBeast}
        handleOpenModal={this.handleOpenModal}
        />
        <Footer />
        <SelectedBeast 
        showModal ={this.state.showModal} 
        handleCloseModal={this.handleCloseModal} 
        beast={this.state.beast}
        handleOpenModal={this.handleOpenModal}
        />
      </>
    )
  }
}
export default App;