//js03 課題５、６

(function($, window) {
  $(function() {
    // ここに処理を書きます
   /*
    $('#zip1').jpostal({
        postcode : [
            '#zip1'
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
    });
  }); */

	$('btn_postcode2address').jpostal({
		click : '#btn_postcode2address',
		postcode : [
			'#zip1'
		],
		address : {
			'#pref'  : '%3',
			'#city'  : '%4',
			'#street'  : '%5'
		}
	});
});



})(jQuery, window);
