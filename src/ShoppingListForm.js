import React, {Component} from "react";
class ShoppingListForm extends Component{
    constructor(props){
        super(props);
        this.state = {name: "", qty: ""}
    }

    handleChange = (evnt)=> {
        this.setState({
            name: evnt.target.value,

        })

    }

    handleChangeQty = (evnt)=>{
        this.setState({
            qty: evnt.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addItem(this.state); 
        // this.setState({name: "", qty: ""});
    }
    render(){
        return(
            <div>
                <h1>
                    ShoppinglistForm
                </h1>
                <form onSubmit = {this.handleSubmit}>
                    <label>Name:</label>
                    <input
                        value = {this.state.name}
                        onChange = {this.handleChange} 
                    />
                    <label>Qty:</label>
                    <input 
                        value = {this.state.qty}
                        onChange = {this.handleChangeQty} 
                    />
                </form>
                <button>Submit</button>
            </div>
        )
    }
}
export default ShoppingListForm;