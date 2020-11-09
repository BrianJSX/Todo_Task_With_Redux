import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/index';

export class TaskItem extends Component {

    onUpdateTask = () => {
        this.props.onUpdate(this.props.data.id);
    }

    onDestroyTask = () => {
        this.props.onDestroy(this.props.data.id);
    }

    render() {
        let {data} = this.props;
        return (
            <tr>
                <th scope="row">{this.props.index +  1}</th>
                <td>{data.name}</td>
                <td>
                   <span onClick={this.onUpdateTask} className={data.status != false ? "badge badge-success"  : "badge badge-danger" }>
                       {data.status !=  false ? "Đã làm" : "Chưa làm" }
                   </span>
                </td>
                <td>
                    <button onClick={this.onUpdateTask} type="button" className="mr-3 btn btn-outline-warning">Sửa</button>
                    <button onClick={this.onDestroyTask} type="button" className="btn btn-outline-danger">Xóa</button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDishpathToProps = (dispath, props) => {
    return {
        onDestroy: (id) => {
            dispath(actions.destroyTask(id));
        },
        onUpdate: (id) => {
            dispath(actions.updateTask(id));
        }
    }
}

export default connect(mapStateToProps, mapDishpathToProps)(TaskItem)
