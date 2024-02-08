import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { book, flame, square, playSkipBack, playSkipForward, playCircle, pauseCircle, reload } from 'ionicons/icons';
import { BookReaderService } from '../book-reader.service';
import { CommonModule } from '@angular/common';
import { Book } from '../library/library.page';
import { IonButton, IonContent, IonAvatar } from '@ionic/angular/standalone';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent, IonButton, IonItem, IonAvatar],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(public bookReaderService: BookReaderService, private router: Router) {
    addIcons({ book, flame, square, playSkipBack, playSkipForward, playCircle, pauseCircle, reload});
    bookReaderService.bookSelected$.subscribe(book => this.selectBook(book));

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event?.url === '/tabs/library' && !this.isBookPlaying) {
          console.log('aa')
          this.crackingFire?.pause();
        }
      }
    });

  }

  selectedBook: Book | null = null;
  audio: HTMLAudioElement | null = null;
  crackingFire: HTMLAudioElement | null = null;
  remainingTime: string | null = null;
  isBookPlaying: boolean = false;

  selectBook(book: Book) {
    if (this.audio) {
      this.pauseAudio();
      this.audio = null;
      this.crackingFire?.pause();
      this.crackingFire = null;
    }

    this.selectedBook = book;
    this.audio = new Audio(book.audioUrl);
    setTimeout(() => this.audio?.play(), 2000 ) ;
    this.playFire();

    this.audio.addEventListener('timeupdate', () => {
      const remaining = this.audio ? this.audio.duration - this.audio.currentTime : 0;
      this.remainingTime = this.formatTime(remaining);
    });

    this.audio.addEventListener('pause', () => {
      this.isBookPlaying = false;
    });
  
    this.audio.addEventListener('play', () => {
      this.isBookPlaying = true;
    });

    this.router.navigate(['/tabs/tab2']);
  }

  playFire() {
    // const lightingFire = new Audio('/assets/audio/lighting-fire.mp3');
    if (this.crackingFire === null) {
      console.log('aa')
      this.crackingFire = new Audio('assets/audio/fireAmplifie.mp3');
      this.crackingFire.loop = true;
      this.crackingFire.volume = 0.8;
    }
    // lightingFire.play();
    this.crackingFire.play();
  }

  playAudio() {
    this.audio?.play();
    this.playFire();
  }

  pauseAudio() {
    this.audio?.pause();
    this.crackingFire?.pause();
  }

  rewind30Seconds() {
    if (this.audio) {
      this.audio.currentTime = Math.max(0, this.audio.currentTime - 30);
    }
  }

  forward30Seconds() {
    if (this.audio) {
      this.audio.currentTime = Math.min(this.audio.duration, this.audio.currentTime + 30);
    }
  }

  private formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
