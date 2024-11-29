import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

interface Transaction {
  title: string;
  amount: number;
  type: string;
}

function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budget, setBudget] = useState<number>(2000);

  const handleNewTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
    if (transaction.type === 'expense') {
      setBudget(budget - transaction.amount);
    } else {
      setBudget(budget + transaction.amount);
    }
  };

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <p className="text-lg mt-2">Track your income and expenses effectively!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Budget Overview</h2>
          <p className="text-gray-700 text-lg">
            <span className="font-bold">Total Expenses:</span> ${totalExpenses}
          </p>
          <p className="text-gray-700 text-lg mt-2">
            <span className="font-bold">Remaining Budget:</span> ${budget}
          </p>
        </div>

        <ExpenseForm onSubmit={handleNewTransaction} />
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Transactions</h2>
        <ul className="divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <li
              key={index}
              className={`p-4 rounded-md transition-transform transform ${
                transaction.type === 'expense' ? 'bg-red-100' : 'bg-green-100'
              } hover:scale-105 animate-slide-in-up`}
            >
              <span className="font-bold">{transaction.title}</span> - $
              {transaction.amount} ({transaction.type})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
