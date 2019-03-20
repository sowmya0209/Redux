import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as courseActions from './actions/courseActions';

class CoursesPage extends Component{
    constructor(){
        super();
        
        this.state={
            course:{title:''} 
        };
        //this.onTitleChange=this.onTitleChange.bind(this);
        //this.onClickSave=this.onClickSave.bind(this);
        //this.onClickRemove=this.onClickRemove.bind(this);
    }
    onTitleChange(event){
        const course=this.state.course;
        course.title=this.refs.title.value;
        this.setState({course:course});
        
    }
    onClickSave(event){
        this.props.createCourse(this.state.course);
      this.setState({course:{title:''}});
       //this.state.course.title='';
    }
    onClickRemove(event){
        this.props.removeCourse(this.state.course);
        //this.state.course.title='';
    this.setState({course:{title:''}});
    }
    courseRow(course,index){
        return <div key={index}>{course.title}</div>
    }
    render(){
        return(
            <div>
                <h1> Course Page </h1>
                    {this.props.courses.map((course,index)=> <div key={index}>{course.title}</div>)}
                    <h2> Add Course </h2>
                    <input type="text" ref="title" onChange={()=>this.onTitleChange()}
                    value={this.state.course.title}/>
                    <input type="submit" value="Save" onClick={()=>this.onClickSave()}/>
                    <input type="button" value="Remove" onClick={()=>this.onClickRemove()}/>
            </div>
        )}
}
function mapStateToProps(state){
    return{
        courses:state.courses
    }
}
function mapDispatchToProps(dispatch){
    return{
        createCourse:course=>dispatch(courseActions.createCourse(course)),
        removeCourse:course=>dispatch(courseActions.removeCourse(course))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
