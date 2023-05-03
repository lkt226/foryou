import GroupTasks from "@/components/molecules/group-tasks"
import { useState } from 'react'

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
  const [editable, setEditable] = useState(false)

  const todayTasksClass = [
    editable ? 'editable': ''
  ]

  const handleChangeEditClass = () => {
    setEditable(!editable)
  }

  return (
    <div id="routine" className={todayTasksClass}>
      <header className="title">
        <h2>Tarefas do dia</h2>
        <button id="tasks-editable" onClick={handleChangeEditClass}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </header>
      <ul>
        <GroupTasks
          title="Manha"
          tasks={tasks}
        />
      </ul>
      <button className="default_button" id="tasks-save" onClick={handleChangeEditClass}>
        Salvar
      </button>
    </div>
  )
}