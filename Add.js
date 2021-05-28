import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css';



class Add extends Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.ar.map((item, index) => (
                        <li key={index}>
                            {item}
                            {console.log(this)}
                            <form action="">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    checkbox
                                 </label>
                            </div>
                            <button onClick={this.props.deleteTask.bind(index)}>delete</button>
                            </form>
                        </li>
                    ))}
                </ol>

            </div>
        )
    }
}

export default Add
