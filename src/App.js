import React from 'react'
import './App.css';
import Fruits from './Fruits';
import './Fruits.css'


const data =[
  {id:1, img:'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
  title:'Apple',uom:'02',size:'0.2', unit:'$8.99', total:'$17.23'},
  {id:2, img:'https://cdn.store-factory.com/www.culinaide.com/content/product_1256642b.jpg?v=1596717830',
  title:'Apricot',uom:'02',size:'0.2', unit:'$8.99', total:'$17.23'},
  {id:3, img:'https://grocerondoor.com/wp-content/uploads/2020/10/good-reasons-to-eat-a-banana-today.jpg',
  title:'Banana',uom:'02',size:'0.2', unit:'$8.99', total:'$17.23'},
  {id:4, img:'https://produits.bienmanger.com/34089-0w600h600_Organic_Fresh_Kiwi.jpg',
  title:'Kiwi',uom:'02',size:'0.2', unit:'$8.99', total:'$17.23'},
  {id:5, img:'https://www.news-medical.net/image.axd?picture=2020%2F12%2Fshutterstock_1291478515.jpg',
  title:'Pomegranate',uom:'02',size:'0.2', unit:'$8.99', total:'$17.23'},
  {id:6, img:'https://d2j6dbq0eux0bg.cloudfront.net/default-store/00005-sq.jpg',
  title:'Srawberry',uom:'02',size:'0.2', unit:'$8.99', total:'$17.23'},
  {id:7, img:'https://www.collinsdictionary.com/images/full/pineapple_124985672.jpg',
  title:'Pineapple',uom:'02',size:'0.2', unit:'$8.99', total:'$17.23'},
  {id:8, img:'https://www.luluhypermarket.com/medias/18993-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjc2MTV8aW1hZ2UvanBlZ3xoYjcvaDY4LzExOTE2MjMxOTAxMjE0LzE4OTkzLTAxLmpwZ18xMjAwV3gxMjAwSHxlZGI5ZGFjMDM2ZGUzNmI5ZGJiYzkzMTEwYTliMmQ0ZjIyM2E5OTI5Y2RjYTU1NDg4MDRmNjBhMjAyN2Y4NmQ3',
  title:'Orenge',uom:'02',size:'0.2', unit:'$8.99', total:'$17.23'},

]

class App extends React.Component{
  constructor(){
    super()
    this.state={
      count :0
    }
    this.onChnage = onChnage = () => {
      this.setState({
        count: this.count  + 1
      })
    }
  }
  render(){
    return (
      <div className="App">
      {
        data.map((value,index)=>{
          return(
            <div key={index}> 
              <h1>Total Nomber of orders:{this.state.count}</h1>
              <div className='container'>
            <div className='rasm'>
                <img src={value.img} width='100%' height='100%'></img>
            </div>
            <div className='rasm-yoni'>
                <div className='rasm-yoni-1'>
                    <h1>{value.title}</h1>
                    <button className='button' onClick={this.onChnage()}  >Add</button>
                </div>
                <div className='rasm-yoni-2'>
                    <div className='data'>
                        <p className='title'>UOM</p>
                        <p className='value'>{value.uom}</p>
                    </div>
                    <div className='data'>
                        <p className='title'>Pack size</p>
                        <p className='value'>{value.size}</p>
                    </div>
                    <div className='data'>
                        <p className='title'>Per Unit</p>
                        <p className='value'>{value.unit}</p>
                    </div>
                    <div className='data'>
                        <p className='title'>Total</p>
                        <p className='value'>{value.total}</p>
                    </div>
                </div>
            </div>
        </div>
              {/* <Fruits data={value} count={this.state.count} setState={this.setState}/> */}
            </div>
          )
        })
      }
    </div>
  );
}
}

export default App;
