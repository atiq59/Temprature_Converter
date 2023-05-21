import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = "Temprature Converter";
	degreesControl = new FormControl("32");
	typeControl = new FormControl("F");
	results: String = "";

	onClick() {

		if ( (this.degreesControl.value)?.trim().length == 0 || Number.isNaN( Number( this.degreesControl.value ) ) ) {

			window.alert( "Please add only numeric Value" );
			this.results = "N/A";

			setTimeout(() => {
				this.degreesControl.reset();
			}, 100);

		} else {

			switch( this.typeControl.value ) {

				case 'C': 
					this.results = String(((9 / 5) * Number(this.degreesControl.value) + 32).toFixed(1)) + "ºF";
					break;
				
				case 'F': 
					this.results = String(((Number(this.degreesControl.value) - 32) * (5 / 9)).toFixed(1)) + "ºC";
					break;

				default:
					break;

			}

		}

	}

}
