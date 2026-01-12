import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';
import WinScene from './scenes/WinScene';
import LoseScene from './scenes/LoseScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#2c3e50',
    scene: [BootScene, MenuScene, GameScene, WinScene, LoseScene]
};

const game = new Phaser.Game(config);
