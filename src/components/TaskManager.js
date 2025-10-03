import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredTasks,
  selectFilter,
  setFilter,
  clearCompleted,
} from '../tasksSlice';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './TaskManager.css';

const TaskManager = () => {
  const tasks = useSelector(selectFilteredTasks);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const activeTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="task-manager">
      <AddTask />
      
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </button>
      </div>

      <TaskList tasks={tasks} />

      <div className="task-footer">
        <span>{activeTasksCount} items left</span>
        <button onClick={handleClearCompleted} className="clear-btn">
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TaskManager;