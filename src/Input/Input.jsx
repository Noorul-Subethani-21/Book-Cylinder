import React from 'react'
import image from '../assets/image.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Input.css'
const Input = () => {
  return (
    <div>
        <div className='head'>
            <h2>Postpaid Bill</h2>
            
        </div>
        <div style={{ display: "flex", flexDirection: "row" , }}>

            <div className="box2" style={{ height:'100px', width:'30%'}} >
              <div>
                <img
                  src={image}
                  style={{ width: "100%", height: "80%", marginTop: "20%", marginLeft:'10px', borderRadius:'5px' }}
                />
              </div>
              </div>
              <div style={{position:'relative', right:'15%'}}>
                <h5>Rayna Saris</h5>
                <span>+911234567890</span>
               
              </div>
            </div>
<div style={{display:'flex', flexDirection:'row', width:'100vh', marginTop:'5%' }}>
        <div style={{
   padding: '10px',
   border: '1px solid gray',
   width: '100%',
   fontSize: '20px',
   color: 'black',
display:'flex',
flexDirection:'row',
marginLeft:'20px',
background:'#fff',
borderRadius:'12px'


        }}>
            <input type="text" placeholder='Select Your Operator' style={{background:'#fff'}}/>
            <ArrowDropDownIcon style={{marginTop:'5px'}}   />
            </div>
            <div style={{

padding: '10px',
    border: '1px solid gray',
    width: '100%',
    fontSize: '20px',
    color: 'black',
display:'flex',
flexDirection:'row',
marginLeft:'20px',
background:'#fff',
borderRadius:'12px'
            }}>
                       <input type="text" placeholder='Select Your State' style={{border:'none',background:'#fff' }}   />
                       <ArrowDropDownIcon style={{marginTop:'5px'}} /> 

            </div>
            </div>
            </div>
        
        
    
  )
}

export default Input