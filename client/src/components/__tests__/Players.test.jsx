import Players from '../Players';
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios', () => {
    return {
      get: () => {
        return Promise.resolve({
          data: [
            { name: 'Alex Morgan', id: '1', country: 'United States', searches:'100' },
          ],
        });
      },
    };
  });

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Players/>);
});

describe('Players Component', () => {
    it('runs', () => {
        tools.debug();
      });
});
