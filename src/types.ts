export enum TransactionTypes {
  'income',
  'outcome'
}

export interface ICategory {
  id: number
  name: string
}

export interface ITransaction {
  id: number
  type: TransactionTypes
  amount: number
  name: string
  category: ICategory | null
}
