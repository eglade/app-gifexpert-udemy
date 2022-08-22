import { useState } from "react";
import { 
    AddCategory, 
    ListCategory 
} from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    /**
     * Metodo para agregar item una categoría. 
     * @param {*} newValue 
     * @returns 
     */
    const addCategory = (newValue) => {
        // validar vacio
        if (newValue.trim().length <= 0) return false;
        
        // validar repetido (por valor exacto)
        if (categories.includes(newValue)) return false;

        // setera agregando categoria nueva
        setCategories((categories) => ([newValue, ...categories]));
        return true;
    }    

    /**
     * Metodo para eliminar una categoría
     * @param {*} index 
     * @returns 
     */
    const deleteCategory = (index) => {
        // splice para eliminar tiem por indice
        categories.splice(index, 1)

        // seteo categorias (las anteriores y la nueva agregada)
        setCategories((categories) => ([...categories]))
        return true;
    }


    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp - EGM</h1>

            {/* input - form */}
            <AddCategory 
                onAddCategory={(newValue) => addCategory(newValue)}
            />
            <hr />

            {/* listado de gif's */}
            <ListCategory 
                categories={categories}
                onDeleteCategory={(index) => deleteCategory(index)}
            />
        </>
    );
}