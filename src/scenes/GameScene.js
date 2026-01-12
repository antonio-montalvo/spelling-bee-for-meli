import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        
    }

    create() {
        this.add.text(400, 300, 'Spelling Bee Game', {
            fontSize: '48px',
            color: '#ffffff',
            fontFamily: 'Arial'
        }).setOrigin(0.5);

        this.add.text(400, 400, 'Presiona SPACE para comenzar', {
            fontSize: '24px',
            color: '#ecf0f1',
            fontFamily: 'Arial'
        }).setOrigin(0.5);

        this.input.keyboard.on('keydown-SPACE', () => {
            console.log('Juego iniciado!');
        });
    }

    update() {
        
    }
}
