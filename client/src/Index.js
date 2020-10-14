import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';

function App() {
  return (
    <div>
      <h1>Hello world!!</h1>
      This is boiler plate of React with webpack
      <img src="https://secure.img1-fg.wfcdn.com/im/98270403/resize-h800-w800%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
