(function() {
	var app = angular.module('ohmCalculator', [ ]);
	app.controller('StoreController', function() {
		this.firstColor = '';
		this.secondColor = '';
		this.thirdColor = '';
		this.fourthColor = '';
		this.resistorValue = '';
		this.getFirstColor = function(selectedColor) {
			this.firstColor = selectedColor
		};
		this.getSecondColor = function(selectedColor) {
			this.secondColor = selectedColor

		};
		this.getThirdColor = function(selectedColor) {
			this.thirdColor = selectedColor
		};
		this.getFourthColor = function(selectedColor) {
			this.fourthColor = selectedColor
		};

		this.getResistorValue = function() {
			if ((this.thirdColor === 'red') || (this.thirdColor === 'orange') || (this.thirdColor === 'yellow')) {
				var units = 'K'
			} else if ((this.thirdColor === 'green') || (this.thirdColor === 'blue')) {
				var units = 'M'
			} else var units = ''

			var firstNum = this.colorObj[this.firstColor], 
				secondNum = this.colorObj[this.secondColor],
				multiplierNum = this.multiplierObj[this.thirdColor],
				toleranceNum = this.toleranceObj[this.fourthColor]
				numberToMultiply = parseInt((firstNum + secondNum), 10)
			this.resistorValue = (numberToMultiply * multiplierNum).toPrecision(3) + units + ' Ohms ' + toleranceNum
		};

		this.firstColorSelection = ['none','brown','red','orange','yellow','green','blue','violet','grey','white'];
		this.secondColorSelection = ['none','black','brown','red','orange','yellow','green','blue','violet','grey','white'];
		this.multiplierColorSelection = ['none','black','brown','red','orange','yellow','green','blue','gold','silver'];
		this.toleranceColorSelection = ['none','brown','red','gold','silver']
		
		this.colorObj = {
			none: '0',
			black: '0',
			brown: '1',
			red: '2',
			orange: '3',
			yellow: '4',
			green: '5',
			blue: '6',
			violet: '7',
			grey: '8',
			white: '9',
			gold: '',
			silver: ''
		}
		this.multiplierObj = {
			none: '',
			black: 1,
			brown: 10,
			red: .1,
			orange: 1,
			yellow: 10,
			green: .1,
			blue: 1,
			gold: .1,
			silver: .01
		}
		this.toleranceObj = {
			none: '',
			brown: '1%',
			red: '2%',
			gold: '5%',
			silver: '10%'
		}
	});

})();
