import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrerenderExample } from './prerender-example';

describe('PrerenderExample', () => {
  let component: PrerenderExample;
  let fixture: ComponentFixture<PrerenderExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrerenderExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrerenderExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
