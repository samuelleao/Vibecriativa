import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './index';

describe('Input component', () => {
  test('renders basic Input component', () => {
    const { getByRole } = render(<Input />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders Input component with props', () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <Input
        type="text"
        label="Username"
        placeholder="Enter your username"
        className="custom-class"
        error="Invalid username"
      />
    );
    const inputElement = getByLabelText('Username');
    const placeholderElement = getByPlaceholderText('Enter your username');
    const errorElement = getByText('Invalid username');
    expect(inputElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
  });

  test('renders radio Input component when type is "radio"', () => {
    const { getByLabelText } = render(<Input type="radio" label="Option" />);
    const radioElement = getByLabelText('Option');
    expect(radioElement).toBeInTheDocument();
  });
});
