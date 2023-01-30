export type TodoType = {
  id: string
  value: string
  done: boolean
}

export type TodosType = {
  [key: string]: TodoType
}
