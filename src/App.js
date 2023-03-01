import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Chair Grey',
          img: 'chair-grey.jpg',
          desc: 'Chair grey text lorem',
          category: 'chair',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.jpg',
          desc: 'Table text lorem',
          category: 'table',
          price: '149.00',
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpg',
          desc: 'Sofa text lorem',
          category: 'sofa',
          price: '549.99',
        },
        {
          id: 4,
          title: 'Lamp',
          img: 'wall-light.webp',
          desc: 'Lamp text lorem',
          category: 'light',
          price: '25.00',
        },
        {
          id: 5,
          title: 'Chair White',
          img: 'chair-white.jpg',
          desc: 'Chair white text lorem',
          category: 'chairs',
          price: '55.15',
        },        
      ],
      showFullItem: false,
      fullItem: {},
    }
    
    this.state.currentItems= this.state.items

    this.deleteOrder= this.deleteOrder.bind(this)
    this.addToOrder= this.addToOrder.bind(this)
    this.chooseCategory= this.chooseCategory.bind(this)
    this.onShowItem= this.onShowItem.bind(this)
    
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory= {this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item= {this.state.fullItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if (category===  'all'){
      this.setState({
        currentItems: this.state.items
      })
        return 
    }

    this.setState({
      currentItems: this.state.items.filter(el=> el.category === category )
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el=> el.id !==id)})
  }

  addToOrder(item){
    let isInArray= false
    this.state.orders.forEach(el=> {
      if(el.id === item.id){
        isInArray = true
      }
    })

    if(!isInArray){
      this.setState({orders: [...this.state.orders, item]}, 
        ()=> {console.log(this.state.orders)})
      }
  }
}

export default App;
