import './style.css';
import { setUpGame, startGame } from './game';
import { makeDraggable, setUpBoard } from './dom';

const gameboardFactory = require('./gameboard');

const setup = setUpGame();

const p1 = setup.getPlayer1();
const p2 = setup.getPlayer2();

const p1Gameboard = p1.getGameboard();
const p2Gameboard = p2.getGameboard();

p2Gameboard.generateRandomFleet();

// startGame(p1, p2);
