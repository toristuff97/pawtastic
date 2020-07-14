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


        <label>Spayed or Neutered</label>
        <label>
          Yes
        <input 
        type="radio"
        name="yes"
        />
        </label>
        <label>
          No
        <input 
        type="radio"
        name="no"
        />
        </label>


        <label>Weight</label>
        <label>
          0-25 lbs
        <input 
        type="radio"
        name="0-25"
        />
        </label>
        <label>
          25-50 lbs
        <input 
        type="radio"
        name="25-50"
        />
        </label>
        <label>
          50-75 lbs
        <input 
        type="radio"
        name="50-75"
        />
        </label>
        <label>
          100+ lbs
        <input 
        type="radio"
        name="100plus"
        />
        </label>
      </form>

      </div>
    )
  }

}

export default App;
