import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './component/footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      maxNumber: 1
    };
  }
  componentDidMount() {
    document.querySelector("#lect").addEventListener("change", () => {
      if (document.querySelector("#lect").value === "unit") {
        this.setState({ maxNumber: 33 })
      } else if (document.querySelector("#lect").value === "heat") {
        this.setState({ maxNumber: 83 })
      } else if (document.querySelector("#lect").value === "thermo") {
        this.setState({ maxNumber: 106 })
      } else if (document.querySelector("#lect").value === "fluid") {
        this.setState({ maxNumber: 66 })
      } else if (document.querySelector("#lect").value === "rotational") {
        this.setState({ maxNumber: 110 })
      } else if (document.querySelector("#lect").value === "coulomb") {
        this.setState({ maxNumber: 44 })
      } else if (document.querySelector("#lect").value === "gauss") {
        this.setState({ maxNumber: 71 })
      } else if (document.querySelector("#lect").value === "electric") {
        this.setState({ maxNumber: 71 })
      } else if (document.querySelector("#lect").value === "capacitors") {
        this.setState({ maxNumber: 59 })
      }
    })
    document.querySelector("#search").addEventListener("click", () => {
      if (document.querySelector("#lect").value === "Select Lecture") {
        alert("Please Select a Lecture")
      } else if (document.querySelector("#number").value > this.state.maxNumber || document.querySelector("#number").value < 1) {
        alert(`Please Select a value between 1 and ${this.state.maxNumber}`)
        document.querySelector("#number").value = this.state.maxNumber
      } else {
        this.setState({ img: `./assets/${document.querySelector("#lect").value}/${document.querySelector("#number").value}.png` })
      }
      document.querySelector("#img").addEventListener("load", () => {
        if (document.body.clientHeight > window.innerHeight) {
          document.querySelector("footer").style.position = "relative"
        } else {
          document.querySelector("footer").style.position = "absolute"
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container" id="pApp">
          <div className="pyhsics">
            <select name="lect" id="lect" className="form-select">
              <option defaultValue>Select Lecture</option>
              <option value="unit">Unit & Dimensions</option>
              <option value="heat">Heat & Temperature</option>
              <option value="thermo">Thermodynamics</option>
              <option value="fluid">Fluid</option>
              <option value="rotational">Rotational Motion</option>
              <option value="coulomb">Coulomb's Law & The Electric Field</option>
              <option value="gauss">Conteneous Charge Distribution and Gauss Law</option>
              <option value="electric">Electric Potential</option>
              <option value="capacitors">Capacitors</option>
            </select>
            <input type="number" onKeyDown={(evt) => (evt.key === '.' || evt.key === '-') && evt.preventDefault()} className="form-control" id="number" placeholder="Problem Number" min={1} max={this.state.maxNumber} />
            <button type="button" className="btn btn-outline-primary" id="search">Search</button>
          </div>
          <img src={this.state.img ? this.state.img : "./assets/error.png"} id="img" alt="Pyhsics Problem" className="pImg" />
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;