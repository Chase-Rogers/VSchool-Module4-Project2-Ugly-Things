import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext();

class ThingsContextProvider extends Component {
    state = 
        {
            things: [
                {
                    key: 0,
                    title: "Dark",
                    description: 'something',
                    url: '',
                    hidden: false
                },
                {
                    key: 1,
                    title: "Light",
                    description: 'nothing',
                    url: '',
                    hidden: false
                },
                {
                    key: 2,
                    title: "Gray",
                    description: 'neither',
                    url: '',
                    hidden: false
                }
            ],
        }
    
    addThing = (e) => {
        e.preventDefault();
        const {title, description, url} = e.target;
        this.setState(prevState => {
            return {
                ...prevState,
                things: [...prevState.things,
                    {
                        title: title.value, 
                        description: description.value, 
                        url: url.value,
                        hidden: false
                    }
                ]
            }
        })
        // e.target
    }

    handleEdit = (index) => {
        this.setState(prevState => {
            const things = [...prevState.things];
            things[index] = {
                ...prevState.things[index],
                hidden: !prevState.things[index].hidden
            }
            return {
                things: things
            }
        })
    }

    handleDelete = (index) => {
        this.setState(prevState => {
            return {
                things: prevState.things.filter((_, i) => i !== index)
            }
        });
    }

    handleChange = (e, index) => {
        const {name, value} = e.target;
        console.log(index)
        this.setState(prevState => {
            const things = [...prevState.things];
            things[index] = {
                ...prevState.things[index],
                [name]: value
            }
            return {
                things: things
            }
        })

    }
    
    render() {
        return (
            <Provider value={
                {
                    things: this.state.things,
                    addThing: this.addThing, 
                    handleEdit: this.handleEdit,
                    handleDelete: this.handleDelete,
                    handleChange: this.handleChange
                }
            }>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThingsContextProvider, Consumer as ThingsContextConsumer}
