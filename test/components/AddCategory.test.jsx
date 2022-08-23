import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('<AddCategory.test />', () => {

    // test('El componente debe hacer match con el snapshot', () => {
    //     const {container} = render(<AddCategory />);
    //     expect(container).toMatchSnapshot();
    // });

    test('Cambio al teclear en input principal gif', () => {       
        const inputValue = 'Goku';
        
        render(<AddCategory onAddCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: inputValue} });
        expect(input.value).toContain(inputValue);
    });

    test('Metodo submit -  enviar si tiene un valor y utilizar "onAddCategory"', () => {      
        const inputValue    = 'Goku';
        const onAddCategory =  jest.fn();

        render(<AddCategory onAddCategory={onAddCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // simulamos cambiar nombre al input
        fireEvent.input( input, { target: { value: inputValue} });

        // simulamos el click de buscar evento submit de formulario
        fireEvent.submit( form );

        // al cambiar el input y enviar petición el input deberia volver a cero
        expect(input.value).toBe('');

        // que sea llamada (sin importar el numero de veces)
        expect(onAddCategory).toHaveBeenCalled();
        
        // que sea llamada un numero determinado de veces
        expect(onAddCategory).toHaveBeenCalledTimes(1);

        // que sea llamado con el input que corresponde (en este caso categoría)
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No llamar el onAddCategory cuando el input es vacío', () => {       
        const inputValue    = '';
        const onAddCategory =  jest.fn();

        render(<AddCategory onAddCategory={onAddCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // simulamos cambiar nombre al input
        fireEvent.input( input, { target: { value: inputValue} });

        // simulamos el click de buscar evento submit de formulario
        fireEvent.submit( form );

        expect(onAddCategory).not.toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(0);
    });    

});