// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

describe('index', () => {
  it('should match snapshot', () => {
    const rootEl = document.createElement('div');
    rootEl.id = 'root';
    document.body.append(rootEl);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (() => import('./index'))();

    expect(document.body).toMatchSnapshot();
  });
});
