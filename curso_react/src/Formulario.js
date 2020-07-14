import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props){
        super(props);

        this.stateInicial = {
            nome:'',
            livro:'',
            preco:'',
        };

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]:value
        });
    };

    submitFormulario = () => {
        this.props.escutadorSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render(){
        return(
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={this.state.nome}
                            onChange={this.escutadorDeInput}
                            />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                            id="livro"
                            type="text"
                            name="livro"
                            value={this.state.livro}
                            onChange={this.escutadorDeInput}
                            />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                            id="preco"
                            type="text"
                            name="preco"
                            value={this.state.preco}
                            onChange={this.escutadorDeInput}
                            />
                    </div>

                    <button className="waves-effect waves-light btn indigo lighten-2" onClick={this.submitFormulario} type="button">Salvar
                    </button>
                </div>
            </form>
        );
    }
}

export default Formulario;