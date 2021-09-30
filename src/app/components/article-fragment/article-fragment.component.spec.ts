import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFragmentComponent } from './article-fragment.component';

describe('ArticleComponent', () => {
  let component: ArticleFragmentComponent;
  let fixture: ComponentFixture<ArticleFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleFragmentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
