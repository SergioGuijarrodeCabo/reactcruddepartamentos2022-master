import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
export default class Empleados extends Component {

    state = {

      empleados: [],
      status: false
    }


    generarEmpleados = () => {
      var urlEmpleados = "https://apiempleadosspgs.azurewebsites.net/";
      var id = this.props.id;
      
      var urlRequest = "api/empleados/empleadosdepartamento/" + id;
     var url = urlEmpleados + urlRequest;
 
   
      axios.get(url).then(res => {

          this.setState({ empleados: res.data, status:true });
      });
    }



    componentDidMount = () => {

        this.generarEmpleados();
    }


    componentDidUpdate = (oldProps) => {
      if (oldProps.id != this.props.id){
        this.generarEmpleados();
      }

    }


  render() {



    return (
      <div>
        <h1>Empleados {this.props.id}</h1>
      

      <ul>
        {

          this.state.status == true &&
          this.state.empleados.map((empleado, index) => {

            return (
              <li key={empleado.idEmpleado}>
                {empleado.apellido} 
              </li>
            )
          })
        }

      </ul>
      </div>
    )
  }
}
