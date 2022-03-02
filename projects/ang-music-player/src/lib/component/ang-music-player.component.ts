import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AudioPlyerOptions } from '../audioPlayer';

@Component({
  selector: 'ang-music-player',
  templateUrl: './ang-music-player.component.html',
  styleUrls: ['./ang-music-player.component.scss']
})
export class AngMusicPlayerComponent extends AudioPlyerOptions implements OnInit {
  @Input() width: any; 
  @Input() height: any; 
  @Input() backgroundColor: any; 
  @Input() audioTimeColor  = "rgb(255,255,255)";
  @Input() audioTitleColor = "rgb(255,255,255)"; 
  @Input() volumeSliderColor: any; 
  @Input() timeSliderColor = "rgb(255,255,255)";
  @Input() audioList :any = null;
  @Input() next = true;
  @Input() previous = true;
  @Input() shuffle = true;
  @Input() repeat = true;
  @Input() scrollTitle = false;
  @Input() playButtonColor = "rgb(255,255,255)";
  @Input() pauseButtonColor = "rgb(255,255,255)";
  
  @Input() previousButtonColor = "rgb(76, 130, 175)";
  @Input() repeatButtonColor = "rgb(76, 130, 175)";
  @Input() activeRepeatButtonColor = "rgb(76, 130, 175)";
  @Input() volumeButtonColor = "rgb(76, 130, 175)";
  @Input() muteButtonColor = "rgb(76, 130, 175)";
  @Output() nextEvent = new EventEmitter();
  @Output() previousEvent = new EventEmitter();
  @Output() repeatEvent = new EventEmitter();
  @Output() shuffleEvent = new EventEmitter();
  @Output() seekEvent = new EventEmitter();

  selectedAudio: any;
  currentAudioIndex = 0;
  repeatActive = false;
  isError = false;
  isShuffle = false;
  volumeBeforeMute: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.options();
    this.initiateAudioPlayer();
  }




  seekAudio(seekAudioValue: any) {
    if (this.audioVolume != 0) {
      this.isMute = false;
    }
    this.audioPlayer.nativeElement.currentTime = seekAudioValue.target.value;
    this.seekEvent.emit();
  }

/*   shuffleAudio() {
    this.isShuffle = !this.isShuffle;
    if (this.isShuffle) {
    let randomItem = Math.floor(Math.random() * this.audioList.length);
    console.log(randomItem);
    
    }
    this.shuffleEvent.emit();
  } */

  volumeChange(volume: { target: { value: number; }; }) {
    this.audioPlayer.nativeElement.volume = volume.target.value / 100;
  }

  muteAudio() {
    if (this.isMute) {
      this.audioPlayer.nativeElement.volume = 0.5;
      this.isMute = false;
    } else {
      this.audioPlayer.nativeElement.volume = 0;
      this.isMute = true;
    }
  }

  initiateAudioPlayer() {
    if (this.audioList.url=="") {
      this.isError = true;
    } else {
      this.selectedAudio = this.audioList;
    }
  }
}
