import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as UserActions from "../redux/actions/users-actions"
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Modal, Form , Button , Input  ,message} from 'antd';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
class UserUpdate extends Component {
 constructor(props){
     super(props)
     this.state={
         userdata :[],
         loading: true,
     }
  
    }
    onFinish = values => {
      if (this.props && this.props.match && this.props.match.params.id){
        values.id = +this.props.match.params.id;
        this.props.insertUpdateUser(values).then(resp=>{
          if (resp){
            message.info('User updated successfully');
            this.props.history.push('/')
          }
        }) 
      }else {
        values.id=0;
        this.props.insertUpdateUser(values).then(resp=>{
          if (resp){
            message.info('User added successfully');
            this.props.history.push('/')
          }
        }) 
      }
    };
    componentDidMount(){
      if (this.props && this.props.match && this.props.match.params.id){
        this.props.getUsers(this.props.match.params.id).then(user=>{
          if (user && user.message.length>0){
            let data =user.message[0][0]
            this.setState(data) 
        
          }
        })
      }
    }
    back(){
      this.props.history.push('/');
      
    }
    render(){
      
      return(<div style={{marginLeft:"20%",marginRight:"20%"}}>
        {this.state.name ? <h1>Edit User</h1>:<h1>Add User</h1>}
        { this.state.name || (this.props && this.props.match && this.props.match.params.id === undefined)?
          <Form {...layout} 
          initialValues={{
           name: this.state.name,
           address: this.state.address,
           city: this.state.city,
           phone: this.state.phone,

           }}
 
          onFinish={this.onFinish} validateMessages={validateMessages}>
       <Form.Item name="name" label="Name" rules={[{ required: true }]}>
         <Input />
       </Form.Item>
       <Form.Item name="address" label="Address" rules={[{ required: true }]}>
         <Input.TextArea />
       </Form.Item>
       <Form.Item name="city" label="City" rules={[{ required: true }]}>
         <Input />
       </Form.Item>
       <Form.Item name="phone" label="Phone Number"rules={[{ required: true }]} >
       <Input />
       </Form.Item>
       
      
       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
         <Button type="primary" htmlType="submit">
           Submit
         </Button>
         <Button style={{marginLeft:"30px"}} type="primary" onClick={()=>this.back()}>
           Back
         </Button>
       </Form.Item>
     </Form>
      :""}
         </div>)
    }
  }
UserUpdate.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...UserActions }, dispatch);
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { forwardRef: true }
  )(UserUpdate)
);
