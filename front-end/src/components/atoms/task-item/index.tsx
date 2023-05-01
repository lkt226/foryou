interface TaskItemProp {
  name: string,
  color: string,
  category: string,
  start_date: Date,
  end_date: Date,
  stage: string,
}

const extractTime = (date: Date) => (
  date.toLocaleString('pt-br', { 
    hour: '2-digit',
    minute: '2-digit'
  })
)

export default function TaskItem ({ name, start_date, end_date, color  }: TaskItemProp) {
  const date = `${extractTime(start_date)} ${start_date&&end_date   ? '|': ''} ${extractTime(end_date)}`
  
  return (
    <li className="_task_item" style={{'--color': color}}>
      <button>
        <small className="_date">
          { date }
        </small>
        { date&&name ? ' - ': '' }
        <span className="_name">
          { name }
        </span>
      </button>

      <span className="_icon">
        😁
      </span>
    </li>
  )
}