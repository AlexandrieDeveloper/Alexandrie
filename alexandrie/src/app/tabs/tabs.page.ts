import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, playSkipBack, playSkipForward, playCircle, reload } from 'ionicons/icons';
import { BookReaderService } from '../book-reader.service';
import { CommonModule } from '@angular/common';
import { Book } from '../library/library.page';
import { IonButton, IonContent, IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent, IonButton, IonItem, IonAvatar],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(public bookReaderService: BookReaderService) {
    addIcons({ triangle, ellipse, square, playSkipBack, playSkipForward, playCircle, reload});
    bookReaderService.bookSelected$.subscribe(book => this.selectBook(book));
  }

  selectedBook: Book | null = null;
  audio: HTMLAudioElement | null = null;
  remainingTime: string | null = null;

  selectBook(book: Book) {
    this.selectedBook = book;
    this.audio = new Audio(book.audioUrl);
    this.playAudio();

    this.audio.addEventListener('timeupdate', () => {
      const remaining = this.audio ? this.audio.duration - this.audio.currentTime : 0;
      this.remainingTime = this.formatTime(remaining);
    });
  }

  playAudio() {
    this.audio?.play();
  }

  pauseAudio() {
    this.audio?.pause();
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
