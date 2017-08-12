import React, { Component } from 'react';
import logo from './logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      basePizza: '',
      cebolla: false,
      pimientos: false,
      aceitunas: false,
      size: '',
      masa: ''
    }
  }
  handleChange(attr, type, e){
    this.state[attr] = type === 'check' ? e.target.checked : e.target.value
    this.setState(this.state)
  }
  handleSubmit(e){
    e.preventDefault()
    let ing = []
    this.state.cebolla ? ing.push('con') : ing.push('sin')
    this.state.pimientos ? ing.push('con') : ing.push('sin')
    this.state.aceitunas ? ing.push('con') : ing.push('sin')
    alert(`Su orden es:
    ${this.state.basePizza}
    ${ing[0]} cebolla
    ${ing[1]} pimientos
    ${ing[2]} aceitunas
    De tamaño: ${this.state.size}
    Con masa: ${this.state.masa}
    A Nombre de: ${this.state.nombre}
    Se envía recibo a: ${this.state.email}
    `)
  }
  render() {
    let st = this.state
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input value={st.nombre} onChange={this.handleChange.bind(this, 'name','text')} type="text" id="name"/>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">E-Mail:</label>
                <input value={st.email} onChange={this.handleChange.bind(this, 'email','text')} type="email" id="email"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input onChange={this.handleChange.bind(this, 'basePizza','radio')} type="radio" name='basePizza' value="Pepperoni" className="form-check-input"/>Pepperoni
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input onChange={this.handleChange.bind(this, 'basePizza','radio')} type="radio" name='basePizza' value="Pollo" className="form-check-input"/>Pollo
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input onChange={this.handleChange.bind(this, 'basePizza','radio')} type="radio" name='basePizza' value="Piña" className="form-check-input"/>Piña
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input onChange={this.handleChange.bind(this, 'cebolla','check')} type="checkbox"  checked={st.cebolla} className="form-check-input"/>Cebolla
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input onChange={this.handleChange.bind(this, 'pimientos','check')} type="checkbox"  checked={st.pimientos} className="form-check-input"/>Pimientos
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input onChange={this.handleChange.bind(this, 'aceitunas','check')} type="checkbox"  checked={st.aceitunas} className="form-check-input"/>Aceitunas
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="size">Tamaño:</label>
                <select onChange={this.handleChange.bind(this,'size','select')} id="size">
                  <option value="Personal">Personal</option>
                  <option value="Chica">Chica</option>
                  <option value="Mediana">Mediana</option>
                  <option value="Grande">Grande</option>
                  <option value="Jumbo">Jumbo</option>
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="dough">Masa:</label>
                <select onChange={this.handleChange.bind(this,'masa','select')} id="dough">
                  <option value="Tradicional">Tradicional</option>
                  <option value="Sarten">Sartén</option>
                  <option value="Orilla con Queso">Orilla con Queso</option>
                  <option value="Crunch">Crunch</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <button className="btn btn-primary" type='submit'>aceptar</button>
          </div>
        </form>
      </div>
    ) 
  }
}

export default App;
