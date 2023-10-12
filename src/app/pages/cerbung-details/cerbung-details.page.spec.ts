import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerbungDetailsPage } from './cerbung-details.page';

describe('CerbungDetailsPage', () => {
  let component: CerbungDetailsPage;
  let fixture: ComponentFixture<CerbungDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CerbungDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
