let audioCtx: AudioContext | null = null;
let dur = 0.3;

export const notePlay = (freq = 600) => {
    if (audioCtx === null) {
        audioCtx = new AudioContext({ latencyHint: 2 });
      }
    
    let osc = audioCtx.createOscillator();
    let gainNode = audioCtx.createGain();
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.01);
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + dur);
    
    osc.type = 'sawtooth';
    osc.frequency.value = (Math.random() * freq) / 3;
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + dur);
}