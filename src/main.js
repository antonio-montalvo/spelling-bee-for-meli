import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';
import WinScene from './scenes/WinScene';
import LoseScene from './scenes/LoseScene';

function initGame() {
    const config = {
        type: Phaser.AUTO,
        width: 1180,
        height: 820,
        parent: 'game-container',
        backgroundColor: '#E3EFFC',
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH

        },
        input: {
            touch: true,
            mouse: true,
            activePointers: 3
        },
        scene: [BootScene, MenuScene, GameScene, WinScene, LoseScene]
    };

    new Phaser.Game(config);
}

function waitForResponsiveVoice() {
    if (typeof responsiveVoice !== 'undefined') {
        initGame();
    } else {
        setTimeout(waitForResponsiveVoice, 100);
    }
}

waitForResponsiveVoice();
