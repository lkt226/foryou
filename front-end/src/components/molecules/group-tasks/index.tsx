import TaskItem from "@/components/atoms/task-item"

export default function GroupTasks ({ title, tasks }) {
  const handleChangeClass = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const parent = target.parentElement
    parent.classList.toggle('active')
  }

  return (
    <div id="group-tasks">
      <h3 onClick={(e) => handleChangeClass(e)}>
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