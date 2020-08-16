import React, { useState } from "react";

// This component generates a list view item
export default function ListViewItem(props) {
    const [showChildren, setShowChildren] = useState(true)

    // Toggles show hide of child nodes
    function handleClick(event) {
        event.preventDefault()
        setShowChildren(!showChildren)
    }

    return (
        <div key={props.id} >
            <div className="d-flex flex-row flex-nowrap">
                {props.children && props.children.length > 0 &&
                    <a href="/" className="my-auto expand-button l-expand-offset"
                        onClick={handleClick}>
                        {showChildren ?
                            <i className="fa fa-minus-square" aria-hidden="true"></i>
                            :
                            <i className="fa fa-plus-square" aria-hidden="true"></i>}
                    </a>}
                <div className="tree-view-item ml-3 mb-1 l-list-item" title={props.name}>
                    <div className="display-name">{props.name}</div>
                    <div className="display-value l-value-width">{props.value}</div>
                    <div className="display-total l-value-width">{props.total.toFixed(2)}</div>
                </ div>
            </div>
            {props.children && props.children.length > 0 && showChildren &&
                <div className="d-flex flex-row flex-nowrap">
                    < div key={props.id} className="d-flex flex-column flex-nowrap w-100 pl-3">
                        {props.children}
                    </ div>
                </div>}
        </ div >)
}
