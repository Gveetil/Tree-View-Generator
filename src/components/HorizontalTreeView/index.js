import React, { useEffect } from "react";
import HTreeViewItem from "./HTreeViewItem";
import { useAppContext } from "../../utils/AppContext";
import "./style.css";

// This component generates the horizontal tree view
export default function HorizontalTreeView() {
    /* eslint-disable no-unused-vars */
    const [state, _] = useAppContext();

    // on load, scroll the root node into view 
    useEffect(() => {
        const rootNode = document.querySelector(".rootnode");
        if (rootNode) {
            rootNode.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    });

    return (
        <div className="d-flex flex-column pt-2 px-3 pb-2 flex-nowrap">
            {renderTreeNodes(state.treeData)}
        </div>
    );

    // Loops through and renders tree nodes 
    function renderTreeNodes(currentNode) {
        const nodes = []
        if (currentNode && currentNode.childNodes) {
            const totalChildren = Object.keys(currentNode.childNodes).length
            for (let key in currentNode.childNodes) {
                nodes.push(
                    <HTreeViewItem
                        key={key}
                        firstChild={(nodes.length === 0)}
                        lastChild={(nodes.length === totalChildren - 1)}
                        {...currentNode.childNodes[key]}>
                        {renderTreeNodes(currentNode.childNodes[key])}
                    </HTreeViewItem>)
            }
        }
        return nodes
    }
}
