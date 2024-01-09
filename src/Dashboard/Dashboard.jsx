import React from "react";
import airtel from "../assets/airtel.png";
import SearchIcon from "@mui/icons-material/Search";
import image from '../assets/image.png'
import "./DashBoard.css";
const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{fontFamily:'Poppins', marginLeft:'60px',fontWeight:'Bold'}}>Postpaid Bill </h2>
      <div className="form-container">
        <div className="form">
          <SearchIcon className="icon" />
          <input type="search" placeholder="Search by Number or Name" />
        </div>
        <button style={{ marginTop: "10px", marginBottom: "1%" }}>
          Search
        </button>
      </div>

      <div
        style={{
          marginRight: "100vh",
        
          marginLeft:'2%',
          gap: "20%",
          justifyContent: "space-around",
          width: "50%",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontFamily: "Poppins" }}>Recent</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="box1">
            <div>
              <img
                src={airtel}
                style={{ width: "100%", height: "50%", marginTop: "20%", marginLeft:'15px' }}
              />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <h5>Rayna Saris</h5>
              <span>+911234567890</span>
              <p>Last Paid:₹ 499 on 8th Dec 2023</p>
            </div>
          </div>

          <div className="box1" style={{ marginLeft: "20%" }}>
            <div>
              <img
                src={airtel}
                style={{ width: "100%", height: "50%", marginTop: "20%" ,marginLeft:'15px' }}
              />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <h5>Rayna Saris</h5>
              <span>+911234567890</span>
              <p style={{color:'red'}}>Due Date:₹1,149 on 8th Dec 2023</p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginRight: "100vh",
          
            gap: "20%",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontFamily: "Poppins" }}>All Contacts</h2>
          <div style={{ display: "flex", flexDirection: "row" ,height:'30%',}}>
            <div className="box2" style={{ height:'100px', width:'30%'}} >
              <div>
                <img
                  src={image}
                  style={{ width: "100%", height: "80%", marginTop: "20%", marginLeft:'10px', borderRadius:'5px' }}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h5>Rayna Saris</h5>
                <span>+911234567890</span>
               
              </div>
            </div>

            <div className="box2" style={{ marginTop:'20px', marginLeft: "27%",height:'100px', width:'30%'  }}>
              <div>
                <img
                  src={image}
                  style={{  width: "100%", height: "80%", marginTop: "20%", marginLeft:'10px', borderRadius:'5px' }}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h5>Rayna Saris</h5>
                <span>+911234567890</span>
                
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" ,height:'30%',}}>
            <div className="box2" style={{ height:'100px', width:'30%'}} >
              <div>
                <img
                  src={image}
                  style={{ width: "100%", height: "80%", marginTop: "20%", marginLeft:'10px', borderRadius:'5px' }}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h5>Rayna Saris</h5>
                <span>+911234567890</span>
               
              </div>
            </div>

            <div className="box2" style={{ marginTop:'20px', marginLeft: "27%",height:'100px', width:'30%'  }}>
              <div>
                <img
                  src={image}
                  style={{  width: "100%", height: "80%", marginTop: "20%", marginLeft:'10px', borderRadius:'5px'}}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h5>Rayna Saris</h5>
                <span>+911234567890</span>
                
              </div>
            </div>
          </div>



<div style={{ display: "flex", flexDirection: "row" ,height:'30%',}}>
            <div className="box2" style={{ height:'100px', width:'30%'}} >
              <div>
                <img
                  src={image}
                  style={{ width: "100%", height: "80%", marginTop: "20%", marginLeft:'10px', borderRadius:'5px' }}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h5>Rayna Saris</h5>
                <span>+911234567890</span>
               
              </div>
            </div>

            <div className="box2" style={{ marginTop:'20px', marginLeft: "27%",height:'100px', width:'30%'  }}>
              <div>
                <img
                  src={image}
                  style={{  width: "100%", height: "80%", marginTop: "20%", marginLeft:'10px', borderRadius:'5px'}}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h5>Rayna Saris</h5>
                <span>+911234567890</span>
                
              </div>
            </div>
          </div>


<div style={{ display: "flex", flexDirection: "row" ,height:'30%',}}>
            <div className="box2" style={{ height:'100px', width:'30%'}} >
              <div>
                <img
                  src={image}
                  style={{ width: "100%", height: "80%", marginTop: "20%", marginLeft:'10px', borderRadius:'5px' }}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h5>Rayna Saris</h5>
                <span>+911234567890</span>
               
              </div>
            </div>

            <div className="box2" style={{ marginTop:'20px', marginLeft: "27%",height:'100px', width:'30%'  }}>
              <div>
                <img
                  src={image}
                  style={{  width: "100%", height: "80%", marginTop: "20%", marginLeft:'10px', borderRadius:'5px'}}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h5>Rayna Saris</h5>
                <span>+911234567890</span>
                
              </div>
            </div>
          </div>




</div>






                         </div>
            </div>
          
        
     
  );
};

export default Dashboard;
