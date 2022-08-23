import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hook/useFetchGifs";


describe('useFetchGifs.test', () => {

    const category = 'Goku';

    test('Debe regresar el estado inicial', () => {

        // para renderizar custom hook
        const { result } = renderHook(() => useFetchGifs(category));

        // obtenemos los valores iniciales segun custom hook
        const {images, isLoading } = result.current;

        // realizamos los expect necesarios para el testing con estado inicial
        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
    });

    test('Debe regresar array de imagenes e isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs(category));

        // Con esto somulamos que 'espere' a que nuestro customHook devuelva valor para hacer testing
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );

        // Una vez esperamos valores con 'waitFor' hacemos nuestros 'expect'
        const {images, isLoading } = result.current;

        // realizamos los expect necesarios para el testing con estado final (con data)
        expect(images.length).toBeGreaterThan(0),
        expect(isLoading).toBe(false);        

    });    
});