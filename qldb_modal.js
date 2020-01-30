import { Modal, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'
import ReactDOM from 'react-dom';
let service_data = require('./qldb_service_details.json')
class Qldb_Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = { visible: true }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
    this.props.modelAction();
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
    this.props.modelAction();

  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
    this.props.modelAction();
  };

  render() {
    console.log(this.props.name);
    return (
      <div>
        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button> */}
        <Modal

          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          //onCancel={this.handleCancel.bind(this)}
          //onOk={this.handleOk.bind(this)}
          //onCancel={this.hideModal}
          //onCancel={this.setState({showModal:false})}
          //onCancel={()=>this.handleCancel}  
          onCancel={this.handleCancel}
        >

          <p id="pm1">Device_Serial_No:{this.props.source.Device_Serial_No}</p>
          <p id="pm1">IP_Address:{this.props.source.IP_Address}</p>

        </Modal>
      </div>
    );
  }
}
//ReactDOM.render(<Qldb_Modal/>, mountNode);
export default Qldb_Modal;  
