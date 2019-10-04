import Player from '../Player';
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let newPlayer = { name: 'Alex Morgan', id: '1', country: 'United States', searches:'100' }

let tools;

beforeEach(()=>{
    rtl.cleanup();
    tools = rtl.render(<Player player={newPlayer}/>)
})

describe('Player Component', () =>{
    it('contains a name', ()=>{
        const elementWithName = tools.queryByText(/Name/);
        expect(elementWithName).toBeInTheDocument();
    });
    it('contains a country', ()=>{
      const elementWithCountry = tools.queryByText(/Country/);
      expect(elementWithCountry).toBeInTheDocument();
    });
    it('contains number of searches', ()=>{
      const elementWithSearches = tools.queryByText(/Searches/);
      expect(elementWithSearches).toBeInTheDocument();
    });
});