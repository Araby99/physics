import React from 'react'
import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer/Footer';

const Test = () => {
  const [maxNum, setMaxNum] = useState(1);
  const [img, setImg] = useState(null);
  const [problemNum, setProblemNum] = useState(1);
  const change = () => {
    switch (document.querySelector("#lect").value) {
      case "unit":
        setMaxNum(33)
        break;
      case "heat":
        setMaxNum(83)
        break;
      case "thermo":
        setMaxNum(106)
        break;
      case "fluid":
        setMaxNum(66)
        break;
      case "rotational":
        setMaxNum(110)
        break;
      case "coulomb":
        setMaxNum(44)
        break;
      case "gauss":
        setMaxNum(71)
        break;
      case "electric":
        setMaxNum(71)
        break;
      case "capacitors":
        setMaxNum(59)
        break;
      default:
        break;
    }
  }
  const search = () => {
    if (document.querySelector("#lect").value === "Select Lecture") {
      alert("Please Select a Lecture")
    } else if (Number(problemNum) > maxNum || Number(problemNum) < 1) {
      alert(`Please Select a value between 1 and ${maxNum}`)
      setProblemNum(maxNum)
    } else {
      setImg(`./assets/${document.querySelector("#lect").value}/${Number(problemNum)}.png`)
    }
    document.querySelector("#img").addEventListener("load", () => {
      if (document.body.clientHeight > window.innerHeight) {
        document.querySelector("footer").style.position = "relative"
      } else {
        document.querySelector("footer").style.position = "absolute"
      }
    })
  }
  const submit = e => {
    e.preventDefault();
    search();
  }
  const next = () => {
    setProblemNum(Number(problemNum) + 1)
    search();
  }
  const prev = () => {
    setProblemNum(Number(problemNum) - 1)
    search();
  }
  return (
    <div className="App">
      <div className="container">
        <form className="pyhsics" onSubmit={submit}>
          <select name="lect" id="lect" className="form-select" onChange={change}>
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
          <input type="number" onKeyDown={(evt) => (evt.key === '.' || evt.key === '-') && evt.preventDefault()} className="form-control" id="number" placeholder="Problem Number" min={1} max={maxNum} value={problemNum} onChange={e => setProblemNum(e.target.value)} />
          <input type="submit" className="btn btn-outline-primary" onClick={search} value="Search" />
        </form>
        <div className="pb-5 d-flex justify-content-center align-items-center gap-5">
          <button className="btn btn-primary" onClick={next}>Next</button>
          <button className="btn btn-primary" onClick={prev}>Previous</button>
        </div>
        <img src={img ? img : "./assets/error.png"} id="img" alt="Pyhsics Problem" className="pImg" />
      </div>
      <Footer />
    </div>
  )
}

export default Test