import React from 'react';

export default ({notes, ...props}) => (
    console.log(notes),
    <ul>{ notes.map(note =>
        <li key={note.id}>{note.task}</li> 
        )}
    </ul>
);
    