import { render } from '@testing-library/react';
import Header from '../Header';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../Search', () => () => <div>Mocked Search Component</div>);

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<Header />);

    expect(getByText(/Eth-Block Explorer/i)).toBeInTheDocument();
    expect(getByText(/Your key to unlocking Ethereum's secrets./i)).toBeInTheDocument();

    expect(getByAltText('blockchain')).toBeInTheDocument();

  });
});
