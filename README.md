# Ahorcado con IA (Hangman con Text-to-Speech)
Juego web 2D del clásico Ahorcado con pistas de voz para apoyar a Meli con sus estudios

## Descripción del Juego

El juego **Ahorcado con IA** es una versión moderna del clásico juego de palabras, donde:
- El jugador debe adivinar una palabra letra por letra
- Las pistas se proporcionan mediante **voz sintetizada** (Text-to-Speech)
- El jugador escucha la descripción de la palabra sin verla escrita
- Cada error dibuja una parte del ahorcado
- El objetivo es adivinar la palabra antes de completar el dibujo

## Configuración del Proyecto Phaser.js

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

```bash
npm install
```

### Ejecutar el Proyecto

```bash
npm start
```

El juego se abrirá en tu navegador en `http://localhost:1234`

### Compilar para Producción

```bash
npm run build
```

### Estructura del Proyecto

```
├── index.html           # Archivo HTML principal
├── package.json         # Dependencias y scripts
├── src/
│   ├── main.js         # Configuración de Phaser
│   └── scenes/
│       ├── BootScene.js    # Escena de carga inicial
│       ├── MenuScene.js    # Menú principal
│       ├── GameScene.js    # Escena principal del juego
│       ├── WinScene.js     # Pantalla de victoria
│       └── LoseScene.js    # Pantalla de derrota
```

## Cómo Jugar

1. **Inicio**: Al comenzar, escucharás automáticamente una pista de voz que describe la palabra a adivinar
2. **Adivinar**: Presiona las letras (A-Z) en tu teclado para adivinar
3. **Pistas**: 
   - Presiona **H** o haz clic en el botón **🔊 REPETIR PISTA** para escuchar la descripción nuevamente
4. **Aciertos**: Si la letra está en la palabra, se revelará en su posición
5. **Errores**: Si la letra NO está, se dibujará una parte del ahorcado
6. **Victoria**: Completa la palabra antes de 6 errores
7. **Derrota**: Si se completan las 6 partes del ahorcado, pierdes

## Características Principales

✅ **Text-to-Speech (TTS)** con Web Speech API
✅ **10 palabras** predefinidas con descripciones en español
✅ **Selección aleatoria** de palabras en cada partida
✅ **Dibujo progresivo** del ahorcado (6 partes)
✅ **Feedback visual** instantáneo (letras correctas/incorrectas)
✅ **Animaciones suaves** al revelar letras
✅ **Prevención de letras repetidas** sin penalización
✅ **Contador de errores** visible en todo momento
✅ **Pantallas de victoria y derrota** con opción de reiniciar
✅ **Interfaz responsive** y moderna

## Base de Datos de Palabras

El juego incluye 10 palabras:
- ELEFANTE
- COMPUTADORA
- GUITARRA
- DINOSAURIO
- MARIPOSA
- TORNADO
- ASTRONAUTA
- CHOCOLATE
- VOLCAN
- MEDICINA

Cada palabra tiene una descripción asociada que se reproduce por voz.

## Tecnologías Utilizadas
- **Phaser 3.60.0** - Framework de juegos HTML5
- **Parcel** - Bundler para desarrollo y compilación
- **Web Speech API** - Text-to-Speech nativo del navegador

## Notas Técnicas

- El juego NO requiere imágenes externas (usa gráficos generados por código)
- Funciona en navegadores modernos con soporte para Web Speech API
- El código está completamente modular y comentado
- Fácil de extender con más palabras o características
