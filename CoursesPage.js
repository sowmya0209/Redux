import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from './actions/courseActions';

class CoursesPage extends Component {

    onClickSave(event) {
        this.props.createCourse({ title: this.refs.title.value });
        this.refs.title.value = ''
        //this.state.course.title='';
    }
    onClickRemove(event) {
        this.props.removeCourse({ title: this.refs.title.value });
        this.refs.title.value = ''
        //this.state.course.title='';
    }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>
    }
    render() {
        return (
            <div>
                <h1> Course Page </h1>
                {this.props.courses.map((course, index) => <div key={index}>{course.title}</div>)}
                <h2> Add Course </h2>
                <input type="text" ref="title"
                    value={this.title} />
                <input type="submit" value="Save" onClick={() => this.onClickSave()} />
                <input type="button" value="Remove" onClick={() => this.onClickRemove()} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course)),
        removeCourse: course => dispatch(courseActions.removeCourse(course))
    }
}
//takes the slice of the component with this class object
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
