import React, { Component } from 'react';
import JSON from '../db.json'
   const styles = {
      mar:{
         marginLeft:'55px',
         width:'100%',
      }
   }
export default class App extends Component {
   state = {
      name: null,
      news: JSON
   }
   showInput = (e) => {
      this.setState({ name: e.target.value })
   }
   showNews = () => {
      console.log(this.state.news)
      return this.state.news.map(item => {
         return (
            <div key={item.id}>{ item.title }</div>
         )
      })
   }
   render() {
      const asd = 'margin: 0 34px'
      return (
         <div style={styles.mar}>
            <input className={asd} type="text" placeholder="enter name" onChange={this.showInput}/>
            <p>{this.state.name}</p>
            {this.showNews()}
         </div>
      );
   }
}