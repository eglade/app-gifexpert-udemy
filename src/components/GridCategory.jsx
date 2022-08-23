import { useFetchGifs } from "../hook/useFetchGifs";
import { GiftCardItem } from "../components";
import PropTypes from "prop-types";

/**
 * Muestra el Grid de una determinada categoria.
 * @param {*} param0 
 * @returns 
 */
export const GridCategory = ({category, index, onDeleteCategory }) => {

    // hook custom
    const {images, isLoading} = useFetchGifs(category);
    
    /**
     * Llamado a eliminar una categoría (Metodo principal esta en GifExpertApp)
     * @param {*} e 
     * @param {*} index 
     */
     const deleteCategory = (e, index) => {
        // no refresh al enviar
        e.preventDefault();

        // eliminar (metodo del padre)
        if (confirm("Eliminar?") == true) {
            onDeleteCategory(index);
        }
    }

    /**
     * Retorno bloque grid de la categoría
     */
    return (
        <>
            <h2>
                <button onClick={(e) => deleteCategory(e, index)}>x</button> {category}
            </h2>

            { isLoading && (<h2>Cargando...</h2>)}

            <div className="card-grid">
                {
                    images.map( (gif) => (
                        <GiftCardItem 
                            key={gif.id} 
                            title={gif.title}
                            url={gif.url}
                        />                    
                    ))                
                }
            </div>                
        </>
    )
}; 


/**
 * VALIDACIONES
 */
 GridCategory.propTypes = {
    category: PropTypes.string.isRequired
}  



