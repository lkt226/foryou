import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './index';

describe('Home', () => {
  // Renderiza o Header
  it('renders a heading', () => {
    render(
      <Home />
    )
    const heading = screen.getByRole('heading', { name: /ForYou/i });
    expect(heading).toBeInTheDocument();
  })

  // Renderiza uma lista de tarefas
  it('renders a list of tasks', () => {
    render(
      <Home />
    )

    const tasks = screen.getAllByRole('listitem');
    expect(tasks).toHaveLength(1);
  })

  // Renderiza uma tarefa
  it('renders a task', () => {
    render(
      <Home />
    )

    const task = screen.getByText(/Task 1/i);
    expect(task).toBeInTheDocument();
  })
});