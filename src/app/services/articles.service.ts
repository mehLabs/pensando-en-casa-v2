import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../models/article';

const mockArticles = [
  {
    id: 0,
    title: 'Colchón',
    subtitle: '$1500',
    description: 'Excelente colchón de una plaza a precio de remate.',
    imgs: [
      'https://firebasestorage.googleapis.com/v0/b/pec-2-c5887.appspot.com/o/colchon.webp?alt=media',
      'https://firebasestorage.googleapis.com/v0/b/pec-2-c5887.appspot.com/o/colchon.webp?alt=media',
      'https://firebasestorage.googleapis.com/v0/b/pec-2-c5887.appspot.com/o/colchon.webp?alt=media',
      'https://firebasestorage.googleapis.com/v0/b/pec-2-c5887.appspot.com/o/colchon.webp?alt=media',
      'https://firebasestorage.googleapis.com/v0/b/pec-2-c5887.appspot.com/o/sillon.jpg?alt=media',
    ],
    price: 1500,
  },
  {
    id: 1,
    title: 'Sillón',
    subtitle: '$9500',
    description:
      'Para 2 personas, muy cómodo y con fundas lavables para los almohadones.',
    imgs: [
      'https://firebasestorage.googleapis.com/v0/b/pec-2-c5887.appspot.com/o/sillon.jpg?alt=media',
    ],
    price: 1500,
  },
  {
    id: 2,
    title: 'Calefactor',
    subtitle: '$9500',
    description: 'Calefactor a gas de bajo consumo, en oferta.',
    imgs: [
      'https://firebasestorage.googleapis.com/v0/b/pec-2-c5887.appspot.com/o/calefactor.jpg?alt=media',
    ],
    price: 1500,
  },
  {
    id: 3,
    title: 'Calefactor',
    subtitle: '$8500',
    description: 'Calefactor grande a gas de bajo consumo, en oferta.',
    imgs: [
      'https://firebasestorage.googleapis.com/v0/b/pec-2-c5887.appspot.com/o/calefactor3.jpg?alt=media',
    ],
    price: 1500,
  },
  {
    id: 4,
    title: 'Sillon de 3 cuerpos',
    subtitle: '$7500',
    description: 'Sillon grande en oferta.',
    imgs: [
      'https://firebasestorage.googleapis.com/v0/b/pec-2-c5887.appspot.com/o/sillon2.webp?alt=media',
    ],
    price: 1500,
  },
  {
    id: 5,
    title: 'Calefactor',
    subtitle: '$7500',
    description: 'Calefactor eléctrico de bajo consumo, en oferta.',
    imgs: [
      'https://firebasestorage.googleapis.com/v0/b/pec-2-c5887.appspot.com/o/calefactor2.jpg?alt=media',
    ],
    price: 1500,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private articles = new BehaviorSubject<Article[]>(mockArticles);

  constructor() {}

  getArticles(): Observable<Article[]> {
    return this.articles.asObservable();
  }

  getArticle(id: string | number) {
    let newId: number;
    if (typeof id === 'string') {
      newId = Number.parseInt(id);
    } else {
      newId = id;
    }

    return this.articles.value.find((article) => article.id === newId);
  }

  getArticlesByIds(ids: number[]) {
    const articles: Article[] = this.articles.value;
    if (ids.length === 0) {
      return articles;
    }
    let idsObject: any = {};
    for (let id of ids) {
      if (!idsObject[id]) {
        idsObject[id] = true;
      }
    }

    return articles.filter((article) => {
      if (article.id) return idsObject[article.id];
    });
  }
}
