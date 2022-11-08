import React from "react";

export const Form = ({handleSubmit, handleChange, guess}) => {

  return (
    <form className="answer-form-b" autocomplete="off" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="answer-input-b"
          type="text"
          name="answer"
          value={guess}
          onChange={(e) => handleChange(e)}
        />
        <input className="answer-button-b" type="submit" value="guess" />
    </form>
  )

}

export default Form