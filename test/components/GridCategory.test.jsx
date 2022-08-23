import { render, screen } from "@testing-library/react";
import { GridCategory } from "../../src/components";
import { useFetchGifs } from "../../src/hook/useFetchGifs";

jest.mock('../../src/hook/useFetchGifs');

describe('<GridCategory.test />', () => {
    
    const category = 'Goku';

    test('Mostrar Loading en primera instancia ', () => {
        
        // simulamos la llamasa a useFetchGifs de manera inicial
        useFetchGifs.mockReturnValue({
            images: [], 
            isLoading: true
        });

        render(<GridCategory
            category={category}
        />);

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    });

    test('Mostrar items cuando se use el useFetchGifs ', () => {
        
        const gifs = [
            {
                id : '123',
                title: 'Goku',
                url: 'https://media2.giphy.com/media/WOb8EeFziTQNE02WXs/giphy.gif?cid=b6da54b3lwd0fa7q7eoiq5u6w0yyozvrps3c64nbyyu9dosb&rid=giphy.gif&ct=g'
            },
            {
                id : '456',
                title: 'Vegeta',
                url: 'https://media2.giphy.com/media/WOb8EeFziTQNE02WXs/giphy.gif?cid=b6da54b3lwd0fa7q7eoiq5u6w0yyozvrps3c64nbyyu9dosb&rid=giphy.gif&ct=g'
            }            
        ]
        
        // simulamos la llamasa a useFetchGifs con datos retornados
        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: false
        });

        // trenderizamos una vez utilizamos el metodo useFetchGifs
        render(<GridCategory
            category={category}
        />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });    
    
});