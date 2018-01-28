import './style/common.css';
import layer from './components/layer/layer';
import $ from 'jquery'

const App = function () {
  console.table(layer());
  let obj = [
    {
      name: 'gc0',
      age: '220'
    },
    {
      name: 'gc1',
      age: '221'
    },
    {
      name: 'gc2',
      age: '222'
    }
  ];
  console.table(obj);
  obj.forEach(function (item,index,array) {
    if(item.name == 'gc0'){
      console.log(item.age);
    }
  });
  $.each(obj,function (index, item) {
    if(item.name == 'gc2'){
      console.log(item.age);
    }
  })
};
new App();