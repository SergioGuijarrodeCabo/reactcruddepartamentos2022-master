import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';


export default class DeleteDepartamento extends Component {


  state = {
    status: false
  }

  deleteDepartamento = (e) => { 
    e.preventDefault();

    //ESTE RETURN NO DIBUJA NADA PORQUE ESTÁ FUERA DEL RENDER
    //return(<h2>Departamento elimninado</h2>)
    
    var  urlDepartamentos = "https://apicruddepartamentoscore.azurewebsites.net/";

    var numero = this.props.id;
    var request = "/api/departamentos/" + numero;
    var url = urlDepartamentos + request;
    console.log(url);
    axios.delete(url).then(response => {
      this.setState({
        status: true
      });
    });

  }


  render() {

    //TENEMOS QUE DIBUJAR AQUÍ EL <h2> DEPARTAMENTO ELIMINADO</h2> 
    if (this.state.status ==true) {

      return (<Navigate to="/"/>)
    }

    return (
        <div>
            <h1>
                Delete Departamento:
                <span style={{color:"red"}}>
                    {this.props.id}
                </span>
            </h1>



            <form onSubmit={this.deleteDepartamento} >

                <button type="submit"className="btn btn-danger"> Eliminar Departamento</button>

            </form>
        </div>
    )
  }
}
