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
      <h2>Tarefas do dia</h2>
      <ul>
        <GroupTasks
          title="Manha"
          tasks={tasks}
        />
      </ul>
    </div>
  )
}