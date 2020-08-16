import React from "react";
import VerticalTreeView from '../components/VerticalTreeView';

// This page displays the sample data as a Vertical Tree view
export default function VerticalTree(props) {

    return (
        <>
            <h4 className="text-center pt-4 pb-2">Vertical Tree View </h4>
            <hr class="my-auto mt-3" />
            <div className="scroll-wrapper">
                <VerticalTreeView />
            </div>
        </>
    );
}
