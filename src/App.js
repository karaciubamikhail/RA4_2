<<<<<<< HEAD
import './App.css';
import { SportInputs } from './SportInputs';
import { Sport } from './Sport';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  function submit (e){
    e.preventDefault();
    const {target} = e;
    const formData= new FormData(target)
    const datas = Object.fromEntries(formData);
    setData([...data,datas])
  }
  function del (e){
    e.preventDefault();
    const {target} = e;
    target.parentElement.remove();
  }
  return (
    <div>
      <SportInputs submit={submit}/>
      <Sport data={data} del={del} />
    </div>
=======

import './App.css';
import { Color } from './Color';
import { useState } from 'react';

function App() {
  let rgb = '';
  function hex2rgb(c) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
  const [color,setColor]=useState('')
  function colorChange (e) {
    const {name,value} = e.target;
    setTimeout(()=>{
      setColor((form)=>(hex2rgb(value)));
    },2000)
  }
  return (
    <Color color={color} funk={colorChange}/>
>>>>>>> cab899dd5966dfb4e84903a1074154cc7a801f0c
  );
}

export default App;
