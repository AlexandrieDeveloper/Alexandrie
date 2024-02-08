import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (event) => {
    });

  }

  showRipple(event: MouseEvent) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    document.body.appendChild(ripple);
    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;
    setTimeout(() => {
      ripple.remove();
    }, 500);
  }
}
