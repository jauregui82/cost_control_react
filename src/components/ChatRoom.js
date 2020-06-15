import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'; 
// import  firebase from '../config/firebase'
const firebase = window.firebase;
class ChatRoom extends Component{
    constructor(){
        super();
        this.state = {
            message:'',
            messages:[]
        }
    }

    updateMessage =(e)=>{
        this.setState({message: e.target.value});
    }

    componentDidMount(){
        firebase.database().ref('messages/').on('value', snap =>{
            const currentMessages= snap.val();
            if (currentMessages) {
                this.setState({
                    messages:currentMessages
                });               
                console.log('state', this.state);
            }
        });
    }

    handleRemoveItem=(e)=>{
        // e.preventDefault();
        console.log('=====',e);
        firebase.database().ref('messages/' + e).remove();
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const newMessage = {
            id: this.state.messages.length,
            text: this.state.message
        };

        firebase.database().ref(`messages/${newMessage.id}`).set({
            id:newMessage.id,
            text:newMessage.text
        });

        this.setState({message:''})
    }

    render(){
        const {messages} = this.state;
        const  messagesList = messages.map(message=>{
                return <li key={message.id} id={message.id}>{message.text} <Button onClick={()=>this.handleRemoveItem(message.id)}>X</Button> </li>
            });
        return(
            <div className=''>
                <ul>
                    {messagesList}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <TextField type='text' value={this.state.message} onChange={this.updateMessage}/>
                    <Button>Send </Button>
                </form>
            </div>
        )
    }
}

export default ChatRoom;