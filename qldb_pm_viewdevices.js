import React from 'react';
//import x from './pm_apigatewaydata';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
//import {data1} from './pm_gatewayresponse.js'
import img1 from './qldb_assets/router1.jpg' 
import img2 from './qldb_assets/router2.jpg'
import img3 from './qldb_assets/router3.jpg'
import img4 from './qldb_assets/router4.jpg'
import img5 from './qldb_assets/router5.jpg'
import img6 from './qldb_assets/router6.jpg'
import { Component } from "react";
import {Card,Col,Row,Icon} from 'antd'
import Qldb_Modal from './qldb_modal';
let data = require('./qldb_pm.json')
class Pm_viewdevices extends React.Component
{        
  
    constructor(props)
    {
        super(props)
        this.state={
          showModal:false,
          response:[],
          information:{}
        }
    }//constructor closed


    modalActions=()=>{
      this.setState({showModal:!this.state.showModal});
    }
    componentDidMount() {
     const that=this;
     let value=[];
      fetch('https://pf1g1lmjel.execute-api.us-east-1.amazonaws.com/dev/qldb-resource')
      .then((response) => { 
        return response.clone().json();
      })
      .then(json =>{
      that.setState({response:json})
      
     }).
      then(jsonStr=>{
      //  that.setState({response:jsonStr})
        console.log(that.state);
        
      })
    }
    render(){
      
     
 
       return(
            
            <div style={{ background: '#ECECEC', padding: '30px'}}>
            
    <Row gutter={16}>
      <Col span={8}>
        <Card title={data[0].Model_No} extra={<Icon type="more" onClick={()=>{this.setState({showModal:true,information:this.state.response[0]})}} />} bordered={false}>
        {this.state.showModal==true && <Qldb_Modal source={this.state.information} modelAction={this.modalActions}></Qldb_Modal>}
          <img src={img1} alt="image 1" width="100px" height="100px"/>
          <br></br>Hash:{data[0].hash}
          <div className="id1">
          
        <br></br>Device_Serial_No : {data[0].Device_Serial_No} 
        <br></br>IP_Address : {data[0].IP_Address}
        <br></br>Product_Type : {data[0].Product_Type}
        <br></br>Brand_Name : {data[0].Brand_Name}
        <br></br>Network_Device_Status: {data[0].Network_Device_Status}
        <br></br>Domain_Name: {data[0].Domain_Name}
        <br></br>Chipset : {data[0]. Chipset}

        </div>
    
        </Card>
      </Col>
      <Col span={8}>
        <Card title={data[1].Model_No}  extra={<Icon type="more" onClick={()=>{this.setState({showModal:true,information:this.state.response[1]});}} />} bordered={false}>
          {/* {this.state.showModal==true && <Qldb_Modal ></Qldb_Modal>} */}
          <img src={img5} alt="image 1" width="100px" height="100px"/>
          <br></br>Hash:{data[1].hash}
          <div className="id1">
        <br></br>Device_Serial_No : {data[1].Device_Serial_No}<br></br> 
        IP_Address : {data[1].IP_Address}
        <br></br>Brand_Name : {data[1]. Brand_Name}
    
        <br></br>Network_Device_Status: {data[1].Network_Device_Status}
        <br></br>Domain_Name: {data[1].Domain_Name}
        <br></br>Chipset : {data[1]. Chipset}
        
        </div>    
        </Card>

      </Col>
      <Col span={8}>
      <Card title={data[2].Model_No}  extra={<Icon type="more" onClick={()=>{this.setState({showModal:true,information:this.state.response[2]})}} />} bordered={false}>
          {/* {this.state.showModal==true && <Qldb_Modal ></Qldb_Modal>} */}
          <img src={img6} alt="image 1" width="100px" height="100px"/>
          <br></br>Hash:{data[2].hash}
          <div className="id1">
        <br></br>Device_Serial_No : {data[2].Device_Serial_No}<br></br> 
        IP_Address : {data[2].IP_Address}
        <br></br>Brand_Name : {data[2]. Brand_Name}
       
        <br></br>Network_Device_Status: {data[2].Network_Device_Status}
        <br></br>Domain_Name: {data[2].Domain_Name}
        <br></br>Chipset : {data[2]. Chipset}
        
        </div>
    
        </Card>
      </Col>
    </Row>
  <br>
  </br>
  <Row gutter={16}>
    <Col span={8}>
    <Card title={data[3].Model_No}  extra={<Icon type="more" onClick={()=>{this.setState({showModal:true,information:this.state.response[3]})}} />} bordered={false}>
          {/* {this.state.showModal==true && <Qldb_Modal ></Qldb_Modal>} */}
          <img src={img4} alt="image 1" width="100px" height="100px"/>
          <br></br>Hash:{data[3].hash}
          <div className="id1">
            
        <br></br>Device_Serial_No : {data[3].Device_Serial_No}<br></br> 
        IP_Address : {data[3].IP_Address}
        <br></br>Brand_Name : {data[3]. Brand_Name}
       
        <br></br>Network_Device_Status: {data[3].Network_Device_Status}
        <br></br>Domain_Name: {data[3].Domain_Name}
        <br></br>Chipset : {data[3]. Chipset}
        
        </div>
    
        </Card>
    </Col>
    <Col span={8}>
    <Card title={data[4].Model_No}  extra={<Icon type="more" onClick={()=>{this.setState({showModal:true,information:this.state.response[4]})}} />} bordered={false}>
          {/* {this.state.showModal==true && <Qldb_Modal ></Qldb_Modal>} */}
          <img src={img3} alt="image 1" width="100px" height="100px"/>
          <br></br>Hash:{data[4].hash}
          <div className="id1">
        <br></br>Device_Serial_No : {data[4].Device_Serial_No}<br></br> 
        IP_Address : {data[4].IP_Address}
        <br></br>Brand_Name : {data[4]. Brand_Name}
       
        <br></br>Network_Device_Status: {data[4].Network_Device_Status}
        <br></br>Domain_Name: {data[4].Domain_Name}
        <br></br>Chipset : {data[4]. Chipset}
        
        </div>
    
        </Card>
    </Col>
    <Col span={8}>
    <Card title={data[5].Model_No}  extra={<Icon type="more" onClick={()=>{this.setState({showModal:true,information:this.state.response[5]})}} />} bordered={false}>
          {/* {this.state.showModal==true && <Qldb_Modal ></Qldb_Modal>} */}
          <img src={img2} alt="image 1" width="100px" height="100px"/>
          <br></br>Hash:{data[5].hash}
          <div className="id1">
        <br></br>Device_Serial_No : {data[5].Device_Serial_No}<br></br> 
        IP_Address : {data[5].IP_Address}
        <br></br>Brand_Name : {data[5]. Brand_Name}
   
        <br></br>Network_Device_Status: {data[5].Network_Device_Status}
        <br></br>Domain_Name: {data[5].Domain_Name}
        <br></br>Chipset : {data[5]. Chipset}
        
        </div>
    
        </Card>
    </Col>
  </Row>
</div>
        );
    }
}
export default Pm_viewdevices