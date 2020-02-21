import React from "react";
import PropTypes from "prop-types";

const Form = ({ handlerSubmit, inputRef }) => {
    return (
        <form className="form" onSubmit={handlerSubmit}>
            <div className="form__row">
                <input ref={inputRef} type="text" className="form__input" placeholder="Enter tracker name" />
                <button type="submit" className="form__submit" />
            </div>
        </form>
    );
};

Form.propTypes = {
    handlerSubmit: PropTypes.func.isRequired,
    inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Form;
