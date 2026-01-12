import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        this.add.text(width / 2, height / 2, 'Cargando...', {
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5);
    }

    create() {
        this.scene.start('MenuScene');
    }
}
