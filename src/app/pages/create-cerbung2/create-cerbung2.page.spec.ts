import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCerbung2Page } from './create-cerbung2.page';

describe('CreateCerbung2Page', () => {
  let component: CreateCerbung2Page;
  let fixture: ComponentFixture<CreateCerbung2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateCerbung2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
