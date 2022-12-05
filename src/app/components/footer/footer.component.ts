import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  links = [
    {
      title: 'Preguntas Frecuentes',
      link: '/preguntas',
    },
    {
      title: 'Políticas de privacidad',
      link: '/privacidad',
    },
    {
      title: 'Contáctanos',
      link: '/contacto',
    },
    {
      title: 'Nuestro Equipo',
      link: '/equipo',
    },
    {
      title: 'Formas de Envío',
      link: '/envios',
    },
  ];
}
