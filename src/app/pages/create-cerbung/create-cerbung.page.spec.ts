import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCerbungPage } from './create-cerbung.page';

describe('CreateCerbungPage', () => {
  let component: CreateCerbungPage;
  let fixture: ComponentFixture<CreateCerbungPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateCerbungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
