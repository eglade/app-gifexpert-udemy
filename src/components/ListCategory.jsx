import { GridCategory } from "../components";
/**
 * Listado de todas las categorias
 * @param {*} param0 
 * @returns 
 */
export const ListCategory = ({categories, onDeleteCategory}) => {
    // retorno de categorias
    return (
        <>
            {
                // Recorrido de categorias almacenadas
                categories.map( (category, index) => (

                    // bloque grid categoría
                    <GridCategory
                        key={category}    
                        category={category}
                        index={index} 
                        onDeleteCategory={onDeleteCategory}
                    />
                ))
            }
        </>
    )
}