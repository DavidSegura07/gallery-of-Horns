import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import data from "./assets/galleryphotos.json";
import SelectedBeast from './components/SelectedBeast';
import React from 'react';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      beast: {},
      showModal: false,
      filteredHornsData: data,
      beastSelection: data
    };
  }

  handleOpenModal = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });

  setSelectBeast = (beast) => {
    console.log(beast)
    this.setState({ beast: beast, showModal: true }, () => console.log(beast))
  }

  updateFilterHornsData = (targetedHorns) => {

    
    if (targetedHorns === "All") {
        this.setState({beastSelection: data});
    } else {
        targetedHorns = Number(targetedHorns);
        let filterBeasts = this.state.filteredHornsData.filter(beast => beast.horns === targetedHorns);
        this.setState({beastSelection: filterBeasts});
        console.log(this.state.beastSelection)
    }

    console.log('++++++++++++++++++++', targetedHorns);
};

filterHornsEvent = (e) => {
  this.updateFilterHornsData(e.target.value)
} 



  render() {
    console.log(this.state.beast)
    return (
      <>
        <Header />

        <Form.Select onChange={this.filterHornsEvent} as="select">
          <option value="All">All Horns</option>
          <option value="1">One Horn</option>
          <option value="2">Two Horns</option>
          <option value="3">Three Horns</option>
          <option value="4">Four Horns</option>
          <option value="5">Five Horns</option>
          <option value="100">More than Five Horns</option>
        </Form.Select>

        <Gallery
          data={this.state.beastSelection}
          setSelectBeast={this.setSelectBeast}
          handleOpenModal={this.handleOpenModal}
        
        />

        <Footer />
        <SelectedBeast
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          beast={this.state.beast}
          handleOpenModal={this.handleOpenModal}
        />
      </>
    )
  }
}
export default App;