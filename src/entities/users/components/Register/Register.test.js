import { render, screen } from '@testing-library/react'
import Login from './Register'

describe('<Login/>', () => {
  describe('HTML', () => {
    it('renders a form', () => {
      render(<Login />)
      const form = screen.getByRole('form')
      const username = screen.getByRole('textbox', { name: 'Username' })
      const password = screen.getByTestId('password-input')
      const button = screen.getByRole('button', { name: 'Register' })
      const errorContainer = screen.getByRole('alert')
      const errorMessage = screen.queryByTestId('error-message')

      expect(form).toBeVisible()
      expect(username).toBeVisible()
      expect(password).toBeVisible()
      expect(button).toBeVisible()
      expect(errorContainer).toBeVisible()
      expect(errorMessage).toBeNull()
    })
  })
})
