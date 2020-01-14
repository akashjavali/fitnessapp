import React, { Component } from 'react';
import './App.css';
import { Header, Footer } from './Components/Layouts';
import Exer from './Components/Exer';
import { muscles, exercises } from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises
    };
  }

  getExerciseByMuscle() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );  
  }

  handleCategorySelected = category => {
    
  }
  render() {
    const exercises = this.getExerciseByMuscle();

    return (
      <div className='App'>
        <Header />
        <Exer exercises={exercises} />
        <Footer onSelect={this.handleCategorySelected} muscles={muscles} />
      </div>
    );
  }
}

export default App;
