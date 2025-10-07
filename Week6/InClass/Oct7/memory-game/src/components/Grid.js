import {useState, useEffect} from 'react'
import cx from 'classnames'

import styles from './UI.module.css'

import CardPattern from '../assets/moroccan-flower-dark.png'
import Bilbo from '../assets/bilbo-baggins.png'
import Cameron from '../assets/cameron-poe.png'
import Nikki from '../assets/nikki-cage.png'
import Pollux from '../assets/pollux-troy.png'


const cardImages = [{src: Bilbo}, {src: Cameron}, {src: Nikki}, {src: Pollux}]

export default function Grid(props) {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  // We need a function for shuffling our cards: duplicate, shuffle, stor then in state
  const shuffleCards = () => {
    // Spreading images 2 times so we have duplicates to match
    const shuffleCards = [...cardImages, ...cardImages]

    // Add the sort function which sends a function for each item in our new array
    // We sort when a number is negative, leave it where it is but if positive we swap it
    .sort(() => Math.random()-0.5)
    // Now we map through each card in our shuffled array and add a unique ID
    .map((card) => ({...card, id: Math.round(Math.random()* 1000000000000)}))
    setCards(shuffleCards)
    setTurns(0)
    }

    const handleChoice = (card) => {
      console.log(card)
      // 1. Check if we have choice 1 and if we do, the incoming card needs to assigned to choice two
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
      // 2. What happens if we have both choices? Then we compare them but not here
      // If we do it here it might fire possibly before our local state has even updated
      // We need to use useEffect() so that it only checks when the choice updates


    }
    // useEffect(()=>{},[])
    useEffect(()=>{
      // We compare but first we need to assign some logic to assigning choices
      // 1. Make sure we have both choices
      if (choiceOne && choiceTwo) {
        // 2. Check if the cards match
        if (choiceOne.src === choiceTwo.src) {
          // We have na array of all of our shuffled cards inside state called cards
          // We need to map through and assign a new property matched and set to true
          setCards((prevCards)=>{
            // Now we map to make a copy of evrything and add the new property of matched to matched items
            return prevCards.map((card)=>{
              if (card.src === choiceOne.src) {
                console.log("Those cards match!")
                return {...card, matched:true}
              } else {
                return card
              }
            })
          })
          resetTurn()
          // else = they do not match
        } else {
          console.log("Those cards do not match!")
          // We need to wait a bit before we flip the cards back
          // Without this set timeout we wont even see the second card flips
          // When they do not match, we need the timoeout to flip them back and actually play the game
          setTimeout(() => resetTurn(), 1000)
        }
      }
    },[choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }

  return (
    <>
      <button onClick = {shuffleCards}>New Game</button>
      <p>Turns used: {turns}</p>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <Card 
            card={card} 
            key = {card.id} 
            handleChoice={handleChoice} 
            flipped ={card === choiceOne || card === choiceTwo || card.matched} 
            />
          ))}
        </div>
      </div>
    </>
  )
}

function Card(props) {
  // Updated props to receive card object
  const {card, handleChoice, flipped} = props
  // isActive will be a part of each card's local state
  // const [isActive, setIsActive] = useState(false)
  // When we click on a card we want to flip it

  const handleClick = () => {
    // setIsActive(!isActive)
    // setIsActive((current) => !current)
    handleChoice(card)
  }

  return (
    <div className={styles.flip_card}>
      <div className={cx(styles.flip_card_inner,{[styles.active]:flipped})} onClick={handleClick}>
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card front" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={card.src} alt="card back" />
        </div>
      </div>
    </div>
  )
}
