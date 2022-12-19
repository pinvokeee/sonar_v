import './App.css'
import { AppToolBar } from './components/AppToolBar/AppToolBar'
import { TemplateSelecter } from './components/TemplateSelecter/TemplateSelecter';
import { templatesNodeContext, useContextTemplateNode, useTestContext } from './context/contextTemplates';
// import { defaultContextTemplatesNode, IContextTemplatesNode, templatesNodeContext, useContextTemplateNode } from './context/contextTemplates';
import { createContextEnviroment } from './context';

export const App = () => 
{  
  const contextTemplates = useContextTemplateNode();
  const contextA = useTestContext();

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
