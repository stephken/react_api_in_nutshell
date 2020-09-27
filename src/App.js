import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shoes: []
    }
  }
  componentDidMount(){
    fetch("http://127.0.0.1:8000/shoes/")
    .then(res=>res.json())
    .then(data => this.setState({shoes:data}))
  }
  render(){
  return (
    <div>
      {this.state.shoes.map((shoe, id)=>
        <div key={id}>
          <ul>
      <li>size:{shoe.size}</li>
      <li>brand name:{shoe.brand_name}</li>
            <li>manufacturer:{shoe.manufacturer}</li>
            <li>color:{shoe.color}</li>
            <li>material:{shoe.material}</li>
            <li>type:{shoe.shoe_type}</li>
            <li>fastentype:{shoe.fasten_type}</li>
          </ul>
        </div>
        )}
      Ken
    </div>
  );}
}

export default App;
