import React, { useState } from 'react';

interface ExpenseFormProps {
  onSubmit: (data: { title: string; amount: number; type: string }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<string>(''); 
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();


    const numericAmount = parseFloat(amount);

    if (title && numericAmount > 0) {
      onSubmit({
        title,
        amount: numericAmount,
        type,
      });


      setTitle('');
      setAmount('');
      setType('expense');
    } else {
      alert('Please provide valid details.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-md shadow-md">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter title"
          required
        />
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*(\.\d*)?$/.test(value)) {
           
              setAmount(value);
            }
          }}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter amount"
          required
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value as 'income' | 'expense')}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default ExpenseForm;
