import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';
import Card from './Card';
import './index.css';
import GoogleMapComponent from './GoogleMapComponent';

ReactDOM.render(
  <>
    <h1 className='heading'>List of Profiles</h1> <br></br>
    <hr/>
    { Data.map((val) => {
      return(

        <div>
          <Card 
              key={val.id}    
              imgsrc={val.imgsrc}
              sname={val.sname}
              addr={val.addr}
              link={val.link}
              Born={val.Born}
              Height={val.Height}
              Centuries={val.Centuries}/>

          {/* <GoogleMapComponent
              lat={val.lat}
              long={val.long}/> */}

            <GoogleMapComponent/>
        </div>              
      );
    })}
  </>, document.getElementById("root")
)