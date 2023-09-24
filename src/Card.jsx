import React from "react";
import './index.css';

function Card(props) {
    return (
      <>
      <div className='cards'>
        <div className='card' >
          <img src={props.imgsrc} alt='myPic' className='card_img'/>
            <div className='card_info'>
                <h3 className='card_title'>{props.sname} </h3>
                     <span>{props.addr}</span>
                    <span>    </span>
                    <a href={props.link} target="_blank">
                        <button className="button">More...</button>
                    </a>  
            </div>
        </div>
      </div>
    </>
      );
  }
export default Card;
  