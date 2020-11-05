import React, { Component } from 'react'
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

export class TaskList extends Component {

    onOpenForm = () => {
        this.props.openForm();
    };

    render() {
        let { tasks, isDisplayForm } = this.props;
        let element = tasks.map((tasks, index)=>{
            return <TaskItem key={index} data={tasks} index={index}></TaskItem>
        });
        
        return (
            <div className={isDisplayForm == true ? 'col-md-8 ml-4' : 'col-md-12 ml-4'}>
                <div className="row" style={{border: '1px solid gray', borderRadius: '10px'}}>
                    <div className="col-md-12 p-3">
                        <button onClick={this.onOpenForm} type="button" className="btn btn-outline-primary">Thêm công việc</button>
                    </div>
                    <div className="col-md-12">
                    <div className="row p-3">
                        <div className="col-md-7 p-0">
                            <div className="form-group">
                                <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
                            </div>
                        </div>
                        <div className="col-md-3 p-0">
                            <button type="button" className="btn btn-outline-primary">Tìm kiếm</button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-outline-primary">Sắp xếp</button>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row p-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Công việc</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {element}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        isDisplayForm: state.isDisplayForm
    }
}
const mapDishPathToProps = (dishpath, props) => {
    return {
        openForm : () => {
            dishpath(actions.openForm());
        }
    }
}

export default connect(mapStateToProps, mapDishPathToProps)(TaskList)
