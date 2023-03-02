// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {

	const rangeItems = document.querySelectorAll('[data-range]');
	if (rangeItems.length) {
		rangeItems.forEach(rangeItem => {
			const rangeFrom = rangeItem.querySelector('[data-range-from]'),
						rangeTo = rangeItem.querySelector('[data-range-to]'),
						item = rangeItem.querySelector('[data-range-item]');
			let rangeInputs = [rangeFrom, rangeTo];

			if (item.classList.contains('price-filter__range')) {
				let format = {
					from: function (value) {
						return Number(value);
				},
					to: function(value) {
							return Math.round(value) + ' руб.';
					}
				};
				noUiSlider.create(item, {
					start: [rangeFrom.value, rangeTo.value],
					connect: true,
					step: 1,
					tooltips: [true, false],
					format: format,
					range: {
						'min': 0,
						'max': 20000
					}
				});		
			} else {
				let format = {
					from: function (value) {
						return Number(value);
				},
					to: function(value) {
							return Math.round(value);
					}
				};
				noUiSlider.create(item, {
					start: [rangeFrom.value, rangeTo.value],
					connect: true,
					step: 1,
					tooltips: false,
					format: format,
					range: {
						'min': 0,
						'max': 518
					}
				});		
			}
			
			
			item.noUiSlider.on('update', function (values, handle) {
				rangeInputs[handle].value = values[handle];
			});

			rangeInputs.forEach(function (input, handle) {
				let lestValueInput;

				input.addEventListener('focus', function () {
						lestValueInput = this.value;
						this.value = '';
				});
				input.addEventListener('blur', function () {
					if (this.value == '') {
						this.value = lestValueInput;
					} else {
						item.noUiSlider.setHandle(handle, this.value);
					}
				});
				input.addEventListener('change', function () {
						item.noUiSlider.setHandle(handle, this.value);
				});
			})

		})
	}
}
rangeInit();
