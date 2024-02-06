import { Component, ElementRef, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class Tab2Page implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.generateParticles();
  }

  generateParticles() {
    const container = this.el.nativeElement.querySelector('.particles-container');

    setInterval(() => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 6 + 3; // Taille aléatoire entre 2px et 7px
      const borderRadius = 40 + Math.random() * 200;
      const redRandom = 255; // Taille aléatoire entre 2px et 7px
      const greenRandom = 137 - (Math.random() * 60); // Taille aléatoire entre 2px et 7px
      const blueRandom = 19 + (Math.random() * 60); // Taille aléatoire entre 2px et 7px

      Object.assign(particle.style, {
        left: `${Math.random() * 100}%`, // Position de départ aléatoire en largeur
        bottom: '250px', // Départ du bas du conteneur
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${borderRadius}px`,
        opacity: Math.random(), // Opacité aléatoire pour plus de variété
        backgroundColor: `rgb(${redRandom},${greenRandom},${blueRandom})`
      });

      container.appendChild(particle);

      // Animation
      const duration = Math.random() * 3000 + 2000; // Durée aléatoire entre 2000ms et 5000ms
      const animation = particle.animate([
        { transform: 'translateY(0)', opacity: 1 },
        { transform: 'translateY(-10000%)', opacity: 0 }
      ], {
        duration: duration,
        easing: 'linear'
      });

      animation.onfinish = () => particle.remove(); // Nettoyage après l'animation
    }, 200); // Génère une nouvelle particule toutes les 200ms
  }

}
