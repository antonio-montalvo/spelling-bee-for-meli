import Phaser from 'phaser';

export default class WinScene extends Phaser.Scene {
    constructor() {
        super({ key: 'WinScene' });
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.add.text(width / 2, 150, '¡GANASTE!', {
            fontSize: '64px',
            color: '#4CAF50',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        this.add.text(width / 2, 250, '🎉', {
            fontSize: '80px'
        }).setOrigin(0.5);

        this.add.text(width / 2, 350, 'Has adivinado la palabra correctamente', {
            fontSize: '24px',
            color: '#333333'
        }).setOrigin(0.5);

        const playAgainButton = this.add.rectangle(width / 2, 480, 250, 60, 0x6C63FF)
            .setInteractive({ useHandCursor: true });

        const playAgainText = this.add.text(width / 2, 480, 'JUGAR DE NUEVO', {
            fontSize: '24px',
            color: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        playAgainButton.on('pointerover', () => {
            playAgainButton.setFillStyle(0x5A52E0);
        });

        playAgainButton.on('pointerout', () => {
            playAgainButton.setFillStyle(0x6C63FF);
        });

        playAgainButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}
