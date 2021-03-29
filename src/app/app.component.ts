import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _title = 'Angular devops';
  private _subtitle = "it's a simple web application";
  private _namePlaceholder = 'nombre';
  private _emailPlaceholder = 'correo';
  private _sendButtonText = 'ENVIAR';

  public get title() {
    return this._title;
  }

  public get subtitle(): string {
    return this._subtitle;
  }

  public get namePlaceholder(): string {
    return this._namePlaceholder;
  }

  public get emailPlaceholder(): string {
    return this._emailPlaceholder;
  }

  public get sendButtonText(): string {
    return this._sendButtonText;
  }
}
