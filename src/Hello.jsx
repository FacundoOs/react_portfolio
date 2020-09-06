import React from "react";

const Hello = () => {
  return (
    <div className="ui main container two column grid">
      <div>
        <img
          class="ui medium wide column circular image"
          src="https://images.unsplash.com/photo-1515705144542-6e18fa62036e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="column wide">
        <h1 class="wide column" id="hello">
          Facundo Osores
        </h1>
        <p>
        More than 11 years of work experience in technical areas. As a technician and as a manager. 
        I excel at conflict resolution, continuous improvement, planning, strategy, time reduction, 
        and waste. Where there are obstacles and problems, I see opportunities. Always in constant learning.
        </p>
      </div>
    </div>
  );
};

export default Hello;
