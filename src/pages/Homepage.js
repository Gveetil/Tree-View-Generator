import React from "react";
import ListView from '../components/ListView';

// This page displays the application homepage and loads the default list view
export default function Homepage(props) {

    return (
        <div className="scroll-wrapper">
            <ListView />
        </div>
    );
}
