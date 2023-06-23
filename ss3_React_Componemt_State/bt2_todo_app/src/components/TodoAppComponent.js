import "bootstrap/dist/css/bootstrap.css";
import {Component} from "react";

export class TodoAppComponent extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            number: 0,
            todoList: ['An Trua']
        }
    }

    handleInputTodo(value) {
        console.log(this.state.todo)
        this.setState({
            todo: value
        })
    }

    addTodo() {
        this.setState((prev) => (
            {
                todoList: [prev.todo, ...prev.todoList],
                todo: ''
            }
        ))
    }

    render() {
        return (
            <>
                <div className="text-center mt-5">
                    <h1 className="text-body-tertiary">Todo List</h1>
                    <div className="mt-3">
                        <input value={this.state.todo}
                               onChange={(even) => this.handleInputTodo(even.target.value)}/>
                        <button onClick={() => this.addTodo()}>ADD</button>
                        <table className="text-center m-auto mt-2">
                            <thead>
                            <tr>
                                <th>Todo
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.todoList.map((todo, index) => (
                                <tr key={index}>
                                    <td>
                                        {todo}
                                    </td>
                                </tr>
                            ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}