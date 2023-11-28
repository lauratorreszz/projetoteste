import React from 'react';

function MyButton() {
    function handleClick() {
        alert('Button clicked!');
    }

    return (
        <button onClick={handleClick}>Click me</button>
    );
}

export default MyButton;