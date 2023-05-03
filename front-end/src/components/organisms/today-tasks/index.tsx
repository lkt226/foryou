import GroupTasks from "@/components/molecules/group-tasks"

const tasks = [
  {
    uid: 'hu3ijd3ji3ji',
    name: 'Escovar dentes',
    color: '#f32626',
    category: 'work',
    start_date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
    end_date: new Date,
    stage: 'complete',
  }
]

export default function TodayTasks () {
  return (
    <div id="today-tasks">
      <header className="title">
        <h2>Tarefas do dia</h2>
      </header>
      <ul>
        <GroupTasks
          title="Rotina"
          tasks={tasks}
        />
      </ul>
      <ul>
        <GroupTasks
          title="Hoje"
          tasks={tasks}
        />
      </ul>
      <div className="_new_tasks">
        <hr />
        <button id="add-task" className="default_button small">
          Adicionar tarefa
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  )
}