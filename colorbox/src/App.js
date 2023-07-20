import React from "react";
import style from "../src/styles/App.module.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: [
        "black",
        "white",
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
      ],
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(index) {
    const {colors} = this.state
    const newColors = [...colors];
    const randomIndex = Math.floor(Math.random()*colors.length)
    newColors[index] = colors[randomIndex]
    this.setState({colors:newColors})
  }
  render() {
    const { colors } = this.state;
      return (

        <div className={style.content}>
     {colors.map((color,index)=>(
       <div key={"color"+index} style={{
  backgroundColor:color,
  width:"200px",
  height:"200px",
  cursor:"pointer",
  marginRight:"12px",
  marginBottom:"12px",
  textAlign:"center",
  paddingTop:"36px",
  borderRadius:"8px"
  
}} onClick={()=>this.changeColor(index)}>Click me</div>


     ))}

        </div>
      )
    
    
      }
}
export default App;
