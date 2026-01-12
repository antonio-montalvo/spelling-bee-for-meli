import Phaser from 'phaser';

export default class LoseScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoseScene' });
        this.correctWord = '';
    }

    init(data) {
        this.correctWord = data.word || '';
        this.wordsCompleted = data.wordsCompleted || 0;
        this.statistics = data.statistics || [];
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.add.text(width / 2, 40, 'GAME OVER', {
            fontSize: '48px',
            color: '#FF6B6B',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        this.add.text(width / 2, 90, `Words Completed: ${this.wordsCompleted}`, {
            fontSize: '24px',
            color: '#4CAF50',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        this.add.text(width / 2, 125, `Failed on: ${this.correctWord}`, {
            fontSize: '20px',
            color: '#FF6B6B'
        }).setOrigin(0.5);

        if (this.statistics.length > 0) {
            this.add.text(width / 2, 160, 'STATISTICS:', {
                fontSize: '20px',
                color: '#333333',
                fontStyle: 'bold'
            }).setOrigin(0.5);

            const startY = 190;
            const maxDisplay = 8;
            const displayStats = this.statistics.slice(-maxDisplay);

            displayStats.forEach((stat, index) => {
                const y = startY + (index * 25);
                const errorColor = stat.errors === 0 ? '#4CAF50' : stat.errors <= 2 ? '#FFD93D' : '#FF6B6B';
                
                this.add.text(width / 2, y, `${stat.word}: ${stat.errors} errors`, {
                    fontSize: '16px',
                    color: errorColor
                }).setOrigin(0.5);
            });
        }

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
            const gameScene = this.scene.get('GameScene');
            gameScene.availableWords = [];
            gameScene.completedWords = [];
            gameScene.wordsCorrect = 0;
            this.scene.start('GameScene');
        });
    }
}
