import Item from "./Item"

const ItemList = ({items}) => {

    return(
        <>
        {items.map((item) => <div className="col-3 my-3" key={item.id}>
                <Item item={item} />
            </div>)}
        </>      
    )
}

export default ItemList;