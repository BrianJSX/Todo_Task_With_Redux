import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/index';
export class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            job_name: '',
            status: false 
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name  = target.name;
        let value = target.value;
        console.log(value);
        this.setState({
            [name] :  value
        });
    }

    onHandle = () => {
        this.props.onAddTask(this.state);
    }

    onCloseForm = () => {
        this.props.closeForm();
    }

    render() {
        return (
            <div className="col-md-3">
                 <div className="row p-2" style={{border: '1px solid gray', borderRadius: '20px'}}>
                    <div className="col-md-12" >
                        <button onClick={this.onCloseForm} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                    </div>
                    <form>
                        <div className="form-group col-md-12">
                            <label for="">Tên công việc</label>
                            <input 
                            type="text" 
                            name='job_name'
                            className="form-control"
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <div className="form-group">
                            <label for="">kích hoạt</label>
                            <select 
                            className="form-control" 
                            name="status" 
                            id=""
                            onChange={this.onChange}
                            >
                                <option value={true}>Đã làm</option>
                                <option value={false}>Chưa làm</option>
                            </select>
                            </div>
                        </div>
                        <div className="col-md-12 p-3">
                            <button onClick={this.onHandle} type="button" class="btn btn-outline-primary mr-2">Lưu</button>
                            <button type="button" class="btn btn-outline-danger">Hủy</button>
                        </div>
                    </form>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispathToProps = (dispatch, props) => {
    return {
        onAddTask: (tasks) => {
            dispatch(actions.addTask(tasks));
        },
        closeForm: () => {
            dispatch(actions.closeForm());
        },
    }
}

export default connect(mapStateToProps,mapDispathToProps)(TaskForm)
