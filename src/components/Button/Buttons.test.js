import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('<Button/>', () => {
  describe('HTML', () => {
    it('renders a form', () => {
      render(<Button value='button'/>)
      const button = screen.getByRole('button')
      expect(button).toBeVisible()
    })
  })

  describe('Events', () => {
    it('fires onClick', async () => {
      const user = userEvent.setup()
      const onClick = jest.fn()
      render(<Button value='click click' onClick={onClick} />)

      const button = screen.getByRole('button')
      await user.click(button)
      expect(onClick).toBeCalledTimes(1)
    })
  })
})
