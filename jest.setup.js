// Polyfill "window.fetch"
import 'whatwg-fetch'

import '@testing-library/jest-dom'

import { server } from './src/_mocks_/server'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
