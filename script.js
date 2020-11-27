import * as Tone from 'tone'
import MarioSynth1 from './mario/synth1.json'
import MarioSynth2 from './mario/synth2.json'
import MarioBass1 from './mario/bass1.json'
import MarioBass2 from './mario/bass2.json'
import 'regenerator-runtime/runtime'

const pulseOptions = {
    oscillator: {
        type: "pulse"
    },
    envelope:{
        release: 0.07
    }
}
const triangleOptions = {
    oscillator: {
        type: "triangle"
    },
    envelope:{
        release: 0.07
    }
    }
const squareOptions = {
    oscillator: {
        type: "square"
    },
    envelope: {
        release: 0.07
    }
}

const pulseSynth = new Tone.Synth(pulseOptions).toDestination()
const squareSynth = new Tone.Synth(squareOptions).toDestination()
const triangleSynth = new Tone.Synth(triangleOptions).toDestination()
const noiseSynth = new Tone.NoiseSynth().toDestination()

let pulsePart = new Tone.Part()
let squarePart = new Tone.Part()
let trianglePart = new Tone.Part()
let noisePart = new Tone.Part() 

const song = {
    'pulse': MarioSynth1,
    'square': MarioSynth2,
    'triangle': MarioBass1,
    'noise': MarioBass2,
    'length': '85'
}  

Tone.Transport.bpm.value = 100

function setSong() {
    if(song.square != null) {
        squarePart = new Tone.Part((time, note) => {
        squareSynth.triggerAttackRelease(note.name, note.duration, now + time, note.velocity) }, song.square)
    }
    if(song.pulse != null) {
        pulsePart = new Tone.Part((time, note) => {
        pulseSynth.triggerAttackRelease(note.name, note.duration, now + time, note.velocity) }, song.pulse)
    }
    if(song.triangle != null) {
        trianglePart = new Tone.Part((time, note) => {
        triangleSynth.triggerAttackRelease(note.name, note.duration, now + time, note.velocity) }, song.triangle)
    }
    if(song.noise != null) {
        noisePart = new Tone.Part((time, note) => {
        noiseSynth.triggerAttackRelease(note.name, note.duration, now + time, note.velocity) }, song.noise)
    }                               
}

function start() {

    if(song.pulse != null)    pulsePart.start(0);
    if(song.square != null)   squarePart.start(0);
    if(song.triangle != null) trianglePart.start(0);
    if(song.noise != null)    noisePart.start(0); 
  
}


function stop() {

    if(song.pulse != null)    pulsePart.stop(0);
    if(song.square != null)   squarePart.stop(0);
    if(song.triangle != null) trianglePart.stop(0);
    if(song.noise != null)    noisePart.stop(0);

}

const now = Tone.now()
setSong()

document.querySelector("button").addEventListener('click', () => {
    if (Tone.Transport.state == 'started') {
        Tone.Transport.stop()
        stop()
    } else {
        Tone.Transport.start('+0.1', 0)
        start()
        Tone.Transport.stop('+' + song.length)
    }
})

document.querySelector("button").addEventListener("click", async () => {
    await Tone.start();
})


