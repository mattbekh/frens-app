import React from 'react';



let cooking =  JSON.parse('{"id": "1", "name": "cooking"}');
let music = JSON.parse('{"id": "2", "name": "music"}');
let drawing = JSON.parse('{"id": "3", "name": "drawing"}');
let workout = JSON.parse('{"id": "4", "name": "workout"}');


const initialInterestsArray = []
initialInterestsArray.push(cooking,music,drawing,workout);


const InterestReducer = (interestState = initialInterestsArray, action) => {
    switch (action.type) {
        case 'ADD' :
            return interestState
        case 'PICK' :
            return interestState.filter((interest) => (interest.id !== action.payload))
        default :
            return interestState;
    }
};

export default InterestReducer;
