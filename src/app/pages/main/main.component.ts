import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  subtitle: string = '';
  toSubtitle: string = 'Sabemos cómo hacerte feliz...';

  articles = [
    {
      title: 'Colchón',
      subtitle: '$1500',
      description: 'Excelente colchón de una plaza a precio de remate.',
      img: '../../../assets/colchon.webp',
      price: 1500,
    },
    {
      title: 'Sillón',
      subtitle: '$9500',
      description:
        'Para 2 personas, muy cómodo y con fundas lavables para los almohadones.',
      img: '../../../assets/sillon.jpg',
      price: 1500,
    },
    {
      title: 'Calefactor',
      subtitle: '$9500',
      description: 'Calefactor a gas de bajo consumo, en oferta.',
      img: '../../../assets/calefactor.jpg',
      price: 1500,
    },
    {
      title: 'Calefactor',
      subtitle: '$8500',
      description: 'Calefactor grande a gas de bajo consumo, en oferta.',
      img: '../../../assets/calefactor3.jpg',
      price: 1500,
    },
    {
      title: 'Sillon de 3 cuerpos',
      subtitle: '$7500',
      description: 'Sillon grande en oferta.',
      img: '../../../assets/sillon2.webp',
      price: 1500,
    },
    {
      title: 'Calefactor',
      subtitle: '$7500',
      description: 'Calefactor eléctrico de bajo consumo, en oferta.',
      img: '../../../assets/calefactor.jpg',
      price: 1500,
    },
  ];

  ngOnInit(): void {
    this.write(this.toSubtitle, 0);
  }

  write(word: string, position: number) {
    this.subtitle = this.subtitle + word.charAt(position);
    if (position < word.length) {
      setTimeout(() => {
        this.write(word, position + 1);
      }, 75);
    }
  }

  firstThree(all: any[]) {
    return all.filter((item, index) => index > 2);
  }
}
