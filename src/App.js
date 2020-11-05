import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let {isDisplayForm} = this.props;
    let element = isDisplayForm == true ? <TaskForm></TaskForm> :  '';

    return (
      <div className="container">
        <div className="row p-5">
            <h1 className="mx-auto">
                Quản lý công việc
            </h1>
        </div>
        <div className="row">
            {element}
            <TaskList></TaskList>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm : state.isDisplayForm
  }
}

export default connect(mapStateToProps)(App)
