import React from "react";
class Customer extends React.Component{//실제 출력 내용->DB에서 가져와서 사용
    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
export default Customer;