import React, { Component } from "react";
import Form from "../Components/Form";
import List from "../Components/List";

class App extends Component {
    state = {
        items: [],
    };

    inputRef = React.createRef();

    componentDidMount() {
        if (localStorage.getItem("localStore")) {
            this.getLocalStorage();
        }
        this.updateStates();
    }

    updateStates = () => {
        setInterval(this.tick, 1000);
        setInterval(this.setLocalStorage, 1000);
    };

    getLocalStorage = () => {
        const returnLocalStorage = JSON.parse(localStorage.getItem("localStore"));
        this.setState({
            items: returnLocalStorage.items,
        });
    };

    setLocalStorage = () => {
        localStorage.setItem("localStore", JSON.stringify(this.state));
    };

    addItem = () => {
        this.setState({
            items: [
                {
                    id: new Date().getTime(),
                    title: this.inputRef.current.value.trim() || new Date().toLocaleTimeString(),
                    seconds: 0,
                    pause: false,
                    currentTime: new Date().getTime(),
                },
                ...this.state.items,
            ],
        });
        this.inputRef.current.value = "";
        this.setLocalStorage();
    };

    handlerDelete = id => {
        const { items } = this.state;

        this.setState({
            items: items.filter(item => id !== item.id),
        });
    };

    handlerPause = id => {
        const { items } = this.state;

        this.setState({
            items: items.map(item => {
                if (item.id === id) {
                    return { ...item, pause: !item.pause };
                }
                return item;
            }),
        });
    };

    tick = () => {
        const dateNow = new Date().getTime();
        const { items } = this.state;

        items.length > 0 &&
            this.setState({
                items: items.map(item => {
                    if (!item.pause) {
                        return {
                            ...item,
                            seconds: item.seconds + Math.round((dateNow - item.currentTime) / 1000),
                            currentTime: dateNow,
                        };
                    }
                    return {
                        ...item,
                        seconds:
                            item.seconds +
                            Math.round((dateNow - item.currentTime) / 1000 - (dateNow - item.currentTime) / 1000),
                        currentTime: dateNow,
                    };
                }),
            });
    };

    handlerSubmit = e => {
        e.preventDefault();
        this.addItem();
    };

    render() {
        const { items } = this.state;
        return (
            <>
                <div className="tracker">
                    <a href="/" className="tracker__link">
                        tracker
                    </a>
                    <div className="tracker__content">
                        <Form handlerSubmit={this.handlerSubmit} inputRef={this.inputRef} />
                        <List items={items} handlerPause={this.handlerPause} handlerDelete={this.handlerDelete} />
                    </div>
                </div>
            </>
        );
    }
}

export default App;
