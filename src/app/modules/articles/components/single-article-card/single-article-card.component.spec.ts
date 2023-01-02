import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleCardComponent } from './single-article-card.component';

describe('SingleArticleCardComponent', () => {
  let component: SingleArticleCardComponent;
  let fixture: ComponentFixture<SingleArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleArticleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
