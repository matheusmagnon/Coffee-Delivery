import { logRoles, render, screen } from '../../../../test-utils/testing-library-utils';
import { describe, expect, test, it } from "vitest";
import { ListBody } from '.';
import { coffees } from '../../../../data/coffees';
import { CartListContext } from '../../../../context/CartListContext';
import { MemoryRouter } from 'react-router-dom';

const mockCartContextValue = {
    cartList: [],
    addCoffe: vi.fn(),
    deleteCoffe: vi.fn(),
    resetCartList: vi.fn(),
    totalItemsInCart: 0,
  };

describe('ListBody Component', () => {
    it('renders a list of coffee cards', async () => {
        render(
            <CartListContext.Provider value={mockCartContextValue}>
              <MemoryRouter>
                <ListBody />
              </MemoryRouter>
            </CartListContext.Provider>
          );

        coffees.forEach(async coffee => {
        //Check if all the cards are rendered
        const cards = screen.getAllByTestId('card-container');
        expect(cards).toHaveLength(coffees.length);
 
        // Confirm that each coffee has its title displayed
        expect(screen.getByText(coffee.name)).toBeInTheDocument();

        // Confirm that each image has rendered 
        expect(screen.getByRole('img', { name: coffee.name })).toBeInTheDocument();

        // Verify if the description is visible
        expect(screen.getByText(coffee.description)).toBeInTheDocument();
      });
    });
  });