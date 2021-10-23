import React from "react";

const Form = (props) => {
    return (
      <form onSubmit={props.getWeatherButton}>
        <input type="text" name="country" placeholder="country..." />
        <input type="text" name="city" placeholder="city..." />
        <button>Get Weather</button>
      </form>
    )
}

export default Form;