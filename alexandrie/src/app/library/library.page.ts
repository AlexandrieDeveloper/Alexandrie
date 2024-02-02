import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { BookReaderService } from '../book-reader.service';

export interface Book {
  author: string, title: string; audioUrl: string; img: string;
}

@Component({
  selector: 'app-library',
  templateUrl: 'library.page.html',
  styleUrls: ['library.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class libraryPage {
  books: Book[] = [
    { author: 'Lewis Carroll', title: 'Alice au pays des merveilles', audioUrl: '/assets/audio/chapitre1_alice-au-pays-des-merveilles.mp3', img: '/assets/img/alice.jfif' },
    { author: 'Jules Verne', title: '20 000 lieues sous les mers', audioUrl: '/assets/audio/vingt-mille-lieues-sous-les-mers.mp3',  img: '/assets/img/20000_lieux_sous_les_mers.jpg' },
    { author: 'Alexandre Dumas', title: 'Les Trois Mousquetaires', audioUrl: 'https://drive.google.com/file/d/1c73Jql5YsDRhK5Tqg8LIbOmWCJbfGx1e/view?usp=drive_link',  img: '/assets/img/3_mousquetaires.jfif' },
  ];

  constructor(private bookReaderService: BookReaderService) {
    
  }
 
  selectBook(book: Book) {
    this.bookReaderService.selectBook(book);
  }
}
