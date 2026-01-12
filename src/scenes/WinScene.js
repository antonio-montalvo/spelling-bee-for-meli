import Phaser from 'phaser';

export default class WinScene extends Phaser.Scene {
    constructor() {
        super({ key: 'WinScene' });
    }

    init(data) {
        this.wordsCompleted = data.wordsCompleted || 0;
        this.statistics = data.statistics || [];
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.add.text(width / 2, 40, '🎉 ¡VICTORIA! 🎉', {
            fontSize: '48px',
            color: '#4CAF50',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        this.add.text(width / 2, 100, `All ${this.wordsCompleted} Words Completed!`, {
            fontSize: '28px',
            color: '#333333',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        if (this.statistics.length > 0) {
            this.add.text(width / 2, 145, 'FINAL STATISTICS:', {
                fontSize: '20px',
                color: '#333333',
                fontStyle: 'bold'
            }).setOrigin(0.5);

            const totalErrors = this.statistics.reduce((sum, stat) => sum + stat.errors, 0);
            const perfectWords = this.statistics.filter(stat => stat.errors === 0).length;

            this.add.text(width / 2, 175, `Total Errors: ${totalErrors} | Perfect Words: ${perfectWords}`, {
                fontSize: '18px',
                color: '#FFD93D',
                fontStyle: 'bold'
            }).setOrigin(0.5);

            const startY = 210;
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
            const gameScene = this.scene.get('GameScene');
            gameScene.availableWords = [];
            gameScene.completedWords = [];
            gameScene.wordsCorrect = 0;
            this.scene.start('GameScene');
        });
    }
}
