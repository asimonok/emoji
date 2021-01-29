import React from 'react';

export default function EmojiRow(emoji) {
    return (
        <tr>
            <td>{emoji.symbol}</td>
            <td>{emoji.title || emoji.keywords}</td>
        </tr>
    )
};