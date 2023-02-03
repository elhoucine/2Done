import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Input} from './Input'

describe('<Input/>', () => {
  describe('HTML', () => {
    it('renders a form', () => {
      const onChange = jest.fn()
      render(<Input type='text' name='myInput' id='myInput' title='myInput' value='myInput' onChange={onChange} />)

      const input = screen.getByRole('textbox', { name: 'myInput'})
      expect(input).toBeVisible()
    })
  })

  describe('Events', () => {
    it('fires onChange', async () => {
      const user = userEvent.setup()
      const onChange = jest.fn()
      render(<Input type='text' name='myInput' id='myInput' title='myInput' value='myInput' onChange={onChange} />)

      const input = screen.getByRole('textbox', { name: 'myInput' })
      await user.type(input, 'hellow world!')

      expect(onChange).toBeCalledTimes(13)
    })
  })
})
