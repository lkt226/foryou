import TaskItem from "@/components/atoms/task-item"
import { useState } from "react"

export default function GroupTasks ({ title, tasks }) {
  const [active, setActive] = useState(false)

  const groupTasksClass = [
    active ? 'active': ''
  ]

  const handleChangeEditClass = () => {
    setActive(!active)
  }

  return (
    <div id="group-tasks" className={groupTasksClass}>
      <h3 onClick={handleChangeEditClass}>
        { title }
      </h3>
      <ol>
        {
          tasks.map((task) => (
            <TaskItem
              key={task.uid}
              name={task.name}
              color={task.color}
              category={task.category}
              start_date={task.start_date}
              end_date={task.end_date}
              stage={task.stage}
            />
          ))
        }
      </ol>
    </div>
  )
}