// Audio Manager - Quản lý âm thanh của game
class SoundManager {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.isMuted = false;
  }

  // Âm thanh khi nhấn nút/click
  playClick() {
    if (this.isMuted) return;
    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    
    osc.start(now);
    osc.stop(now + 0.1);
  }

  // Âm thanh khi xóa hoa quả thành công
  playSuccess() {
    if (this.isMuted) return;
    const now = this.audioContext.currentTime;
    const frequencies = [523, 659, 784]; // C-E-G chord
    
    frequencies.forEach((freq, index) => {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      
      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      
      osc.start(now + index * 0.05);
      osc.stop(now + 0.3);
    });
  }

  // Âm thanh khi combo tăng
  playCombo() {
    if (this.isMuted) return;
    const now = this.audioContext.currentTime;
    
    for (let i = 0; i < 3; i++) {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      
      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      
      osc.frequency.setValueAtTime(400 + i * 200, now + i * 0.05);
      osc.frequency.exponentialRampToValueAtTime(600 + i * 200, now + 0.15 + i * 0.05);
      gain.gain.setValueAtTime(0.15, now + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15 + i * 0.05);
      
      osc.start(now + i * 0.05);
      osc.stop(now + 0.15 + i * 0.05);
    }
  }

  // Âm thanh khi hết game
  playGameOver() {
    if (this.isMuted) return;
    const now = this.audioContext.currentTime;
    
    const frequencies = [400, 300, 200, 100];
    frequencies.forEach((freq, index) => {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      
      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      
      osc.frequency.setValueAtTime(freq, now + index * 0.1);
      gain.gain.setValueAtTime(0.2, now + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3 + index * 0.1);
      
      osc.start(now + index * 0.1);
      osc.stop(now + 0.3 + index * 0.1);
    });
  }

  // Âm thanh khi được điểm bonus
  playBonus() {
    if (this.isMuted) return;
    const now = this.audioContext.currentTime;
    
    for (let i = 0; i < 4; i++) {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      
      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      
      osc.frequency.setValueAtTime(600 + i * 150, now + i * 0.08);
      gain.gain.setValueAtTime(0.15, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2 + i * 0.08);
      
      osc.start(now + i * 0.08);
      osc.stop(now + 0.2 + i * 0.08);
    }
  }

  // Âm thanh khi không hợp lệ
  playError() {
    if (this.isMuted) return;
    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.15);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    
    osc.start(now);
    osc.stop(now + 0.15);
  }

  // Toggle âm thanh
  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

// Khởi tạo Sound Manager
const soundManager = new SoundManager();
