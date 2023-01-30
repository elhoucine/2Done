
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Item from './Item'

const todo = {
    id: '1',
    value: 'my first todo',
    done: false
}

const noop = () => {};

describe('<Item/>', () => {
    describe('HTML', () => {
        it('renders an item', () => {
            render(<Item todo={todo} onDelete={noop} onUpdate={noop} />)

            const li = screen.getByRole('listitem')
            const value = screen.getByText('my first todo', { name: 'Todo' })
            const doneButton = screen.getByRole('button', { name: 'Complete' })
            const updateButton = screen.getByRole('button', { name: 'Update' })
            const delteButton = screen.getByRole('button', { name: 'Delete' })

            expect(li).toBeVisible();
            expect(value).toBeVisible();
            expect(doneButton).toBeVisible();
            expect(updateButton).toBeVisible();
            expect(delteButton).toBeVisible();
          })

          it('hides update on done item', () => {
            render(<Item todo={{...todo, done: true}} onDelete={noop} onUpdate={noop} />)
            const updateButton = screen.queryByRole('button', { name: 'Update' })
            expect(updateButton).toBeNull();
          })
    });

    describe('Events', () => {
        it('switches UI to update mode', async () => {
            const user = userEvent.setup()
            render(<Item todo={todo} onDelete={noop} onUpdate={noop} />)

            const updateButton = screen.getByRole('button', { name: 'Update' })

            await user.click(updateButton)

            const submit = screen.getByRole('button', { name: 'submit' })
            const input = screen.getByRole('textbox', { name: 'todo' })

            expect(input).toBeVisible();
            expect(submit).toBeVisible();
        })

        it('marks todo as done', async () => {
            const user = userEvent.setup()
            const onUpdate = jest.fn()

            render(<Item todo={todo} onDelete={noop} onUpdate={onUpdate} />)

            const doneButton = screen.getByRole('button', { name: 'Complete' })
            
            await user.click(doneButton)

            expect(onUpdate).toBeCalledTimes(1);
            expect(onUpdate).toBeCalledWith({ ...todo, done: true });
        })

        it('updates todo item', async () => {
            const user = userEvent.setup()
            const onUpdate = jest.fn()

            render(<Item todo={todo} onDelete={noop} onUpdate={onUpdate} />)

            const updateButton = screen.getByRole('button', { name: 'Update' })
            
            await user.click(updateButton)
            await user.clear(screen.getByRole('textbox'))
            await user.type(screen.getByRole('textbox', { name: 'todo'}), 'my first todo update')
            await user.click(screen.getByRole('button', { name: 'submit'}))

            expect(onUpdate).toBeCalledTimes(1);
            expect(onUpdate).toBeCalledWith({ ...todo, value: 'my first todo update' });
        })

        it('deletes todo item', async () => {
            const user = userEvent.setup()
            const onDelete = jest.fn()

            render(<Item todo={todo} onDelete={onDelete} onUpdate={noop} />)

            const delteButton = screen.getByRole('button', { name: 'Delete' })
 
            await user.click(delteButton)

            expect(onDelete).toBeCalledTimes(1);
            expect(onDelete).toBeCalledWith('1');
        })
    });
})