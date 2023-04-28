import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import InputSearch from '../InputSearch';
import { useGithub } from '../../context/GithubContext';
import { GithubContextValue } from '../../types/github.types';

jest.mock('../../context/GithubContext', () => ({
  useGithub: jest.fn(),
}));

describe('InputSearch', () => {
  const searchUsers = jest.fn();

  beforeEach(() => {
    (useGithub as jest.Mock<GithubContextValue>).mockReturnValue({
      searchUsers,
      query: '',
      users: [],
      repositories: [],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render input and button', () => {
    render(<InputSearch />);
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('should call searchUsers when submitting form', async () => {
    render(<InputSearch />);
    const input = screen.getByPlaceholderText('Enter username');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: 'testuser' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(searchUsers).toHaveBeenCalledWith('testuser');
    });
  });
});
