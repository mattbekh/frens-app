import React, { useState } from 'react';
import {Link} from 'react-scroll';
import './Profile.css';
import CardList from './CardList'
import SocialMedia from './SocialMedia'


function Profile() {

    const [cardlist, setCardlist] = useState(SAMPLE_CARDS)
    return (
        <div className="container">
            <SocialMedia />
            <CardList cardlist={cardlist}/>    
        </div>
    )
}

const SAMPLE_CARDS = [
    {
        id: 1,
        question: 'what is your favourite anime?',
        options: [
            'Attck on Titan',
            'Demon Slayer',
            'Tokoyo Ghoul',
            'Naruto',
            'Jujutsu Kaisen'
        ]
    },
    {
        id: 2,
        question: 'what is your favourite animal?',
        options: [
            'Cat',
            'Dog',
            'I hate Animal :('
        ]
    },
    {
        id: 3,
        question: 'what is your math level?',
        options: [
            'Expert',
            'Average',
            'I am stupid, but I do not hate math',
            'Hater'
        ]
    },
    {
        id: 4,
        question: 'where do you go to school?',
        options: [
            'UBC',
            'SFU',
            'BCIT',
            'Langara',
            'Other'
        ]
    },
    {
        id: 5,
        question: 'what is your preferrd food?',
        options: [
            'Sushi',
            'Hotpot',
            'Salad',
            'Piazza',
            'Pho'
        ]
    },
    {
        id: 6,
        question: 'What year level are you in right now?',
        options: [
            'High School',
            'Year 1',
            'Year 2',
            'Year 3',
            'Year 4',
            'Graduated'
        ]
    },
    {
        id: 7,
        question: 'what is your Faulty?',
        options: [
            'Art',
            'Science',
            'Engineering',
            'Business',
            'Undeclared'
        ]
    },
    {
        id: 8,
        question: 'Are you funny?',
        options: [
            'Of course!!',
            'Nope',
            'I hate Jokes'
        ]
    }
]
export default Profile
