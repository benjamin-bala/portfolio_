import { useReducer } from 'react';
import './App.css';
import Header from './Components/Header';
import Landingpage from './Pages/Landing-Page/Landingpage';
import { theme } from './theme';

export const ACTIONS = {
  TOGGLE_DARKMODE: 'toggle-darkmood',
  TOGGLE_LIGHTMODE: 'toggle-lightmood',
}

function reducer (state,action){
  switch(action.type){
     case ACTIONS.TOGGLE_DARKMODE:
       return {...state, isDark: true}
      case ACTIONS.TOGGLE_LIGHTMODE:
        return {...state, isDark: false}
      default:
        return state
  }
    
  }

function App() {

  const [state, dispatch] = useReducer(reducer, {
    isDark: false
  })

  document.querySelector("body").style.backgroundColor = state.isDark ? theme.darkBackground400 : '#fafafa' 
  return (
    <div className="App">
      <Header  state={state} dispatch={dispatch}/>
      <Landingpage  state={state}/>
    </div>
  );
}

export default App;
