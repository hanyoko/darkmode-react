import './App.css';
import {useState} from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { NameContext } from './context/NameContext';
import { DarkContext } from './context/DarkContext';
//이름으로 내보내기 할 때는 중괄호를 붙여야한다.

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <NameContext.Provider value="aaa">
      {/* NameContext에 Provider를 이용하여 감싸주면 안에 속한 값이 값을 이용할 수 있다. 
      value 값을 변경하면 context 값이 변경된다.*/}
      <DarkContext.Provider value={{isDark, setIsDark}}>
        <div className="App">
          <Header isDark={isDark}/>
          <Main isDark={isDark}/>
          <Footer isDark={isDark} setIsDark={setIsDark}/>
        </div>
      </DarkContext.Provider>
    </NameContext.Provider>
    
  );
}

export default App;
