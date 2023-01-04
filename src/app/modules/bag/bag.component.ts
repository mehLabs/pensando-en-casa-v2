import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/modules/bag/components/dialog/dialog.component';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { BagService } from 'src/app/services/bag.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
})
export class BagComponent {
  articlesInBag: Article[] = [];

  articlesObject: any = {};

  checkout = true;

  constructor(
    private articlesService: ArticlesService,
    private bagService: BagService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  getTotal(articles: Article[]) {
    let total = 0;
    for (let article of articles) {
      total += article.price;
    }
    return total;
  }

  removeItem(id: number) {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Eliminar de la bolsa',
        content:
          '¿Está seguro que desea eliminar este artículo de su bolsa de compras?',
        accept: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result);
      if (result === true) {
        this.bagService.removeFromBag(id);
        const index = this.articlesObject[id];
        this.articlesInBag.splice(index, 1);

        this.runIndexTable();
        this.snackBar.open('Artículo removido de su bolsa de compras', 'Ok');
      }
    });
  }

  buy() {
    this.checkout = !this.checkout;
  }

  ngOnInit(): void {
    const articlesLocalStorage = this.bagService.getAllItems();
    if (articlesLocalStorage.length > 0) {
      this.articlesInBag =
        this.articlesService.getArticlesByIds(articlesLocalStorage);
      console.log(this.articlesInBag);

      this.runIndexTable();
    }
  }

  runIndexTable() {
    for (let i = 0; i < this.articlesInBag.length; i++) {
      let article = this.articlesInBag[i];
      this.articlesObject[article.id] = i;
    }
  }
}
