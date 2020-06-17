import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as UserActions from "../redux/actions/users-actions"
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Layout,Table , Button, Modal, Tag , Space , Input , Spin ,message} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { EditOutlined, DeleteOutlined, CheckCircleTwoTone } from '@ant-design/icons';

const { confirm } = Modal;

class UserUpdate extends Component {
 constructor(props){
     super(props)
     this.state={
         userdata :[],
         loading: true,
     }
     this.adduser= this.adduser.bind(this);
     this.editItem= this.editItem.bind(this);

 }
  columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'City',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone',
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
            <EditOutlined onClick={() => this.editItem(record.id)}/>
            <DeleteOutlined onClick={() => this.deleteItem(record.id)}/>
      </Space>
    ),
  },
];
editItem(id){
  this.props.history.push("/editUser/" + id)
}
deleteItem(id){
  let self=this;
  confirm({
    title: 'Do you Want to delete this user?',
    icon: <ExclamationCircleOutlined />,
    onOk() {
      self.deleteinfo(id)
    },
    onCancel() {
    },
  });
}
deleteinfo(id){
  this.props.deleteUser(id).then(deleteuser=>{
    if(deleteuser.message.affectedRows===1){
      this.getusers()  

    }
  })
}
componentDidMount(){
  this.getusers()  
}
getusers(){
  this.props.getUsers(0).then(value=>{
    
    if (value){
        this.setState({userdata:value.message[0], loading :false})
    }
})
}
   adduser =()=>{
     this.props.history.push('/addUser')
   }

   
  render() {
    return (
      <Spin spinning={this.state.loading}>
        <div className="App" >
        <Button style={{marginLeft:"90%",marginTop:"10px",marginBottom:"10px"}} type="primary" onClick={()=>this.adduser()}>Add User </Button>

        <Table columns={this.columns} style={{height:"100vx"}} dataSource={this.state.userdata?this.state.userdata:[]} />
      
     </div>
     </Spin>
    );
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
