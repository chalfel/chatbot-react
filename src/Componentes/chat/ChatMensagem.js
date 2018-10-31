import React from 'react'
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap'

const ChatMensagem = props => {
    return (
        <div className='chat-mensagem'>
        <hr/>
        <InputGroup>
            <Input placecholder='Digite sua Mensagem' />
            <InputGroupAddon addonType='append'>
                <Button color = 'success'>Enviar</Button>
            </InputGroupAddon>
        </InputGroup>
        
        </div>


    )
}

export default ChatMensagem