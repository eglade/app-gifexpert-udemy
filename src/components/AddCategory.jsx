import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {
    
    // useState input agregar gif
    const [inputValue, setInputValue] = useState('');
    
    /**
     * Cambio al teclear en input principal gif
     * @param {*} e 
     */
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    /**
     * Metodo submit
     * @param {*} e 
     */
    const onInputSubmit = (e) => {
        // no refresh al enviar
        e.preventDefault();
        
        // utiliza funcion del padre para eliminas
        const respOnAdd = onAddCategory(inputValue);
        
        // seteo input a vacio y todo salio bien
        if (respOnAdd === true) {
            setInputValue('');            
        }
    }    

    /**
     * Retorno componente formulario búsqueda
     */
    return (
        <form onSubmit={(e) => onInputSubmit(e) }>
            <input 
                type="text" 
                placeholder="Búsqueda de gif" 
                value={inputValue} 
                onChange={(e) => onInputChange(e)} 
            />
            <button type="submit">+ Buscar</button>
        </form>
    )
};
