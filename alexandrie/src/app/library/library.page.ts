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
    { author: 'XVIIe siècle, France', title: 'Le Masque de Fer', audioUrl: 'assets/audio/2_masque-de-fer.mp3', img: 'assets/img/2.jfif' },
    { author: '1764 - 1767, France', title: 'La Bête du Gévaudan', audioUrl: 'assets/audio/3_gevaudin.mp3',  img: 'assets/img/3.jfif' },
    { author: '1785, France', title: 'L\'Affaire du Collier de la Reine', audioUrl: 'assets/audio/1_le-collier-de-la-reine.mp3',  img: 'assets/img/1.jfif' },
    { author: '1815, France', title: 'L\'Évasion de la Bastille par le Comte de Lavalette', audioUrl: 'assets/audio/4_evasion_bastille.mp3',  img: 'assets/img/4.jfif' },
    { author: '1785 - 1788, France', title: 'L\'Expédition de La Pérouse', audioUrl: 'assets/audio/10_bateau.mp3',  img: 'assets/img/10.jfif' },
    { author: '1894 - 1906, France', title: 'L\'Affaire Dreyfus', audioUrl: 'assets/audio/8_captain.mp3',  img: 'assets/img/8.jfif' },
  ];

  constructor(private bookReaderService: BookReaderService) {
    
  }
 
  selectBook(book: Book) {
    this.bookReaderService.selectBook(book);
  }
}
