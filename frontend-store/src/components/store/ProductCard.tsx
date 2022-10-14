import styled from "styled-components"
import { EditIcon } from "../../icons/Edit";
import { DeleteIcon } from "../../icons/Delete"

export const ProductCard: React.FC<Product> = ({name, id, image_url, price}): JSX.Element => { 

    const fallbackImage = '';

    const handleEdit = () => { 
        console.log('edit')
    }

    const handleDelete = () => { 
        console.log('delete')
    }

    return <Wrapper>
        <div className="name">{name}</div>
        <img className="image" src={image_url || fallbackImage} alt={name} />
        <span className="price">$ {price}</span>
        <div className="flex">
            <EditIcon onclick={handleEdit}/>
            <DeleteIcon onclick={handleDelete}/>
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
text-align: center;
border: 0.5px lightgray solid;
border-radius: 10px;
box-shadow: lightgray 1px 1px;
height: 350px;
aspect-ratio: 1;
.name { 
    padding-top: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-transform: capitalize;
    font-size: 1.2rem;
}
.image {
    margin-top: 15px;
    width: 350px;
    aspect-ratio: 16/10;
}
.price {
    display: inline-block;
    margin-top: 15px;
    font-size: 1.2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.flex { 
    width: 310px;
    display: flex;
    margin-top: 3px;
    justify-content: space-between;
}
`