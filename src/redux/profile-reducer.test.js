import profileReducer, { addPost, deletePost } from "./profile-reducer";
import ReactDOM from 'react-dom';
import React from 'react'


// it('length of post should be incremented', () => {
//     let action = addPost('Andrew Kapustin');
//     let state = {
//         posts: [
//             { id: 1, postContent: "Waht's up!!!", likesCount: 2 },
//             { id: 2, postContent: "It's my first post", likesCount: 5 },
//             { id: 3, postContent: "Just a prank bro", likesCount: 4 },
//             { id: 4, postContent: "I LOVE IT", likesCount: 78 },
//         ]
//     };
//     let newState = profileReducer(state, action);
//     // expect(newState.posts.length === 5).toBe(5);
//     expect(newState.posts[4].postContent).toBe('Andrew Kapustin');
// });

it('length of post should be decremented', () => {
    let action = deletePost(1);
    let state = {
        posts: [
            { id: 1, postContent: "Waht's up!!!", likesCount: 2 },
            { id: 2, postContent: "It's my first post", likesCount: 5 },
            { id: 3, postContent: "Just a prank bro", likesCount: 4 },
            { id: 4, postContent: "I LOVE IT", likesCount: 78 },
        ]
    };
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});