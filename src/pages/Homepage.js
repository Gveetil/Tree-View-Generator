import React from "react";
import ListView from '../components/ListView';

// This page displays the application homepage and loads the default list view
export default function Homepage(props) {

    return (
        <>

            <h4 className="text-center pt-4 pb-2">Tree List View </h4>
            <hr class="my-auto mt-3" />
            <div className="container list-view-wrapper justify-content-center">
                <ListView />
            </div>
        </>
    );
}
