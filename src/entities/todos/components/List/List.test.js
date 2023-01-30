
import { render, screen } from '@testing-library/react'
import List from './List'

const todo =  {
    id: '1',
    value: 'my first todo',
    done: false
};

const todos = [{...todo}, {id: '2', value: 'my second todo', done: true}] 

const noop = () => {};

describe('<List/>', () => {
    describe('HTML', () => {
        it('renders tabs', () => {
            render(<List todos={todos} onDelete={noop} onUpdate={noop} />)

            const tabs = screen.getByRole('tablist')
            const allTab = screen.getByRole('tab', { name: 'all' })
            const todoTab = screen.getByRole('tab', { name: 'todo' })
            const doneTab = screen.getByRole('tab', { name: 'done' })

            expect(tabs).toBeVisible();
            expect(allTab).toBeVisible();
            expect(todoTab).toBeVisible();
            expect(doneTab).toBeVisible();
          })

        it('renders a List', () => {
            render(<List todos={todos} onDelete={noop} onUpdate={noop} />)

            const firstTodo = screen.getByText('my first todo');
            const secondTodo = screen.getByText('my second todo');
            const li = screen.getAllByRole('listitem')

            expect(firstTodo).toBeVisible();
            expect(secondTodo).toBeVisible();
            expect(li.length).toBe(2);
          })
    });
})