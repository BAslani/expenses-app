import { Expense } from 'components/expenses/ExpenseItem'
import { supabase } from './supabaseClient'
import * as Crypto from 'expo-crypto'

export const fetchExpenses = async () => {
  const { data, error } = await supabase
    .from('expenses')
    .select('*')
    .order('date', { ascending: false })

  if (error) {
    console.error('Error fetching expenses:', error)
    return
  }

  if (!data) {
    console.warn('No expenses found')
    return
  }
  return data as Expense[]
}

export const createExpense = async (expenseData: Omit<Expense, 'id'>) => {
  const newExpense: Expense = {
    id: Crypto.randomUUID(),
    ...expenseData,
  }

  const { error } = await supabase.from('expenses').insert(newExpense).single()

  if (error) {
    console.error('Error adding expense:', error)
    return
  }
}

export const deleteExpenseServer = async (id: string) => {
  const { error } = await supabase.from('expenses').delete().eq('id', id)

  if (error) {
    console.error('Error deleting expense:', error)
    return
  }
}

export const updateExpenseServer = async (expenseData: Expense) => {
  const { data, error } = await supabase
    .from('expenses')
    .update(expenseData)
    .eq('id', expenseData.id)
    .single()

  if (error) {
    console.error('Error updating expense:', error)
    return
  }
}
