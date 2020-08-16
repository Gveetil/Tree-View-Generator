import React from "react";
import HorizontalTreeView from '../components/HorizontalTreeView';

// This page displays the sample data as a Horizontal Tree view
export default function HorizontalTree(props) {

    return (
        <>
            <h4 className="text-center pt-4 pb-2">Horizontal Tree View </h4>
            <hr class="my-auto mt-3" />
            <div className="scroll-wrapper">
                <HorizontalTreeView />
            </div>
        </>
    );
}
