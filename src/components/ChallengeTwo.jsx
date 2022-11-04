import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() { 

  }


  randomize = (studentList) => {
    //shuffle the array and set the state
    let currIndex = studentList.length;
    let randomIndex;
    
    while(currIndex!=0){
      randomIndex = Math.floor(Math.random*currIndex);
      currIndex --;
      [studentList[currIndex],studentList[randomIndex]]=[studentList[randomIndex],studentList[currIndex]];

    }

    this.setState(studentList)

  }

  
  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
             {/* display the list of students by iterating through the array */}
       
            {studentList.map((student)=><p> {student}</p>)}
             
             {/* {studentList} */}
          </ul>
        </div>
        <button className='btn large' onClick={() => this.randomize(studentList)}>Randomize</button>
      </>
    )
  }
}
