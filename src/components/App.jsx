import { useState } from 'react'
import {SearchBar} from "./SearchBar";

function App() {

  return (
    <div className="App">
      <div className="search">
        <SearchBar apiUrl="https://www.google.com/search?q=" iconUrl="src/img/google-icon.svg" />
        <SearchBar apiUrl="https://www.yandex.ru/search/?text=" iconUrl="src/img/yandex-icon.svg" />
        <SearchBar apiUrl="https://duckduckgo.com/?t=ffab&q=" iconUrl="src/img/duckduckgo-icon.svg" />
      </div>
    </div>
  )
}

export default App
