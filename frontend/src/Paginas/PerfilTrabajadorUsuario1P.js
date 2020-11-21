import React, { Component } from "react";
import PerfilTrabajadorUsuario1 from "../Componentes/PerfilTrabajadorUsuario/PerfilTrabajadorUsuario1";
import Axios from "axios";

class PerfilTrabajadorUsuario1P extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      todoItem: []
    };
  }

  async componentDidMount() {
    try {
      const { match: { params: {id},},
    } = this.props
  }catch{

  }
    console.log(this.props);
    await Axios.get(`https://rickandmortyapi.com/api/character/2`).then(res =>{
      this.setState({todoItem: res.data.results})
    })
  }
  render(){
    console.log(this.state.todoItem)
    return (
      <div>
        
        <PerfilTrabajadorUsuario1 />
      </div>
    );
  }
  
}

export default PerfilTrabajadorUsuario1P;
