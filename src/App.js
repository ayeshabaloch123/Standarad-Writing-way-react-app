import logo from './logo.svg';
import './App.css';

import HeaderTemplate from './header/header';
import { useState } from 'react';
 function App(){


  
  const [action,setAction]=useState('');
  let newaction=action=>action .split(" ").map(word => `${word.substring(0,1).toUpperCase()}${word.substring(1)}`).join(" ");
  
   return(

<div class="form-group">
  <textarea class="form-control" id="mybox" rows="3" value={action} onChange={e => setAction(e.target.value)}></textarea>
  <br/><br/>
  <button type="button" class="btn btn-primary btn-lg"onClick={()=>setAction(newaction)}>Standarad</button>


     
   <HeaderTemplate />
     </div>
   )
 }      

export default App;