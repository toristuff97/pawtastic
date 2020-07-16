import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
        petName: "",
        petBreed: "",
        petBirthday: "",
        petGender: "",
        spayed: '',
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

  spayedChange = (e) => {
    let val = e.target.name
    this.setState({
      spayed: val
    })
  }

  weightChange = (e) => { 
    this.setState({
      weight: (`${e.target.name} lbs.`)
    })
  }

  genderChange = (e) => {
    let val = e.target.name
    this.setState({
      petGender: val
    })
  }



  render() {
    return (
      <div className="infoForm">
      <h1>Yay, we love dogs! Give us the basics about your pup.</h1>
      <br/>
        <form className="pet-info">

        <label>Name  </label>
        <br/>
        <input 
          type="name"
          placeholder="Pet's name"
          // value={this.state.petName}
          onChange={this.onNameChange}
        />
        <br/> <br/>

        <button>Upload a photo</button>
        <br/> <br/>

        <label>Breed</label>
        <br/>
        <input 
          placeholder="Pet's breed"
          // value={this.state.petBreed}
          onChange={this.onBreedChange}
        />
        <br/> <br/>

        <label>Birthday</label>
        <br/>
        <input 
        type="date"
          placeholder="MM/DD/YYYY"
          // value={this.state.petBirthday}
          onChange={this.onBirthdayChange}
        />
        <br/> <br/>

        <label>Gender</label>
        <br/>
        <label>
          Female
        <input 
        type="radio"
        name="female"
        onClick={this.genderChange}
        />
        </label>

        <label>
          Male
        <input 
        type="radio"
        name="male"
        onClick={this.genderChange}
        />
        </label>
        <br/> <br/>


        <label>Spayed or Neutered</label>
        <br/>
        <label>
          Yes
        <input 
        type="radio"
        name="yes"
        onClick={this.spayedChange}
        />
        </label>

        <label>
          No
        <input 
        type="radio"
        name="no"
        onClick={this.spayedChange}
        />
        </label>

        <br/> <br/>
        <label>Weight</label>
        <br/>
        <label>
          0-25 lbs
        <input 
        type="radio"
        name="0-25"
        onClick={this.weightChange}
        />
        </label>

        <label>
          25-50 lbs
        <input 
        type="radio"
        name="25-50"
        onClick={this.weightChange}
        />
        </label>

        <label>
          50-75 lbs
        <input 
        type="radio"
        name="50-75"
        onClick={this.weightChange}
        />
        </label>

        <label>
          100+ lbs
        <input 
        type="radio"
        name="100+"
        onClick={this.weightChange}
        />
        </label>
        <br/> <br/> 
        <div className="navBar">
          <br/> <br/>
        <button className="back">Back</button>
        <button className="next">Next</button>
        </div>
      </form>
      </div>
    )
  }
}

export default Form;
