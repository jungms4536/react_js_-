import React,{component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Customer from './components/Customer';
//컴포넌트는 보여주기 위한 가장 기본의 단위라고 생각
const customer = {
  'name' : '홍길동',
  'birth' : '971104',
  'gender' : '남성',
  'job' : '대학생'
}
class App extends Component {
  render(){
    return (
      <Customer
      name = {customer.name}
      birth = {customer.birth}
      gender = {customer.gender}
      job = {customer.job}
      />
    );
  }
}

export default App;
