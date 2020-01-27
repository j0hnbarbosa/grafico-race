import React, { Component } from 'react';
import ChartRace from '../chartRace';
import { CircularProgress } from '@material-ui/core';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: [],
      value : 0,
      id: setInterval(() => {
        this.handleChange();
      }, 2000),
    };
    this.handleChange();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleChange() {
    let { value, id } = this.state;
    if(value > 500) {
      clearInterval(id);
    }

    const data = [
      { id: 0, title: 'Ayfonkarahisar', value: this.getRandomInt(10, 90), color: '#50c4fe' },
      { id: 1, title: 'Kayseri', value: 38, color: '#3fc42d' },
      { id: 2, title: 'Muğla', value: this.getRandomInt(10, 90), color: '#c33178' },
      { id: 3, title: 'Uşak', value: this.getRandomInt(10, 90), color: '#423bce' },
      { id: 4, title: 'Sivas', value: 58, color: '#c8303b' },
      { id: 5, title: 'Konya', value: 16, color: '#2c2c2c' },
    ];
    console.log('value: ', value);
    value += 1;
    this.setState({ data, value });
  }

  render(){
    let { value } = this.state;

    return(
      
      <div>
        {value === 0 && (<CircularProgress />)}
        {value > 0 && (
          <ChartRace
            data={this.state.data}
            backgroundColor='#CECECE'
            width={960}
            padding={5}
            itemHeight={58}
            gap={12}
            titleStyle={{ font: 'normal 400 13px Arial', color: '#000' }}
            valueStyle={{ font: 'normal 400 11px Arial', color: '#000' }}
            value={this.state.value}
          />
        )}
      </div>
    );
  }

}