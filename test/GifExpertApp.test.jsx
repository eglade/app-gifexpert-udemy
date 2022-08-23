import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('<GifExpertApp.test />', () => {
    
    test('cambio el momento de escribir', () => {

        render(<GifExpertApp />)
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'inputValue'} });
        expect(input.value).toBe('inputValue');
    });
});