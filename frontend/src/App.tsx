import { useState } from 'react';
import './App.css'

function App() {
  const [modal, setModal] = useState<boolean>(false);
  const [theme, setTheme] = useState<'ligth'|'dark'>('ligth')

  const handleModal=()=>{
    const status = modal;
    console.log(modal)
    setModal(!status)
  }
  const handleTheme=()=>{
    console.log(theme)
    const evalTheme = theme === 'ligth'? 'dark': 'ligth'

    setTheme(evalTheme)
    localStorage.theme= theme;
  }

  return (
    <>
      <div className="page h-screen w-full bg-slate-200 dark:bg-slate-800 dark:text-slate-200 text-slate-800 flex flex-col items-center justify-center">
      {/* Header */}
      <button className=' text-white top-0' onClick={handleModal}>Open modal</button>
      <button className=' text-white top-0' onClick={handleTheme}>Change theme</button>

      <div className={`flex modal w-full h-screen bg-opacity-50 fixed left-0 top-0 justify-center items-center ${modal? 'visible':'hidden'}`}>
          <div className="flex w-[800px] h-[600px] bg-[#3d574b] text-orange-700 justify-center items-center">

      
            <button className=' text-white' onClick={handleModal}>Close modal</button>
          </div>
      </div>

      
      </div>
    </>
  )
}

export default App
