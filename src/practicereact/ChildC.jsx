import React, { useContext } from 'react'
// import { data,data1,data2} from '../App';

const ChildC = () => {
// const name=useContext(data);
// const gender=useContext(data1);
// const age=useContext(data2);                                                                                                                                                                                                                                                                                                                                                                                                                   
  return (
    <div>

{/* <data.Consumer>
  {(name)=>{
return(
  <data1.Consumer>
    {
      (gender)=>{
        return(
          <data2.Consumer>
            {
              (age)=>{
                return(
                  <h1>Hello my name is {name}, my gender {gender} & my age is {age}</h1>
                )
              }
            }
          </data2.Consumer>
        )
      }
    }
  </data1.Consumer>
)
  }}
</data.Consumer> */}
  {/* <h1>Hello my name is {name}, my gender {gender} & my age is {age}</h1> */}

    </div>
  )
}

export default ChildC;