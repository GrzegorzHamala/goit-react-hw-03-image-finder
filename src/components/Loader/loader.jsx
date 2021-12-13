import React from 'react'
import Loader from "react-loader-spinner";
import "./../Styles/styles.css";

function loader() {
    return (
      <div className="Overlay">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={0}
        />
      </div>
    );
}

export default loader
