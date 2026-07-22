import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    fixture.detectChanges();
  });

  it('should render an accessible page-not-found heading', () => {
    const heading: HTMLHeadingElement | null = fixture.nativeElement.querySelector('h1');

    expect(heading?.textContent).toContain('Page not found');
  });
});
