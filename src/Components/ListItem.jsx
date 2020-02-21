import React from "react";
import PropTypes from "prop-types";
import { addZero } from "../Utils/utils";

const ListItem = ({ items, handlerPause, handlerDelete }) => {
    return (
        <>
            {items.map(({ id, title, hours, minutes, seconds, pause }) => {
                return (
                    <li key={id} className={`list__item ${!pause ? "active" : ""}`}>
                        <div title={title} className="list__title">
                            {title}
                        </div>
                        <div className="list__time">
                            {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}
                        </div>
                        <div className="list__buttons">
                            <button
                                className={`list__btn ${!pause ? "pause" : "play"}`}
                                onClick={() => handlerPause(id)}
                            />
                            <button className="list__btn delete" onClick={() => handlerDelete(id)} />
                        </div>
                    </li>
                );
            })}
        </>
    );
};

ListItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            hours: PropTypes.string.isRequired,
            minutes: PropTypes.string.isRequired,
            seconds: PropTypes.string.isRequired,
            pause: PropTypes.bool.isRequired,
        }),
    ),
    handlerPause: PropTypes.func.isRequired,
    handlerDelete: PropTypes.func.isRequired,
};

export default ListItem;
