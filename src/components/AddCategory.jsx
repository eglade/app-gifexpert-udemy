import { useState } from "react";
import PropTypes from "prop-types";

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

        // validar vacio
        if (inputValue.trim().length <= 0) return;

        // utiliza funcion del padre para eliminas
        onAddCategory(inputValue);
        
        // seteo input a vacio y todo salio bien
        setInputValue('');            
    }    

    /**
     * Retorno componente formulario búsqueda
     */
    return (
        <form aria-label="form" onSubmit={(e) => onInputSubmit(e) }>
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

/**
 * VALIDACIONES
 */
 AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}  
