import { searchGif } from "../../src/helpers/getGifs";

describe('getGifs.test', () => {
    
    const category = 'dead note';

    test('El método debe retornar un arreglo de gif en base a una "category"  ', async () => {
        const gifs = await searchGif(category);
        
        // Que por lo menos posea un item
        expect(gifs.length).toBeGreaterThan( 0 );

        // Que las propiedades sean exactas al API
        expect(gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
    }); 
});


