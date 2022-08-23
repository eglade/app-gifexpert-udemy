import { render, screen } from "@testing-library/react";
import { GiftCardItem } from "../../src/components/GiftCardItem";

describe('<GiftCardItem.test />', () => {
    
    // gif imagen de prueba
    const gif = {
        id:'123456',
        title:'Goku',
        url: 'https://media2.giphy.com/media/WOb8EeFziTQNE02WXs/giphy.gif?cid=b6da54b3lwd0fa7q7eoiq5u6w0yyozvrps3c64nbyyu9dosb&rid=giphy.gif&ct=g'
    }
    
    test('El componente debe hacer match con el snapshot', () => {
        const {container} = render(<GiftCardItem 
            key={gif.id} 
            title={gif.title}
            url={gif.url}
        />);
        expect(container).toMatchSnapshot();
    });

    test('El componente debe tener titulo en parrafo <p/>', () => {
        const {container} = render(<GiftCardItem 
            key={gif.id} 
            title={gif.title}
            url={gif.url}
        />);
        expect(container.querySelector('p').innerHTML).toContain(gif.title);
    }); 
    
    test('El componente debe tener imagen y titulo en <img src="..." alt"..." /> ', () => {
        const {container} = render(<GiftCardItem 
            key={gif.id} 
            title={gif.title}
            url={gif.url}
        />);
        
        expect(container.querySelector('img').getAttribute("src")).toContain(gif.url);
        expect(container.querySelector('img').getAttribute("alt")).toContain(gif.title);
    });

    test('El componente debe tener imagen y titulo en <img src="..." alt"..." /> 2', () => {
        render(<GiftCardItem 
            key={gif.id} 
            title={gif.title}
            url={gif.url}
        />);

        const {src, alt} = screen.getByRole('img');

        expect(src).toContain(gif.url);
        expect(alt).toContain(gif.title);
    });    

});