import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        
        this.wordDatabase = [
  {"palabra":"stomp","descripcion":"To hit the ground hard with your feet when you are angry."},
  {"palabra":"feet","descripcion":"The parts of your body you use to stand and walk."},
  {"palabra":"smile","descripcion":"A happy look on your face when you feel good."},
  {"palabra":"annoyed","descripcion":"How you feel when something bothers you."},
  {"palabra":"drive","descripcion":"To control a car and make it move."},
  {"palabra":"someone","descripcion":"A person you do not know or name."},
  {"palabra":"crazy","descripcion":"When something feels very strange or too much."},
  {"palabra":"apologize","descripcion":"To say sorry when you do something wrong."},
  {"palabra":"nervous","descripcion":"How you feel when you are worried or scared."},
  {"palabra":"upset","descripcion":"Feeling sad or unhappy about something."},
  {"palabra":"shake","descripcion":"To move something back and forth quickly."},
  {"palabra":"sweat","descripcion":"Water that comes out of your skin when you are hot."},
  {"palabra":"tantrum","descripcion":"When a child cries and gets very angry."},
  {"palabra":"scream","descripcion":"To shout very loudly."},
  {"palabra":"pout","descripcion":"To push your lips out when you are unhappy."},
  {"palabra":"unhappy","descripcion":"Feeling sad or not joyful."},
  {"palabra":"proud","descripcion":"Feeling happy about something you did well."},
  {"palabra":"hug","descripcion":"To hold someone with your arms to show love."},
  {"palabra":"rant","descripcion":"To speak loudly because you are angry."},
  {"palabra":"calm down","descripcion":"To stop feeling angry or upset."},
  {"palabra":"pull","descripcion":"To move something toward you."},
  {"palabra":"automatic","descripcion":"A machine that works by itself."},
  {"palabra":"embarrassed","descripcion":"Feeling shy or uncomfortable."},
  {"palabra":"stand out","descripcion":"To be easy to notice because you are different."},
  {"palabra":"stressful","descripcion":"Something that makes you feel worried."},
  {"palabra":"lucky","descripcion":"Feeling happy because something good happened."},
  {"palabra":"strict","descripcion":"Someone who follows rules very carefully."},
  {"palabra":"shy","descripcion":"Feeling quiet and nervous with others."},
  {"palabra":"courage","descripcion":"Being brave even when you feel scared."},
  {"palabra":"lost","descripcion":"Not knowing where you are."},
  {"palabra":"relieved","descripcion":"Feeling better after worrying."},
  {"palabra":"follow","descripcion":"To go after someone."},
  {"palabra":"happy","descripcion":"Feeling good and joyful."},
  {"palabra":"hurt","descripcion":"To cause pain or sadness."},
  {"palabra":"frustrated","descripcion":"Feeling upset when things do not work."},
  {"palabra":"anxious","descripcion":"Feeling worried or nervous."},
  {"palabra":"jealous","descripcion":"Feeling bad because someone has something you want."},
  {"palabra":"hopeful","descripcion":"Feeling good about the future."},

  {"palabra":"space probe","descripcion":"A machine sent into space to explore."},
  {"palabra":"station","descripcion":"A place where astronauts live in space."},
  {"palabra":"gravity","descripcion":"The force that pulls things to the ground."},
  {"palabra":"experiment","descripcion":"A test to learn something new."},
  {"palabra":"GPS","descripcion":"A system that helps you find places."},
  {"palabra":"observe","descripcion":"To look at something carefully."},
  {"palabra":"constellation","descripcion":"A group of stars in the sky."},
  {"palabra":"Milky Way","descripcion":"The galaxy where Earth is."},
  {"palabra":"solar system","descripcion":"The sun and all the planets around it."},
  {"palabra":"planet","descripcion":"A big object that goes around a star."},
  {"palabra":"spacecraft","descripcion":"A vehicle that travels in space."},
  {"palabra":"launch","descripcion":"To send something into space."},
  {"palabra":"satellite","descripcion":"An object that moves around a planet."},
  {"palabra":"astronaut","descripcion":"A person who travels to space."},
  {"palabra":"surface","descripcion":"The outside part of something."},
  {"palabra":"land","descripcion":"To arrive safely on the ground."},
  {"palabra":"atmosphere","descripcion":"The air around a planet."},
  {"palabra":"on board","descripcion":"Inside a vehicle."},
  {"palabra":"orbit","descripcion":"To move around a planet."},
  {"palabra":"disappointed","descripcion":"Feeling sad because something went wrong."},
  {"palabra":"float","descripcion":"To move without falling."},
  {"palabra":"translate","descripcion":"To change words into another language."},
  {"palabra":"ring","descripcion":"A circle that goes around a planet."},
  {"palabra":"universe","descripcion":"Everything that exists in space."},
  {"palabra":"asteroid","descripcion":"A rock that moves in space."},
  {"palabra":"seatbelt","descripcion":"A belt that keeps you safe in a car."},
  {"palabra":"poison","descripcion":"Something that can make you very sick."},
  {"palabra":"space","descripcion":"The area beyond Earth."},
  {"palabra":"galaxy","descripcion":"A huge group of stars."},
  {"palabra":"cash","descripcion":"Money in coins or bills."},
  {"palabra":"card","descripcion":"A plastic card to pay for things."},
  {"palabra":"discount","descripcion":"A lower price."},
  {"palabra":"author","descripcion":"A person who writes books."},
  {"palabra":"cover","descripcion":"The front of a book."},
  {"palabra":"price","descripcion":"How much something costs."},
  {"palabra":"on sale","descripcion":"Something that costs less than usual."},
  {"palabra":"title","descripcion":"The name of a book."},

  {"palabra":"invention","descripcion":"Something new that someone created."},
  {"palabra":"Internet","descripcion":"A place online to find information."},
  {"palabra":"allow","descripcion":"To let someone do something."},
  {"palabra":"connect","descripcion":"To join or link things together."},
  {"palabra":"search","descripcion":"To look for information."},
  {"palabra":"engine","descripcion":"A machine that makes things move."},
  {"palabra":"technology","descripcion":"Tools made to help people."},
  {"palabra":"screen","descripcion":"The flat part you look at on a device."},
  {"palabra":"mobile device","descripcion":"A small device you can carry."},
  {"palabra":"smartphone","descripcion":"A phone that can use apps."},
  {"palabra":"drone","descripcion":"A flying machine without a pilot."},
  {"palabra":"sensor","descripcion":"A tool that detects things."},
  {"palabra":"software","descripcion":"Programs on a computer."},
  {"palabra":"program","descripcion":"Instructions for a computer."},
  {"palabra":"app","descripcion":"A small program on a phone."},
  {"palabra":"animation","descripcion":"Moving pictures like cartoons."},
  {"palabra":"image","descripcion":"A picture."},
  {"palabra":"selfie","descripcion":"A photo of yourself."},
  {"palabra":"display","descripcion":"A show or screen."},
  {"palabra":"manufacturer","descripcion":"A person or company that makes things."},
  {"palabra":"owner","descripcion":"A person who has something."},
  {"palabra":"female","descripcion":"A girl or woman."},
  {"palabra":"human","descripcion":"A person."},
  {"palabra":"memory","descripcion":"The ability to remember."},
  {"palabra":"natural","descripcion":"Something not made by people."},
  {"palabra":"eyebrow","descripcion":"Hair above your eye."},
  {"palabra":"facial","descripcion":"Related to the face."},
  {"palabra":"expression","descripcion":"A look on your face."},
  {"palabra":"react","descripcion":"How you respond to something."},
  {"palabra":"puzzled","descripcion":"Feeling confused."},
  {"palabra":"body language","descripcion":"Using your body to communicate."}
]
;

        this.currentWord = '';
        this.currentDescription = '';
        this.playerInput = [];
        this.currentPosition = 0;
        this.wrongGuesses = 0;
        this.maxWrongGuesses = 6;
        this.gameOver = false;
    }

    init() {
        this.currentWord = '';
        this.currentDescription = '';
        this.playerInput = [];
        this.currentPosition = 0;
        this.wrongGuesses = 0;
        this.gameOver = false;
    }

    create() {
        const width = this.cameras.main.width;
        
        this.selectRandomWord();
        
        this.add.text(width / 2, 30, 'HANGMAN', {
            fontSize: '32px',
            color: '#333333',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        this.errorText = this.add.text(width / 2, 70, `Mistakes: ${this.wrongGuesses}/${this.maxWrongGuesses}`, {
            fontSize: '20px',
            color: '#FF6B6B'
        }).setOrigin(0.5);

        this.wordDisplay = this.add.text(width / 2, 450, '', {
            fontSize: '16px',
            color: '#FFD93D',
            fontStyle: 'bold',
            letterSpacing: 4,
            stroke: '#333333',
            strokeThickness: 2
        }).setOrigin(0.5);

        this.positionText = this.add.text(width / 2, 520, 'Position: 1', {
            fontSize: '18px',
            color: '#333333'
        }).setOrigin(0.5);

        this.hintText = this.add.text(width / 2, 555, 'SPACE = space | + = hint', {
            fontSize: '16px',
            color: '#FFD93D'
        }).setOrigin(0.5);

        const repeatWordButton = this.add.rectangle(width / 2 - 110, 590, 200, 40, 0x6C63FF)
            .setInteractive({ useHandCursor: true });

        this.add.text(width / 2 - 110, 590, '🔊 REPEAT WORD', {
            fontSize: '16px',
            color: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        repeatWordButton.on('pointerover', () => {
            repeatWordButton.setFillStyle(0x5A52E0);
        });

        repeatWordButton.on('pointerout', () => {
            repeatWordButton.setFillStyle(0x6C63FF);
        });

        repeatWordButton.on('pointerdown', () => {
            this.speakWord();
        });

        const hintButton = this.add.rectangle(width / 2 + 110, 590, 200, 40, 0x6C63FF)
            .setInteractive({ useHandCursor: true });

        this.add.text(width / 2 + 110, 590, '💡 GET HINT', {
            fontSize: '16px',
            color: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        hintButton.on('pointerover', () => {
            hintButton.setFillStyle(0x5A52E0);
        });

        hintButton.on('pointerout', () => {
            hintButton.setFillStyle(0x6C63FF);
        });

        hintButton.on('pointerdown', () => {
            this.speakHint();
        });

        this.hangmanGraphics = this.add.graphics();
        this.drawHangmanBase();

        this.updateWordDisplay();
        this.updatePosition();
        
        this.input.keyboard.removeAllListeners();
        
        this.input.keyboard.on('keydown', (event) => {
            if (this.gameOver) return;
            
            const key = event.key.toUpperCase();
            
            if (event.key === '+' || event.key === '=') {
                this.speakHint();
                return;
            }
            
            if (event.code === 'Space') {
                this.enterLetter(' ');
                return;
            }
            
            if (key.length === 1 && key >= 'A' && key <= 'Z') {
                this.enterLetter(key);
            }
        });

        this.time.delayedCall(500, () => {
            this.speakWord();
        });
    }

    selectRandomWord() {
        const randomIndex = Phaser.Math.Between(0, this.wordDatabase.length - 1);
        const wordData = this.wordDatabase[randomIndex];
        this.currentWord = wordData.palabra.toUpperCase();
        this.currentDescription = wordData.descripcion;
    }

    speakWord() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(this.currentWord);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
            
            const voices = window.speechSynthesis.getVoices();
            const femaleVoice = voices.find(voice => 
                voice.lang.includes('en') && 
                (voice.name.toLowerCase().includes('female') || 
                 voice.name.toLowerCase().includes('woman') ||
                 voice.name.toLowerCase().includes('zira') ||
                 voice.name.toLowerCase().includes('samantha') ||
                 voice.name.toLowerCase().includes('karen') ||
                 voice.name.toLowerCase().includes('victoria'))
            );
            
            if (femaleVoice) {
                utterance.voice = femaleVoice;
            }
            
            window.speechSynthesis.speak(utterance);
        } else {
            console.log('Text-to-Speech is not available in this browser');
        }
    }

    speakHint() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(this.currentDescription);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
            
            const voices = window.speechSynthesis.getVoices();
            const femaleVoice = voices.find(voice => 
                voice.lang.includes('en') && 
                (voice.name.toLowerCase().includes('female') || 
                 voice.name.toLowerCase().includes('woman') ||
                 voice.name.toLowerCase().includes('zira') ||
                 voice.name.toLowerCase().includes('samantha') ||
                 voice.name.toLowerCase().includes('karen') ||
                 voice.name.toLowerCase().includes('victoria'))
            );
            
            if (femaleVoice) {
                utterance.voice = femaleVoice;
            }
            
            window.speechSynthesis.speak(utterance);
        } else {
            console.log('Text-to-Speech is not available in this browser');
        }
    }

    enterLetter(letter) {
        if (this.currentPosition >= this.currentWord.length) {
            return;
        }

        const correctLetter = this.currentWord[this.currentPosition];
        
        if (letter === correctLetter) {
            this.flashMessage('Correct!', 0x4CAF50);
            this.playerInput[this.currentPosition] = letter;
            this.currentPosition++;
            this.updateWordDisplay();
            this.updatePosition();
            this.checkWin();
        } else {
            this.flashMessage('Wrong letter', 0xFF6B6B);
            this.wrongGuesses++;
            this.errorText.setText(`Mistakes: ${this.wrongGuesses}/${this.maxWrongGuesses}`);
            this.drawHangmanPart();
            this.checkLose();
        }
    }

    updateWordDisplay() {
        let display = '';
        for (let i = 0; i < this.currentWord.length; i++) {
            if (this.playerInput[i]) {
                if (this.playerInput[i] === ' ') {
                    display += '[-] ';
                } else {
                    display += '[' + this.playerInput[i] + '] ';
                }
            } else if (i === this.currentPosition) {
                if (this.currentWord[i] === ' ') {
                    display += '[_] ';
                } else {
                    display += '[_] ';
                }
            } else {
                if (this.currentWord[i] === ' ') {
                    display += '[ ] ';
                } else {
                    display += '[ ] ';
                }
            }
        }
        this.wordDisplay.setText(display.trim());
        
        this.tweens.add({
            targets: this.wordDisplay,
            scaleX: 1.1,
            scaleY: 1.1,
            duration: 100,
            yoyo: true,
            ease: 'Power2'
        });
    }

    updatePosition() {
        if (this.currentPosition < this.currentWord.length) {
            this.positionText.setText(`Position: ${this.currentPosition + 1} of ${this.currentWord.length}`);
        } else {
            this.positionText.setText(`Complete!`);
        }
    }

    flashMessage(text, color) {
        const width = this.cameras.main.width;
        const message = this.add.text(width / 2, 400, text, {
            fontSize: '24px',
            color: '#ffffff',
            backgroundColor: Phaser.Display.Color.IntegerToColor(color).rgba,
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5);

        this.tweens.add({
            targets: message,
            alpha: 0,
            duration: 1000,
            delay: 500,
            onComplete: () => {
                message.destroy();
            }
        });
    }

    drawHangmanBase() {
        const g = this.hangmanGraphics;
        g.lineStyle(3, 0x333333);
        
        g.strokeRect(100, 100, 200, 250);
    }

    drawHangmanPart() {
        const g = this.hangmanGraphics;
        g.lineStyle(4, 0xFF6B6B);

        switch(this.wrongGuesses) {
            case 1:
                g.beginPath();
                g.arc(200, 150, 20, 0, Math.PI * 2);
                g.strokePath();
                break;
            case 2:
                g.lineBetween(200, 170, 200, 250);
                break;
            case 3:
                g.lineBetween(200, 190, 160, 220);
                break;
            case 4:
                g.lineBetween(200, 190, 240, 220);
                break;
            case 5:
                g.lineBetween(200, 250, 160, 290);
                break;
            case 6:
                g.lineBetween(200, 250, 240, 290);
                break;
        }

        this.cameras.main.shake(200, 0.005);
    }

    checkWin() {
        if (this.currentPosition >= this.currentWord.length) {
            this.gameOver = true;
            window.speechSynthesis.cancel();
            
            this.time.delayedCall(500, () => {
                this.scene.start('WinScene');
            });
        }
    }

    checkLose() {
        if (this.wrongGuesses >= this.maxWrongGuesses) {
            this.gameOver = true;
            window.speechSynthesis.cancel();
            
            this.wordDisplay.setText(this.currentWord);
            this.wordDisplay.setColor('#e74c3c');
            
            this.time.delayedCall(1500, () => {
                this.scene.start('LoseScene', { word: this.currentWord });
            });
        }
    }
}
