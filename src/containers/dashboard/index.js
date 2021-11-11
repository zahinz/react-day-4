import React from "react";
import TodoItem from "../../components/todoItem";
import { SiReact, SiTailwindcss } from "react-icons/si";

class Dashboard extends React.Component{

    // primitive way to do binding
    constructor(props) {
        super(props)

        // ? Bind
        this.addNew = this.addNew.bind(this)

        // ? State
        this.state = {
            items: [],
        }

    }


    deleteItem(e) {
        console.log("I press the deleteItem")
        console.log(e)
        // console.log("");
        const filteredItem = this.state.items.filter((list) => (list.key !== e))
        console.log(filteredItem);
        this.setState({items : filteredItem})

    }



    addNew(e) {
        // ? prevent default refresh state after submit form
        // console.log('Event 1',e.preventDefault);
        e.preventDefault();

        // ? test the addNew() upon clicking the button
        // console.log("hit");

        // ? get the input from _inputElement
        // console.log(this._inputElement);

        // ? get the value from _inputElement
        // console.log(this._inputElement.value);

        if(this._inputElement.value !== "") {
            
            const newItem = {
                title: this._inputElement.value,
                key: Date.now()
            }
            
            // * METHOD 1
            // ? push into the array
            // get the current items and concat the newItem
            // this.setState((prevState) => {
            //     // console.log("Previous State",prevState);
            //     return {items: prevState.items.concat(newItem)}
            // }, () => console.log(this.state.items))

            // * METHOD 1
            // ? push into the array using deconstruct
            // ? ... is a deconstruct ES6 syntax
            this.setState({items: [...this.state.items, newItem]}, () =>
                console.log(this.state.items))
        }

        this._inputElement.value=""


    }
    render() {
        return(
            <div className="w-1/2">
                <form 
                    className="flex w-full mb-5 relative" 
                    onSubmit={this.addNew}>

                    <input 
                        className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg " 
                        type="search" name="search" 
                        placeholder="What do want to do today" 

                        // ? step 1
                        // ref={(a) => console.log(a)}

                        // ? step 2
                        ref={(a) => this._inputElement = a}
                    />

                    <button 
                        // type="button"
                        type="submit" 
                        className="ml-4 px-7 bg-blue-500 rounded-md border-1 border-blue-500 text-white"
                        // onClick={this.addNew}
                    >Pin</button>

                    <div className="absolute -right-1 -top-1 animate-ping bg-yellow-300 rounded-full h-3 w-3"></div>
                
                </form>
                <div className="h-96 overflow-scroll">
                    {this.state.items.map((list) => (
                        <div>
                            <TodoItem
                            key={list.key}
                            todoContent={list.title}
                            id={list.key}
                            click={()=>{this.deleteItem(list.key)}}
                            items={this.state.items}/>
                        </div>
                    ))}
                </div>
                <div className="mt-5 flex flex-col items-center text-gray-600 text-xs font-semibold">
                    <p className="mb-1">A React project using Tailwind CSS</p>
                    <div className="flex justify-between items-center text-2xl text-white mb-2">
                        <div className="p-1 bg-gray-400 rounded-full flex justify-center items-center m-1">< SiReact /></div>
                        <div className="p-1 bg-gray-400 rounded-full flex justify-center items-center m-1">< SiTailwindcss /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard