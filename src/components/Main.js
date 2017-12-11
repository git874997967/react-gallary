require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

/*let yeomanImage = require('../images/yeoman.png');
* ../images/1.gif*/
 let imageData=require('../data/imageData.json');
 /*imageData.each(function(){
   return this.fileName="../images"+this.fileName;
 });*/
let ImageFigure=React.createClass({
  render:function(){
    return(
      <figure>
    <img src={this.props.data.fileName}  width={this.props.data.width}
         height={this.props.data.height}
         alt={this.props.data.fileTitle}/>
        <figcaption>
          <h4>
            {this.props.data.fileTitle}
          </h4>
        </figcaption>
    </figure>);
  }
  });

let AppComponent =React.createClass({
  render:function() {
    /*聲明兩個組件*/
    let  imgFigures=[];
    /*遍歷 我們的數據 進行封裝和渲染*/
    imageData.forEach(function (value) {
      /*ImageFigure 进行二次封装   封装好的组件放入数组中*/
    imgFigures.push(<ImageFigure data={value}/>);
    });
    return (
     <section className='stage'>
       <section className='img-sec'>
         {imgFigures}
       </section>
       <nav className='controller-nav'>

       </nav>
     </section>
    );
  }
});

AppComponent.defaultProps = {
};
ImageFigure.defaultProps = {
};
export default AppComponent;

