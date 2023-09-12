import React from "react";

export function SearchForm (props) {
    return (
        <div>
            <h1>Search for books</h1>
            <form onSubmit={props.handleSearchQuery}>
                <input onChange={props.handleSearchLine} type="text" placeholder="Search book" />
                <button>Search</button>
            </form>
        </div>
    )
};