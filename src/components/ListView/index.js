import React from "react";
import ListViewItem from "./ListViewItem";
import { useAppContext } from "../../utils/AppContext";
import "./style.css";

// This component generates the list view
export default function ListView() {
    /* eslint-disable no-unused-vars */
    const [state, _] = useAppContext();

    return (
        <div className="d-flex flex-column pt-4 pl-3 flex-nowrap">
            {renderTreeNodes(state.treeData)}
        </div>
    );

    // Loops through and renders list nodes 
    function renderTreeNodes(currentNode) {
        const nodes = []
        if (currentNode && currentNode.childNodes) {
            for (let key in currentNode.childNodes) {
                nodes.push(
                    <ListViewItem
                        key={key}
                        {...currentNode.childNodes[key]}>
                        {renderTreeNodes(currentNode.childNodes[key])}
                    </ListViewItem>)
            }
        }
        return nodes
    }
}
