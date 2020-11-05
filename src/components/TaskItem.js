import React, { Component } from 'react'

export class TaskItem extends Component {
    render() {
        let {data} = this.props;
        return (
            <tr>
                <th scope="row">{this.props.index +  1}</th>
                <td>{data.name}</td>
                <td>{data.status == 'true' ? 'đã làm' :  'chưa làm'}</td>
                <td>
                    <button type="button" className="mr-3 btn btn-outline-warning">Sửa</button>
                    <button type="button" className="btn btn-outline-danger">Xóa</button>
                </td>
            </tr>
        )
    }
}

export default TaskItem
