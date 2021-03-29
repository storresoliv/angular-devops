import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-devops'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular devops');
  });

  it('should render subtitle', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.container--subtitle').textContent).toContain('it\'s a simple web application');
  });

  it('should get name placeholder', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
    expect(app.namePlaceholder).toEqual('nombre');
  });

  it('should get email placeholder', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
    expect(app.emailPlaceholder).toEqual('correo');
  });

  it('should get send button text', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('.button--success').textContent).toContain('ENVIAR');
  });
});
