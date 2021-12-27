import React, { Component } from "react";
import Table from './table'
import Form from './form'
class App extends Component {
    state = {
        characters: [],
    }
    render(){
        const { characters } = this.state
        return (
            <div className="container">
              <Table characterData={characters} removeCharacter={this.removeCharacter}/>
              <Form handleSubmit={this.handleSubmit}/>
            </div>
          )
    }

    removeCharacter = (index) => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character, i) => {
              return i !== index
            }),
          })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }
}
  export default App