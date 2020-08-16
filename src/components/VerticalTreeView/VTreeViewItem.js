import React, { useState } from "react";

// This component generates a vertical tree view item 
export default function VTreeViewItem(props) {
    const [showChildren, setShowChildren] = useState(true)
    let connectorClassName = "";

    // No connectors required for the root node
    if (!props.isRoot) {
        // If node is the only child
        if (props.firstChild && props.lastChild)
            connectorClassName = "v-vertical-connector";

        // If node is the first child
        else if (props.firstChild)
            connectorClassName = "v-left-connector";

        // If node is the last child
        else if (props.lastChild)
            connectorClassName = "v-right-connector";

        // Node is in the middle 
        else
            connectorClassName = "v-horizontal-connector";
    }

    // Toggles show hide of child nodes
    function handleClick(event) {
        event.preventDefault()
        setShowChildren(!showChildren)
    }

    return (
        <div key={props.id} className="d-flex flex-column">
            {connectorClassName &&
                <div className={connectorClassName}>
                </ div>}
            <div className="px-2 text-center">

                <div className="tree-view-item mx-auto"
                    id={`node${props.id}`}
                    title={props.name}>
                    <div className="display-name">{props.name}</div>
                    <div className="display-value">{props.value}</div>
                    <div className="display-total">{props.total.toFixed(2)}</div>
                </ div>
            </div>
            {props.children && props.children.length > 0 &&
                <a href="/" className="mx-auto expand-button v-expand-offset"
                    onClick={handleClick}>
                    {showChildren ?
                        <i className="fa fa-minus-square" aria-hidden="true"></i>
                        :
                        <i className="fa fa-plus-square" aria-hidden="true"></i>}
                </a>}
            {props.children && props.children.length > 0 && showChildren &&
                (<>
                    {props.children.length > 1 &&
                        <div className="v-vertical-connector">
                        </ div>}
                    <div key={props.id} className="d-flex flex-row flex-nowrap">
                        {props.children}
                    </ div>
                </>)
            }
        </ div >)
}
