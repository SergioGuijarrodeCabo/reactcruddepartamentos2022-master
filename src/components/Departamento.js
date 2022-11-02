import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export default class Departamento extends Component {

    state = {
     departamentos: []  ,
     statuts: false,
     urls:[]
    }



    generarDepartamentos = () => {

        var request = "/api/departamentos";
        var urlDepartamento =   "https://apicruddepartamentoscore.azurewebsites.net/";
        var url = urlDepartamento + request;
        axios.get(url).then(response => {
            console.log(url);
            this.setState({
                departamentos: response.data,
                status: true
              
            });

           
        });

       
    }



    componentDidMount = () => {

        this.generarDepartamentos();

    }





   



  render() {
    
    return (
        


      <div>
       
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Departamentos
                </a>
                <ul className="dropdown-menu">
                  {
                        this.state.departamentos.map((departamento, index) => {
                           
                           


                            return (<li key={departamento.numero}>

                                    {/*<NavLink className="nav-link" to={"empleados/"+departamento.numero}}>Algo</NavLink>*/}
                                    <NavLink className="nav-link" to={`/empleados/${departamento.numero}`}>{departamento.nombre}</NavLink>
                            </li>)
                        })


                  }
                </ul>
                
              </li>

        

      </div>
        
    )

    
  }
}
