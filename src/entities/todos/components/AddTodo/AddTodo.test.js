
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodo from './AddTodo'

describe('<AddTodo/>', () => {
    describe('HTML', () => {
        it('renders a form', () => {
            const onSave = jest.fn()
            render(<AddTodo onSave={onSave} />)

            const form = screen.getByRole('form')
            const value = screen.getByRole('textbox', { name: 'addTodoInput' })
            const button = screen.getByRole('button', { name: 'Add' })

            expect(form).toBeVisible();
            expect(value).toBeVisible();
            expect(button).toBeVisible();
          })
    });

    describe('Events', () => {
        it('fire onSave when submitting the form', async () => {
            const user = userEvent.setup()
            const onSave = jest.fn()

            render(<AddTodo onSave={onSave} />)

            const input = screen.getByRole('textbox', { name: 'addTodoInput' })
            const button = screen.getByRole('button', { name: 'Add' })

            await user.type(input, 'first todo')
            await user.click(button)

            expect(onSave).toBeCalledTimes(1);
            expect(onSave).toBeCalledWith('first todo');
        })

        it('empties the input after submit', async () => {
            const user = userEvent.setup()
            const onSave = jest.fn()

            render(<AddTodo onSave={onSave} />)

            const input = screen.getByRole('textbox', { name: 'addTodoInput' })
            const button = screen.getByRole('button', { name: 'Add' })

            await user.type(input, 'first todo')
            await user.click(button)

            expect(screen.queryByDisplayValue('first todo')).toBeNull();
        })
    });
})