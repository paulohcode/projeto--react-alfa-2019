import React, {Component} from 'react'

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            nome: '',
            sobrenome: ''
        }
    }

    onChange = event => {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <input name="nome" placeholder="Nome" onChange={this.onChange} />
                <br />
                <br />
                <input name="sobrenome" placeholder="sobrenome" onChange={this.onChange} />
                <div>
                    Seu nome e: {this.state.nome} {this.state.sobrenome}
                </div>
            </div>
        )
    }
}

export default Form