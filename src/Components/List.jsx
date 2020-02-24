import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const List = ({ items, handlerPause, handlerDelete }) => {
    return (
        <ul className="list">
            <ListItem items={items} handlerPause={handlerPause} handlerDelete={handlerDelete} />
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            seconds: PropTypes.number.isRequired,
            pause: PropTypes.bool.isRequired,
        }),
    ),
    handlerPause: PropTypes.func.isRequired,
    handlerDelete: PropTypes.func.isRequired,
};

export default List;
