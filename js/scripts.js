function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;	
};

Telefon.prototype.printInfo = function() {
	 console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + " zł.");
};

Telefon.prototype.compare = function(model) {
	if (this.cena > model.cena) {
		console.log(this.marka + " jest droższy od " + model.marka + " o " + (this.cena - model.cena) + ' zł.');
	} else {
		console.log(this.marka + " jest tańszy od " + model.marka + " o " + (model.cena - this.cena) + ' zł.');
	};
};

var iPhone6S = new Telefon("Apple", 2250, "srebrny"),
	redmiPro = new Telefon("Xiaomi", 1330, "czarny"),
	note3Neo = new Telefon("Samsung", 640, "biały");

redmiPro.printInfo();
note3Neo.compare(iPhone6S);