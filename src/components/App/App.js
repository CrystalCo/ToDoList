import React, { Component } from 'react';
import './App.css';

import GiftList from "../GiftList/GiftList";
import GiftItems from "../GiftItems/GiftItems";

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          items: [],
          currentItem: {text:'', key:''},
        };
    
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInput = e => {
        const itemText = e.target.value;
        const currentItem = {
            text: itemText,
            key: Date.now()
        };
        this.setState({
            currentItem,
        });
    }

    addItem = e => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem !== '') {
            console.log(newItem);
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: { 
                    text: '',
                    key: ''
                }
            });
        }
    }

    deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })
        this.setState({
            items: filteredItems,
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Gift App</h1>
                <div className="App">
                    <div className="GiftList">
                        <GiftList 
                            addItem={this.addItem} 
                            inputElement={this.inputElement} 
                            handleInput={this.handleInput}
                            currentItem={this.state.currentItem} 
                        />
                    </div>
                    <div className="GiftItems">
                        <GiftItems 
                            entries={this.state.items} 
                            deleteItem={this.deleteItem} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
