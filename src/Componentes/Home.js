import React, {Component} from 'react'
import { Button } from 'reactstrap';
class home extends Component {
    render(){
            return (
                <div className="home">
                    <p className="App-intro">
                    Simples Aplicação de ChatBot Criada em React.JS
                     <p>para funcionar com o IBM Watson Assistant.</p>
                   <p> <Button color="danger">Danger!</Button></p>
                    </p>
                </div>  
            )    }
}

export default home