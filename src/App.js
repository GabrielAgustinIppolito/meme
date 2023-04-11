import html2canvas from 'html2canvas';
import './App.css';
import { useState } from 'react';

function App() {

  const [linea1, setLinea1] = useState('Ingresa el texto de arriba');
  const [linea2, setLinea2] = useState('Ingresa el texto de abajo');
  const [imagen, setImagen] = useState('fire');

  const onChangeLinea1 = function(evento) {
    setLinea1(evento.target.value); /*modifica el valor de linea 1 y renderiza el componente*/
  }
  const onChangeLinea2 = function(evento) {
    setLinea2(evento.target.value); 
  }
  const onChangeImage = function(evento) {
    setImagen(evento.target.value); 
  }

  const onClickExportar = function(evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    })
  }

  return (
    <div className="App">
      <select onChange={onChangeImage}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
        <option value="morpheus">Morpheus</option>
        <option value="insanitywolf">Insanity Wolf</option>
      </select>
      <input onChange={onChangeLinea1} type="text" placeholder='Ingresa el texto de arriba'/>
      <input onChange={onChangeLinea2} type="text" placeholder='Ahora el de abajo'/>
      <div className='meme' id='meme'>
        <span id='linea1'>{linea1}</span>
        <span id='linea2'>{linea2}</span>
        <img src={`/img/imagesMeme/${imagen}.jpg`}/>
      </div>
      <button onClick={onClickExportar}>Exportar</button>
    </div>
  );
}

export default App;
