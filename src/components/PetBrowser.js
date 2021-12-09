import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  petCard = () => {
    return this.props.pets.map(pet=> <Pet onAdoptPet = {this.props.onAdoptPet} key={pet.id}
    pet={pet}
    />)}
  render() {
    return <div className="ui cards">{this.petCard()}</div>
  }
}

export default PetBrowser
