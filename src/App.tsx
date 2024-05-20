import './App.css'
import Card from './compnents/Card';

const App = () => {

  return (
    <div className="playingCards faceImages">
      <Card rank={"k"} suit={"diams"}/>
      <Card rank={"q"} suit={"hearts"}/>
      <Card rank={"a"} suit={"spades"}/>
      <Card rank={"10"} suit={"clubs"}/>
    </div>
  )
}

export default App
