import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      petBreed: "",
      petBirthday: "",
      petGender: "",
      spayed: false,
      weight: ""
    };
  }

  onNameChange = (event) => {
    this.setState({
      petName: event.target.value
    })
  }

  onBreedChange = (event) => {
    this.setState({
      petBreed: event.target.value
    })
  }

  onBirthdayChange = (event) => {
    this.setState({
      petBirthday: event.target.value
    })
  }


  render() {
    return (
      <div>
      <h1>Yay, we love dogs! Give us the basics about your pup.</h1>
        <form className="pet-info">
        <label>Name</label>
        <input 
          type="name"
          placeholder="Pet's name"
          value={this.state.petName}
          onChange={this.onNameChange}
        />
        <label>Breed</label>
        <input 
          placeholder="Pet's breed"
          value={this.state.petBreed}
          onChange={this.onBreedChange}
        />
        <label>Birthday</label>
        <input 
        type="date"
          placeholder="MM/DD/YYYY"
          value={this.state.petBirthday}
          onChange={this.onBirthdayChange}
        />
        <label>Gender</label>
        <label>
          Female
        <input 
        type="radio"
        name="female"
        />
        </label>
        <label>
          Male
        <input 
        type="radio"
        name="male"
        />
        </label>
      </form>

      </div>
    )
  }

}

export default App;
