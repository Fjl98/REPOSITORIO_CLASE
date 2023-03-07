import React,{Component} from 'react';
import { useState,useReducer } from 'react';


  function App() {
    let initialState = {
      contador:0
    }

    const (estado, dispatch) = useReducer(reducer,initialState);
      let action = {
        type:"incrementar",
      }
      dispatch(action.type);

    }

  


export default App;