import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PasswordInput from '..';

test('passowrd input component is rendered', () => {
    render(<PasswordInput
        {...{
            placeholder: "Password",
            value: "password",
            setValue: jest.fn(),
            clearValue: jest.fn(),
            type: "password",
            error: false,
            errorMessage: "error message",
        }}
    />);
    const inputContainer = screen.getByTestId('password-input-container');
    expect(inputContainer).toBeInTheDocument();
    const input = screen.getByTestId('password-input');
    const showButton = screen.getByRole('button');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
    expect(showButton).toBeInTheDocument();
    userEvent.click(showButton);
    expect(input).toHaveAttribute('type', 'text');
})
test('pasword input component renders error messages', () => {
    render(<PasswordInput
        {...{
            placeholder: "Password",
            value: "password",
            setValue: jest.fn(),
            clearValue: jest.fn(),
            type: "password",
            error: true,
            errorMessage: "error message",
        }}
    />);
    const inputContainer = screen.getByTestId('password-input-container');
    expect(inputContainer).toBeInTheDocument();
    const input = screen.getByTestId('password-input');
    const showButton = screen.getByRole('button');
    const errorMessage = screen.getByTestId('error-message');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
    expect(showButton).toBeInTheDocument();
    userEvent.click(showButton);
    expect(input).toHaveAttribute('type', 'text');
    expect(errorMessage).toBeInTheDocument();
})