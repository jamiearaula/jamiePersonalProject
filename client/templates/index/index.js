function calculateAmount(){
	var srcCcy = $('#srcCcy').val();
	var dstCcy = $('#dstCcy').val();
	var srcAmt = $('#src_amt').val();
	var value = getValue(srcCcy,dstCcy);

   document.getElementById("dst_amt").value = srcAmt * value;
}

function getValue(srcCurr,dstCurr){

	if(srcCurr == 'CAD'){
		return Currencies.findOne({name : dstCurr}).conversions[0]; 
	}

	if(srcCurr == 'EUR'){
		return Currencies.findOne({name : dstCurr}).conversions[1]; 
	}


	if(srcCurr == 'GBP'){
		return Currencies.findOne({name : dstCurr}).conversions[2]; 
	}


	if(srcCurr == 'USD'){
		return Currencies.findOne({name : dstCurr}).conversions[3]; 
	}
}

Template.fxCalculation.events({
	'click #convert-btn': function(event) {
		event.preventDefault();
		$(event.target).blur();
		calculateAmount();
    }

});


Template.fxCalculation.helpers({
  'currency': function () {
    return Currencies.find();
  }

});