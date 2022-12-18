import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  JSON = JSON;
  @Input() elements: any[] = [];
  @Output() searched: EventEmitter<number[]> = new EventEmitter<number[]>();

  elementsWords: { id: any; words: any[] }[] = [];
  possibleWords: string[] = [''];
  filteredWords?: Observable<string[]>;

  search: FormControl = new FormControl<string>('');

  constructor() {}

  ngOnInit(): void {
    const keys = Object.keys(this.elements[0]);
    let i = 0;
    this.elements.forEach((element) => {
      this.elementsWords.push({ id: element.id, words: [''] });
      keys.forEach((key) => {
        const elementToPush = element[key];
        if (
          (typeof elementToPush === 'string' && elementToPush.length > 0) ||
          typeof elementToPush === 'number'
        ) {
          this.elementsWords[i].words.push(elementToPush);
          this.possibleWords.push(element[key]);
        }
      });
      i++;
    });

    this.filteredWords = this.search.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.filteredWords.subscribe((words) => {
      let foundWords = [];
      allObjects: for (
        let index = 0;
        index < this.elementsWords.length;
        index++
      ) {
        const element = this.elementsWords[index];
        allWords: for (let word of words) {
          if (element.words.includes(word)) {
            foundWords.push(element.id);
            break allWords;
          }
        }
      }
      this.searched.emit(foundWords);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.possibleWords.filter((word: number | string) =>
      typeof word === 'string'
        ? word.toLowerCase().includes(filterValue)
        : (word + '').includes(filterValue)
    );
  }
}
