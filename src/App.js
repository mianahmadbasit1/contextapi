import React, { createContext } from 'react'

import './App.css';
import ChildC from './childC';
import Example from './childB';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChildA from './childA';
// whats is context Api
// create ,provider, consumer
// how to use it
// its contextapi is problamtic


const data = createContext();
const data1= createContext();
const class1 = createContext();
function App() {
  const name= "ahmad basit";
  const gender = "male";
  const class2= 6;
  return (
    <>
      <data.Provider value= {name}>
      <data1.Provider value={gender}>
       <class1.Provider value={class2}> 
<ChildC/>
        </class1.Provider>
      </data1.Provider>
      </data.Provider>
      
      <ChildC/>
    </>
  )
}

export default App;
export {data,data1,class1};