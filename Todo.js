import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./Add"
import './Todo.css';


class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: "",
            date: "",
            desc: "",
            ar:[]
        }
    }
    
    onDeleteHandler = index => {
        const deleteTask= [...this.state.ar];
        deleteTask.splice(index,1);
        this.setState({
            ar:deleteTask
        }); 
    };

    submithandler = e => {
        // alert(`${this.state.task} ${this.state.date} ${this.state.desc}`)
        // this.state.ar.map((todo) =>{
        //     return todo
        // })
        e.preventDefault()
        this.setState({
            task:"",
            date:"",
            desc:"",
            ar:[...this.state.ar,`${this.state.task}  -  ${this.state.date}  -  ${this.state.desc}`]
        })
    }
    render() {
        return (
            <div className="container my-3" id='aj'>
                <form onSubmit={this.submithandler}>
                    <div className="mb-3">
                        
                        <label htmlFor="">Task</label>
                        <input id = "in" type="text" className="form-control" value={this.state.task} onChange={(e) => { this.setState({ task: e.target.value }) }} required />
                    </div>
                    <div className="mb-3">
                        
                        <label htmlFor="">Date of task</label>
                        <input id = "in" type="date" className="form-control" value={this.state.date} onChange={(e) => { this.setState({ date: e.target.value }) }} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Decription</label>
                        <textarea id = "in" name="" id="" cols="" rows="" className="form-control" value={this.state.desc} onChange={(e) => { this.setState({ desc: e.target.value }) }} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
                {/* <ol><li>{this.state.task} {this.state.date}</li></ol> */}
                <div className="container">
                    <h3 className='my-3'>todo list</h3>
                <Add deleteTask ={this.onDeleteHandler} ar = {this.state.ar}/>
                   
                </div>

            </div>
        )
    }
}

export default Todo
