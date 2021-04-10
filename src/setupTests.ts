// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const CONSOLE_FAIL_TYPES = ['error', 'warn']

CONSOLE_FAIL_TYPES.forEach((type) => {
  (console as any)[type] = (message: string) => {
    throw new Error(
      `Failing due to console.${type} while running test!\n\n${message}`,
    )
  }
})

beforeEach(() => {
  expect.hasAssertions()
})
