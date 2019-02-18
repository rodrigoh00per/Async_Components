import React, { Component } from "react";

//HIGH ORDER FUNCTION

//NEED A COMPONENT AS A PARAMETER

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { component: null };
    }
    //este Espera a que se le pasela respectiva importación del componente
    async componentDidMount() {
      const component = await importComponent(); //PAGE2.DEFAULT
      this.setState({ component: component.default }); //ASIGN TO THE STATE
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null; //SI EXISTE LA PROPIEDAD COMPONENTE MUESTRALO SI NO ADIOS
    }
  }
  return AsyncComponent;
}
