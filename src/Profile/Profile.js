import { checkPropTypes } from 'prop-types';
import React from 'react'


const Profile = (props) => {

  const style = {
    textAlign: 'center',
    border: '20px solid black   ',
    lineHeight: '20px'
  }
  const red = {
    color: 'red'
  }
  // const SimpleComponent = ({ requiredProps }) => {
  //   return (
  //     <>
  //       {("func"===  checkPropTypes.props)? (
  //         <h1>We need this {requiredProps} !</h1>
  //       ) : (
  //         <h1>Ooops ! we need that props</h1>
  //       )}
  //     </>
  //   );
  //  };



  const handleName = ()=>{
    alert(props.fullName)
  }
  return (

    <div style= {style}>
      { handleName()}
     <h1 style={{ transform: "translate(500px)"  ,color:'red', display:'flex', alignItems:'center'}}>profile picture: <br /><span style={{border: '2px solid black   '}} >{props.children }</span> </h1>
    <h1 style={red} >full name:</h1> {props.fullName} <br /> <h1 style={red}>bio: </h1> {props.bio} <br /> <h1 style={red}>profession:</h1>  {props.profession}
    </div>
  )
 
}
// Profile.propTypes = {
//   name: PropTypes.string
// };
 Profile.defaultProps= {
    fullName:"some name"

  }
  Profile.defaultProps= {
    bio:"empty"

  }
  Profile.defaultProps= {
   profession:"unemployed"

  }
export default Profile
