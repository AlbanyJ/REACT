import PropTypes from 'prop-types';

function List(props){

    const itemList = props.items;
    const category = props.category;
    
    // //to sort array before hand...use the sort method
    // fruits.sort();

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); // AlPHABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    //fruits.sort((a,b) => a.calories - b.calories); //NUMERICAL ASCENDING
    // fruits.sort((a,b) => b.calories - a.calories); //NUMERICAL DESCENDING

    //filter by a certain criteria

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    
    const listItems = itemList.map((item)  =>    <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b></li>);

    return (<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-item">{listItems}</ol>
            </>);
}
List.propTypes ={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories:PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List