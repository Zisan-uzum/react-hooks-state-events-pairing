import React from "react";
function Header({ title, views, date, likes, dislikes }) {
    return (
        <header>
            <h1>{title}</h1>
            <p>
                {views} Views | Uploaded {date}
            </p>
        </header>
    );
}

export default Header;
