import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class ModifyDepartamento extends Component {

    state = { 
        departamento: {},
        status: false, 
        status2: false
    }

    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
    cajaNumero = React.createRef();

    buscarDepartamento = () => {
        var id = this.props.id;
        var request = "/api/departamentos/" + id;
        var  urlDepartamentos = "https://apicruddepartamentoscore.azurewebsites.net/";
        var url = urlDepartamentos + request;

        axios.get(url).then(res => {
            this.setState({
                departamento: res.data,
                status: true
            });
          

        });
    }



    updateDepartamento = (e) => {


        e.preventDefault();
        
        var num = parseInt(this.props.id);
        var nom = this.cajaNombre.current.value;
        var loc = this.cajaLocalidad.current.value;
     
        var  urlDepartamentos = "https://apicruddepartamentoscore.azurewebsites.net/";

        var data ={
            numero: num,
            nombre: nom,
            localidad: loc
        };

        var request = "/api/departamentos/";
        var url = urlDepartamentos+request;

        axios.put(url, data).then(res => {
            this.setState({
                status2: true
            });

        });

    }

    componentDidMount = () => {
        this.buscarDepartamento();

    }


  render() {
    

      //TENEMOS QUE DIBUJAR AQUÍ EL <h2> DEPARTAMENTO ELIMINADO</h2> 
      if (this.state.status2 ==true) {

        return (<Navigate to="/"/>)
      }
  

    return (
        this.state.status == true && (



      <div>
        <h1>Modificar Departamento</h1>
        {
            this.state.status == true &&
            (<h1 style={{color:"green"}}>Departamento modificado</h1>)

        }
        <form onSubmit={this.updateDepartamento}>
            <input type="text" ref={this.cajaNumero} defaultValue={this.state.departamento.numero} />
            <label>Nombre</label>
            <input type="text" ref={this.cajaNombre} defaultValue={this.state.departamento.nombre} />
            <label>Localidad</label>
            <input type="text" ref={this.cajaLocalidad} defaultValue={this.state.departamento.localidad} />
            <button type="submit" className="btn btn-success">Modificar Departamento</button>
        </form>
      </div>
    )

    )
  }
}
