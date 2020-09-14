import React, { Component } from "react"
import Hero from '../Hero/Hero'
import Characters from '../Character-Cards/Character-Cards'

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      characters: []
    }
  }
  
  componentDidMount() {
    const url = "https://lexleach-api-project.herokuapp.com/characters"
    fetch(url)
      .then(res => res.json())
      .then(jsonRes => {
        console.log('==========================')
        console.log(jsonRes)
        console.log('==========================')
        this.setState({ characters: jsonRes})
      })
      .catch(err => {
        console.log('Something went wrong!')
      })
  }

  render() {
    return (
      <div>
        <Hero />
        <section className='section has-background-grey-dark'>
              <div className='container'>
                  <div className='columns is-multiline is-vcentered'>
                  {
                    this.state.characters.map (character => {
                      return (
                        <div className='column is-one-third' key={character._id}>
                            <Characters link={character.image} name={character.name} age={character.age} bio={character.bio} />
                        </div>
                      )
                    })}
                  </div>
              </div>
          </section>
      </div>
    )
  }
}

export default App;
