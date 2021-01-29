import React from 'react';
import EmojiRow from '../EmojiRow/EmojiRow'

export default function EmojiContainer({ data }) {

    if (!data) { return (<p>Loading...</p>)}

    const emojiList = data.map((emoji, index) => {
        return (
            <EmojiRow key={index} emoji={emoji} />
        );
    });

    return (
        <table className='emojiContainer'>
            <tbody>
                {emojiList}
            </tbody>
        </table>
    );
};
