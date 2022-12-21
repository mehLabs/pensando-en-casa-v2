import { Component } from '@angular/core';

type Column = {
  name: string;
  title: string;
};
type Category = {
  id: number;
  name: string;
  title: string;
};
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent {
  constructor() {}
  categories: Category[] = [{ id: 0, name: 'sillon', title: 'Sillones' }];
  originalCategories = [{ id: 0, name: 'sillon', title: 'Sillones' }];
  sorting() {}

  columns: Column[] = [
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'Categoría' },
    { name: 'title', title: 'Título' },
  ];

  getColumnNames(columns: Column[]) {
    return columns.map((column) => column.name);
  }

  cleanOutput(element: any) {
    return element == false && element !== 0 ? '-' : element;
  }

  search(found: any[]) {
    this.categories = this.originalCategories;
    let ordersFiltered: Category[] = [];
    found.forEach((id) => {
      ordersFiltered.push(
        this.categories.filter((category: Category) => category.id === id)[0]
      );
    });
    this.categories = ordersFiltered;
  }
}
