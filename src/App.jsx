import './App.css'

function App() {
  
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto w-full max-w-xl px-4">
      
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
             tasks
          </span>
        </header>

        
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <label
            htmlFor="new-task"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            New task
          </label>
          <div className="flex gap-2">
            <input
              id="new-task"
              type="text"
              placeholder="What needs to be done?"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <button
              type="button"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Task
            </button>
          </div>
        </div>

        
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm transition ${
                task.completed
                  ? 'border-gray-200 bg-gray-50'
                  : 'border-gray-200'
              }`}
            >
              
              <input
                type="checkbox"
                checked={task.completed}
                readOnly
                className="h-5 w-5 shrink-0 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />

            
              <span
                className={`flex-1 text-sm ${
                  task.completed
                    ? 'text-gray-400 line-through'
                    : 'text-gray-800'
                }`}
              >
                {task.text}
              </span>

              
              <div className="flex items-center gap-2">
                {!task.completed && (
                  <button
                    type="button"
                    className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    Complete
                  </button>
                )}
                <button
                  type="button"
                  className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

       
        <div className="hidden rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
          <p className="text-sm font-medium text-gray-500">No tasks yet</p>
          <p className="mt-1 text-xs text-gray-400">
            Add your first task above to get started.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
