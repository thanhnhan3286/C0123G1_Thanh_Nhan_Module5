import {Component} from "react";
import './StudentInfoComponent.css'

export class StudentInfoComponent extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    id: 1,
                    name: 'Do Thanh Nhan',
                    age: 23,
                    address: 'Hue'
                },
                {
                    id: 2,
                    name: 'Hnh Duc Dinh',
                    age: 24,
                    address: 'Quang Nam'
                }
            ]

        }
    }

    render() {
        return (
            <>
                <h1>Students</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    {this.state.studentList.map((student, index) => (
                        <tbody>
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            </>
        )
    };
}

export default StudentInfoComponent;