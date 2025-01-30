// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.

export default function TaskForm() {
    handleSubmit = (event) =>{
        event.preventDefault();
        const task = {
            title: event.target.title.value,
            dueDate: event.target.duedate.value,
            priority: event.target.priority.value,
            status: event.target.status.value
            };
            console.log(task);
            }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });


        }
            return (
                <div className="Task From" >
                    <div>
                    <form onSubmit={handleSubmit}></form>
                    <label>Task Title:</label>
                    <input type="text" name="title"/>
                    <label>Due Date:</label>
                    <input type="date" name="duedate"/>
                    <lable>Priority</lable>
                    <input type="text" name="Priyority"/>
                    <label>Status:</label>
                    <select name="status"></select>
                    <button type="submit">Submit</button>
                    </div>

               
                </div>
            )
    

};


