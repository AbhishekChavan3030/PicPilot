import { useState } from "react";
import "./App.css";

function App() {


  const [number, setNumber] = useState(100);

  const HandleNumber = (event) => {
    const value = parseInt(event.target.value);
    setNumber(value);
    setFilter("brightness(" + `${number}` + "%)");
  }
  const [number2, setNumber2] = useState(100);
  const HandleNumber2 = (event) => {
    const value = parseInt(event.target.value);
    setNumber2(value);
    setFilter("contrast(" + `${number2}` + "%)");
  }
  const [number3, setNumber3] = useState(100);
  const HandleNumber3 = (event) => {
    const value = parseInt(event.target.value);
    setNumber3(value);
    setFilter("saturate(" + `${number3}` + "%)");
  }
  const [number4, setNumber4] = useState(100);
  const HandleNumber4 = (event) => {
    const value = parseInt(event.target.value);
    setNumber4(value);
    setFilter("opacity(" + `${number4}` + "%)");

  }





  const [selectedImage, setSelectedImage] = useState(null);
  function handleImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }



  const [rotation, setRotation] = useState("");
  const HandleRotaion = () => {
    setRotation((rotation + 90) % 360);

  };

  const [filter, setFilter] = useState("");
  function handleNone() {
    setFilter("none");
  }
  function handleblur() {
    setFilter("blur(5px)");
  }
  function handleInvert() {
    setFilter("invert(100%)");
  }
  function handleBandW() {
    setFilter("grayscale(100%)");
  }
  function handleContrast() {
    setFilter("contrast(200%)");
  }
  function handleSaturation() {
    setFilter("saturate(200%)");
  }
  function handleBrightness() {
    setFilter("brightness(150%)");
  }
  function handleHue() {
    setFilter("hue-rotate(90deg");
  }
  function handleSepia() {
    setFilter("Sepia(100%)");
  }
  function handleShadow() {
    setFilter("drop-shadow(16px 16px 20px red) invert(75%)");

  }
  return (<>

    <header><h4>PicPilot Photo Editor</h4></header>
    <div className="all">

      <div className="Main">
        <div className="leftside">
          <input type="file" onChange={handleImageChange} accept="image/*" />
          <div className="card">

            {selectedImage && (
              <div className="Image-Container">
                <img
                 
                 value={imageUrl}
                  className="Images"
                  id="Images"
                  src={selectedImage}
                  alt="Selected Image"
                  style={{ filter, number, transform: `rotate(${rotation}deg)` }}
                />
              </div>
            )}

          </div>
        </div>





        <div className="rightside">

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filters
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" onClick={handleNone}>Orignal</a></li>
              <li><a class="dropdown-item" onClick={handleblur}>Blur</a></li>
              <li><a class="dropdown-item" onClick={handleInvert}>Invert</a></li>
              <li><a class="dropdown-item" onClick={handleBandW}>Black & White</a></li>
              <li><a class="dropdown-item" onClick={handleContrast}>Contrast</a></li>
              <li><a class="dropdown-item" onClick={handleSaturation}>Saturation</a></li>
              <li><a class="dropdown-item" onClick={handleBrightness}>Brightness</a></li>
              <li><a class="dropdown-item" onClick={handleHue}>Hue</a></li>
              <li><a class="dropdown-item" onClick={handleSepia}>Sepia</a></li>
              <li><a class="dropdown-item" onClick={handleShadow}>Invet And Glow</a></li>
            </ul>
          </div>



          <button onClick={HandleRotaion}>Rotate</button>



          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Adjust
            </button>
            <ul class="dropdown-menu">


              <label htmlFor="">Brightness  {number + "%"} </label>
              <input type="range" name="brightness" id="brightness" min="0" max="250" value={number} onChange={HandleNumber} on />

              <label htmlFor="">Contrast {number2 + "%"} </label>
              <input type="range" name="contrast" id="contrast" min="0" max="250" value={number2} onChange={HandleNumber2} on />

              <label htmlFor="">Saturation{number3 + "%"}</label>
              <input type="range" name="saturation" id="saturation" min="0" max="250" value={number3} onChange={HandleNumber3} on />

              <label htmlFor="">Fade{number4 + "%"}</label>
              <input type="range" name="opacity" id="opacity" min="0" max="100" value={number4} onChange={HandleNumber4} on />










            </ul>


          </div>        

        </div>
      </div>
    </div>

  </>
  );
}
export default App;
