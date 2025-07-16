import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentFixture } from '@angular/core/testing';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the title 'Simple Calculator'`, () => {
    expect(app.title).toEqual('Simple Calculator');
  });

  it('should start with empty currentInput and result', () => {
    expect(app.currentInput).toBe('');
    expect(app.result).toBe('');
  });

  it('should append values correctly', () => {
    app.append('1');
    app.append('+');
    app.append('2');
    expect(app.currentInput).toBe('1+2');
  });

  it('should clear input and result', () => {
    app.currentInput = '123';
    app.result = '456';
    app.clear();
    expect(app.currentInput).toBe('');
    expect(app.result).toBe('');
  });

  it('should calculate valid expression correctly', () => {
    app.currentInput = '1+2*3';
    app.calculate();
    expect(app.result).toBe('7');
  });

  it('should handle invalid expressions gracefully', () => {
    app.currentInput = '1++2';
    app.calculate();
    expect(app.result).toBe('Error');
  });

  it('should render title in h2 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Simple Calculator');
  });

  it('should render result after calculation', () => {
    app.currentInput = '2+3';
    app.calculate();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.result')?.textContent).toContain('5');
  });
});
