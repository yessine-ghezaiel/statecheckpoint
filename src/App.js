import React  from 'react'
import './App.css';
import Profile from './Profile';

class App extends  React.Component {
  constructor() {
    super();
    this.state= { 
      profile: 
        {
          fullName : "Edward Christopher Sheeran ",
          bio : "Born in Halifax, West Yorkshire, England on 17 February 1991",
          imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFk3GRBcy9GSIN9ukz8Rv9OPZmx58trKiE6w&usqp=CAU",
          profession: "English singer, songwriter, musician, record producer, actor, and businessman"
          },
      show:true ,
      count:0     
    };
  
  }
  componentDidMount() {
    setInterval(() => {
      if(!this.state.show){
        this.setState({count:this.state.count+1})   
      }else{
        this.setState({count:0})   
     }
    }, 1000);
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={()=>{this.setState({show:!this.state.show})}}>click me  </button>     
          {
                  this.state.show ? <Profile fullName={this.state.profile.fullName} bio={this.state.profile.bio} imgSrc={this.state.profile.imgSrc} profession={this.state.profile.profession} />  : <>{this.state.count}</>
              }   
                 
        </header>
      </div>
      
    );
  }
}


export default App;
