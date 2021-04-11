import '@testing-library/jest-dom';

const CONSOLE_FAIL_TYPES = ['error', 'warn'];

CONSOLE_FAIL_TYPES.forEach((type) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  (console as any)[type] = (message: string) => {
    throw new Error(
      `Failing due to console.${type} while running test!\n\n${message}`
    );
  };
});

beforeEach(() => {
  expect.hasAssertions();
});
