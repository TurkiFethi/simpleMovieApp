import React, { Component } from 'react'
import { Modal, Button } from 'antd';

export default class AddMovie extends Component {
    state = {
         visible: false,
         movieImage:"",
         movieName:"",
         movieDuration:"",
         movieType:""
        
        };

        handleChange=(event)=>{
            this.setState({
                [event.target.name]:event.target.value
            })
        }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

    render() {
        return (
            <div>
            <Button type="primary" onClick={this.showModal}>
              Add Movie
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
            //   onOk={this.handleOk}
            onOk={()=>{this.props.add(this.state);this.handleOk()}}
              onCancel={this.handleCancel}
            >
              
              <input type="text" placeholder="add image" value={this.state.movieImage} onChange={(e)=>this.handleChange(e)} name="movieImage"/>
              <input type="text" placeholder="add name" value={this.state.movieName} onChange={this.handleChange} name="movieName"/>
              <input type="text" placeholder="add duration" value={this.state.movieDuration} onChange={this.handleChange} name="movieDuration"/>
              <input type="text" placeholder="add type" value={this.state.movieType} onChange={this.handleChange} name="movieType"/>
            </Modal>
          </div>
        )
    }
}





