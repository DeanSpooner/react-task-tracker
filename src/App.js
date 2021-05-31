import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting at work",
      day: "June 1st at 4pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Job interview",
      day: "June 2nd at 1pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Meal out",
      day: "June 2nd at 7:30pm",
      reminder: false,
    },
  ]);

  //Add Task:

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task:

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder:

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Dean's Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
