import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppToolBar } from './components/AppToolBar/AppToolBar'
import { TemplateSelecter } from './components/TemplateSelecter/TemplateSelecter';
import { defaultContextTemplatesNode, IContextTemplatesNode, templatesNodeContext, useContextTemplateNode } from './context/contextTemplates';

export const App = () => 
{  
  const contextTemplates = useContextTemplateNode();

  return (
    <div className="App">

      <templatesNodeContext.Provider value={contextTemplates}>
        <AppToolBar></AppToolBar>
        <TemplateSelecter></TemplateSelecter>
      </templatesNodeContext.Provider>

    </div>
  )
}

export default App;
