import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	federatedSignIn() {
		console.log('custom federation button clicked');
	}
	constructor() {}
}
