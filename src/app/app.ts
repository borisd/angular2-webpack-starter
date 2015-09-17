/// <reference path="../typings/_custom.d.ts" />

/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {RouteConfig, Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
  selector: 'app'
})
@View({
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  styles: [
    'main { width:50%; margin: 30px auto; font-size: 12px; }',
    'h2 { font-size: 15px; text-align: center; }',
    '.label { width: 100px; text-align: right; display: inline-block; }',
    'button { display: block; padding: 2px 10px; border-radius: 5px; margin: 5px 0 0 100px; }',
  ],
  template: `
  <main>
    <h2>The Angular2 Chat!</h2>

    <div>
      <span class="label">Your name</span>
      <input #name placeholder="Your name" />
    </div>

    <div>
      <span class="label">Message</span>
      <input #ref [value]="message" (keyup)="message = ref.value" placeholder="Message" />

      <button (click)="sendMessage(name.value)">Send</button>
    </div>

    <ul>
      <li *ng-for="#message of messages">{{ message }}</li>
    </ul>
  </main>
  `
})
export class App {

  constructor(public http: Http) {
    const BASE_URL = 'ws://echo.websocket.org';

    this.messages = [];
    this.message = '';

    this.ws = new WebSocket(BASE_URL);

    this.ws.onerror   = (evt) => this.messages.unshift(`Error: ${evt}`);
    this.ws.onmessage = (evt) => this.messages.unshift(evt.data);
    this.ws.onclose   = (evt) => this.messages.unshift("** Closed **");
    this.ws.onopen    = (evt) => this.messages.unshift("** Openned ***");

    this.sendMessage = (name) => {
      this.ws.send(`${ name }: ${ this.message }`);
      this.message = '';
    }
  }
}
