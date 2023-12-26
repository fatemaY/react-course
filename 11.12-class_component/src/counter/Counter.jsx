import React from 'react';

class Counter extends React.Component {
    // {counter, name} = this.props;
    constructor(props){
        super(props)
        this.state = {
            count:0,
          
        }
    }
    

    componentDidMount(){
        console.log('component has been created');
        // const fetchData = async () => {
        //     try {
        //       const response = await axios.get(url + '/shoes');
        //       this.setState({data: response.data});
        //     } catch (error) {
        //       console.error('Error fetching data:', error.message);
        //     }
        // }
        // fetchData()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state.count !== prevState.count) {
    //         console.log('ComponentDidUpdate: Component has been updated');
    //         console.log('previous state:', prevState)
    //         console.log('current state:', this.state)
    //         this.setState({count: prevState.count + 1})
    //     }
       
    // }

    handleIncrement = ()=>{
        this.setState((prevState)=> ({
            count: prevState.count + 1,
        }))
    }

    handledecrement= ()=>{
        this.setState((prevState)=> ({
            count: prevState.count - 1,
        }))
    }
    
    render(){
        console.log(this.state)
        
        return <>
         <h1>20.1-Counter</h1>

        <h2>Class component the count is: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handledecrement}>decrement</button>
        </>
    }
}

export default Counter;