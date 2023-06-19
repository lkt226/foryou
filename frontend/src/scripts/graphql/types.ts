export type RecurrenceItem = {
  startDate: string;
  estimatedTime: string;
  completed: string;
}

export type Task = {
  id: string;
  parentId: string;
  name: string;
  description: string;
  estimatedTime: number;
  recurrence: Array<RecurrenceItem>;
}

export type Project = {
  id: string;
  userId: string;
  name: string;
  description: string;
  category: string;
  tasks: Array<Task>;
}

export type User = {
  id: string;
  username: string;
  email: string;
  projects: Array<Project>;
}