import { Component } from "react";
import checked from './checked.jpg';

export class GroceryList extends Component{
    state = {
        userInput: '',
        groceryList: []
    }
    onChangeEvent(e) {
        this.setState({userInput: e});
    }
    addItem(input){
        if (input === "") {
            alert("Please input item")
        }
        else
        {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ''});
        
        }
    }
    deleteItem(input){
            let listArray = this.state.groceryList;
            listArray = [];
            this.setState({groceryList: listArray});
    }
    CrossedWord(event) {
        const li=event.target;
        li.classList.toggle("crossed");
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input 
                        type="text"
                        placeholder="What do you want to buy today?"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput} />
                    </div>
                    <div className="container">
                        <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                        <li onClick={this.CrossedWord} key={index}> 
                        <img src={checked} width="40px" alt="checked" />
                        {item} </li>))}
                    </ul>
                    <div className="container">
                        <button onClick={() => this.deleteItem()} className="delete">Delete</button>
                    </div>
                </form>
            </div>
        )
    }


}