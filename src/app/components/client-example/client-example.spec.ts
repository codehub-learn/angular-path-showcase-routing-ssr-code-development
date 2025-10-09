import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientExample } from './client-example';

describe('ClientExample', () => {
  let component: ClientExample;
  let fixture: ComponentFixture<ClientExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
