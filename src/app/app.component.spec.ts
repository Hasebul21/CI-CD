import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent (Calculator)', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],   // ✅ standalone component goes in imports
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the calculator component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default title "Simple Calculator"', () => {
    expect(component.title).toBe('Simple Calculator');
  });

  it('should append numbers to currentInput', () => {
    component.append('5');
    component.append('3');
    expect(component.currentInput).toBe('53');
  });

  it('should clear currentInput and result', () => {
    component.append('9');
    component.result = '9';
    component.clear();
    expect(component.currentInput).toBe('');
    expect(component.result).toBe('');
  });

  it('should calculate and set result equal to currentInput (dummy eval)', () => {
    component.currentInput = '12+7';
    component.calculate();
    expect(component.result).toBe('12+7'); // since calculate just echoes input
  });
});
