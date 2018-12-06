import React from "react";

class GiftItems extends React.Component {
    createTasks = item => {
        return (
            <li key={item.key} onClick={() =>
            this.props.deleteItem(item.key)}>
                {item.text}
            </li>
        )
    }
    render() {
        const giftEntries = this.props.entries;
        const listItems = giftEntries.map(this.createTasks);

        return <ul className="thisList">{listItems}</ul>
    }
}

export default GiftItems;