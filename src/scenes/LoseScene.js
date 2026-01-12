import Phaser from 'phaser';

export default class LoseScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoseScene' });
        this.correctWord = '';
    }

    init(data) {
        this.correctWord = data.word || '';
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.add.text(width / 2, 150, 'GAME OVER', {
            fontSize: '64px',
            color: '#FF6B6B',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        this.add.text(width / 2, 250, '💀', {
            fontSize: '80px'
        }).setOrigin(0.5);

        this.add.text(width / 2, 340, 'La palabra correcta era:', {
            fontSize: '24px',
            color: '#333333'
        }).setOrigin(0.5);

        this.add.text(width / 2, 390, this.correctWord, {
            fontSize: '36px',
            color: '#FFD93D',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        const tryAgainButton = this.add.rectangle(width / 2, 500, 250, 60, 0x6C63FF)
            .setInteractive({ useHandCursor: true });

        const tryAgainText = this.add.text(width / 2, 500, 'INTENTAR DE NUEVO', {
            fontSize: '22px',
            color: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        tryAgainButton.on('pointerover', () => {
            tryAgainButton.setFillStyle(0x5A52E0);
        });

        tryAgainButton.on('pointerout', () => {
            tryAgainButton.setFillStyle(0x6C63FF);
        });

        tryAgainButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}
