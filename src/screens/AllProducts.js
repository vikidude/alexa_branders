import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Products extends React.Component {

    componentDidMount(){
        console.log(this.props.location.selectedImage)
    }
    render() {
        if(this.props.location.selectedImage === undefined){
            return <Redirect to="/" />
        }
        return (
            <div style={{ display:'flex',justifyContent:'center',marginTop:'4%'}}>
                <img
                    src={this.props.location.selectedImage}
                    height = '350px'
                    width = '330px'
                    alt="selected_pic"
                />
            </div>
        )
    }
}