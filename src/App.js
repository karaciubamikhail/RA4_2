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
  );
}

export default App;
