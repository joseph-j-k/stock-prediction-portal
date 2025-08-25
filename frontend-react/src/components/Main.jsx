import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className='text-light lead'>
            Welcome to the Stock Prediction Portal — your gateway to smarter trading and investment decisions. 
            This platform leverages data analysis and predictive models to provide insights into future stock trends, 
            helping you make informed choices with confidence.
          </p>
          < Button text="Login" class="btn-outline-info" />
        </div>
      </div>
    </>
  )
};

export default Main;
