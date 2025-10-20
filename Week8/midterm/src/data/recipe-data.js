import raspberryCakeImg from '../assets/raspberrycake.jpg'
import bananaCakeImg from '../assets/bananachocochip.jpg'
import blueberryMuffinsImg from '../assets/blueberrymuffins.jpg'
import vanillaCupcakesImg from '../assets/vanillacupcakes.jpg'
import chocolateSouffleImg from '../assets/chocosouffle.jpg'
import tiramisuImg from '../assets/tiramisu.jpg'
import macaronsImg from '../assets/macarons.jpg'
import redVelvetImg from '../assets/redvelvet.jpg'

export const MADE_RECIPES = [
  {
    id: 1,
    title: 'Raspberry Lemon Zest Cake',
    imgSrc: raspberryCakeImg,
    description: 'Bright and tangy lemon cake with fresh raspberry swirls',
    rating: 5,
    date: '2025-01-15',
    notes: 'The lemon zest really made this pop! Perfect summer dessert.'
  },
  {
    id: 2,
    title: 'Banana Chocolate Chip Cake',
    imgSrc: bananaCakeImg,
    description: 'Moist banana cake loaded with chocolate chips',
    rating: 4,
    date: '2025-03-10',
    notes: 'Used very ripe bananas for extra sweetness.'
  },
  {
    id: 3,
    title: 'Blueberry Muffins',
    imgSrc: blueberryMuffinsImg,
    description: 'Classic muffins bursting with fresh blueberries',
    rating: 5,
    date: '2025-04-08',
    notes: 'Best when eaten warm with butter!'
  },
  {
    id: 4,
    title: 'Vanilla Cupcakes',
    imgSrc: vanillaCupcakesImg,
    description: 'Light and fluffy cupcakes with vanilla buttercream',
    rating: 4,
    date: '2025-09-05',
    notes: 'Great base recipe for any decoration ideas.'
  }
]

// What I Want to Make recipes
export const WANT_TO_MAKE = [
  {
    id: 1,
    title: 'Chocolate Soufflé',
    imgSrc: chocolateSouffleImg,
    ingredients: ['4 eggs', '1/2 cup sugar', '4oz dark chocolate', '2 tbsp butter', '1 tbsp flour', '1/2 cup milk']
  },
  {
    id: 2,
    title: 'Tiramisu',
    imgSrc: tiramisuImg,
    ingredients: ['6 egg yolks', '1 cup sugar', '1lb mascarpone', '2 cups coffee', 'ladyfingers', 'cocoa powder']
  },
  {
    id: 3,
    title: 'Macarons',
    imgSrc: macaronsImg,
    ingredients: ['1 cup almond flour', '2 cups powdered sugar', '3 egg whites', '1/4 cup granulated sugar', 'food coloring']
  },
  {
    id: 4,
    title: 'Red Velvet Cake',
    imgSrc: redVelvetImg,
    ingredients: ['2 cups flour', '1/2 cup cocoa', '1 cup buttermilk', '2 eggs', 'red food coloring', 'cream cheese frosting']
  }
]