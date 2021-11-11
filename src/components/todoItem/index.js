import React from "react";
import { BiTrash } from "react-icons/bi";
import moment from "moment";

class TodoItem extends React.Component {

    render() {
        return(
            <div 
            className="flex justify-between items-center w-full rounded-md bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 hover:border-blue-200 mb-3 transition duration-500 ease-in-out"
            >
                <div>
                    <p className="font-bold text-lg pt-5 px-5 text-gray-600">{this.props.todoContent}</p>
                    <p className="text-sm pb-5 px-5 text-gray-400">Pinned: {moment(this.props.id).fromNow()}</p>
                </div>
                <div 
                className="flex items-center justify-center h-10 w-10 text-lg text-white border-red-500 border-2 rounded bg-red-500 mr-5 cursor-pointer"
                onClick = {this.props.click}
                >
                    <BiTrash />
                </div>
            </div>
        )
    }
}

export default TodoItem