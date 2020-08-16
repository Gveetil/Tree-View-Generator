import React, { useState } from "react";

// This component generates a horizontal tree view item 
export default function HTreeViewItem(props) {
    const [showChildren, setShowChildren] = useState(true)
    let connectorClassName = "";

    // No connectors required for the root node
    if (!props.isRoot) {
        // If node is the only child
        if (props.firstChild && props.lastChild)
            connectorClassName = "h-horizontal-connector";

        // If node is the first child
        else if (props.firstChild)
            connectorClassName = "h-bottom-connector";

        // If node is the last child
        else if (props.lastChild)
            connectorClassName = "h-top-connector";

        // Node is in the middle 
        else
            connectorClassName = "h-vertical-connector";
    }

    // Toggles show hide of child nodes
    function handleClick(event) {
        event.preventDefault()
        setShowChildren(!showChildren)
    }

    return (
        <div key={props.id} className="d-flex flex-row">
            {connectorClassName &&
                <div className={connectorClassName}>
                </ div>}
            <div className="py-2 my-auto">
                <div className="tree-view-item h-auto my-auto" title={props.name}>
                    <div className="display-name">{props.name}</div>
                    <div className="display-value">{props.value}</div>
                    <div className="display-total pr-2">{props.total.toFixed(2)}</div>
                    {props.children && props.children.length > 0 &&
                        <a href="/" className="my-auto expand-button h-expand-offset"
                            onClick={handleClick}>
                            {showChildren ?
                                <i className="fa fa-minus-square" aria-hidden="true"></i>
                                :
                                <i className="fa fa-plus-square" aria-hidden="true"></i>}
                        </a>}
                </ div>
            </div>
            {
                props.children && props.children.length > 0 && showChildren &&
                (<>
                    {props.children.length > 1 &&
                        <div className="h-horizontal-connector">
                        </ div>}
                    <div key={props.id} className="d-flex flex-column flex-nowrap">
                        {props.children}
                    </ div>
                </>)
            }
        </ div >)
}
