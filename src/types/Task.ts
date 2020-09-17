export type Task = {
  id: string;
  minutes: number;
  title: string;
};

export type TasksPack = {
  income: Task[],
  expenses: Task[],
  savings: Task[],
  debt: Task[],
  goals: Task[],
  emergency: Task[]
};