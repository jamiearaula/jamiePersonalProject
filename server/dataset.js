function setDataset(){

	Currencies.insert({
		name: 'CAD',
		conversions: [1,1.601244959,1.698615463,1.234100162]
	});
 
	Currencies.insert({
		name: 'EUR',
		conversions: [0.624514066,1,1.060809248,0.772200772]
	});

	Currencies.insert({
		name: 'GBP',
		conversions: [0.588714763,0.942676548,1,0.726532984]
	});

	Currencies.insert({
		name: 'USD',
		conversions: [0.810307,1.2975,1.3764,1]
	});



}

function resetCollection(collection, resetFunc){
    if (collection.find().count() === 0){
        resetFunc();
    }
    else{
        collection.remove({});
        resetFunc();
    }
}

resetCollection(Currencies, setDataset);