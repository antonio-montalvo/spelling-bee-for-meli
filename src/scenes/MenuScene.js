import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        const width = this.cameras.main.width;

        this.add.text(width / 2, 150, 'AHORCADO CON IA', {
            fontSize: '48px',
            color: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        this.add.text(width / 2, 230, '(Hangman con Text-to-Speech)', {
            fontSize: '20px',
            color: '#ecf0f1'
        }).setOrigin(0.5);

        this.add.text(width / 2, 300, 'Adivina la palabra letra por letra', {
            fontSize: '18px',
            color: '#bdc3c7'
        }).setOrigin(0.5);

        this.add.text(width / 2, 330, 'Escucha la pista de voz para descubrir la palabra', {
            fontSize: '18px',
            color: '#bdc3c7'
        }).setOrigin(0.5);

        const playButton = this.add.rectangle(width / 2, 450, 200, 60, 0x27ae60)
            .setInteractive({ useHandCursor: true });

        this.add.text(width / 2, 450, 'JUGAR', {
            fontSize: '32px',
            color: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        playButton.on('pointerover', () => {
            playButton.setFillStyle(0x2ecc71);
        });

        playButton.on('pointerout', () => {
            playButton.setFillStyle(0x27ae60);
        });

        playButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}
