import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerExample } from './server-example';

describe('ServerExample', () => {
  let component: ServerExample;
  let fixture: ComponentFixture<ServerExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
