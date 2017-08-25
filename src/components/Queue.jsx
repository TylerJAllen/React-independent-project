import React from 'react';
import ItemList from './ItemList';
import NewItemControl from './NewItemControl';
import styles from '../styles/App.css';

class Queue extends React.Component{
  constructor(props){
    super(props);
    this.state={
      masterItemList: []
    };
    this.addNewItemToList = this.addNewItemToList.bind(this);
    this.updateItemTimeRemaining = this.updateItemTimeRemaining.bind(this);
  }

  componentDidMount() {
   this.timeRemainingChecker = setInterval(() =>
     this.updateItemTimeRemaining(),
     1000
   );
 }

  addNewItemToList(newItem){
   let newMasterItemList = this.state.masterItemList.slice();
   newMasterItemList.push(newItem);
   this.setState({masterItemList: newMasterItemList});
   console.log(this.state.masterItemList);
 }

 updateItemTimeRemaining() {
   let newMasterItemList = this.state.masterItemList.slice();
   newMasterItemList.forEach((item) =>
     item.setTimeRemaining()
   );
   this.setState({masterItemList:newMasterItemList})
 }

  render(){
    return (
      <div className={styles}>
        <NewItemControl onNewItemCreation= {this.addNewItemToList}/>
        <ItemList itemList={this.state.masterItemList}/>
      </div>
    );
  }
}

export default Queue;
