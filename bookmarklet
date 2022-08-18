(function ($) {
	document.getElementsByTagName('head')[0].append(Object.assign(document.createElement('script'), { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" }));
})

(function ($) {
		var iframewindow = frames['galaxy'], token = iframewindow.preload.token.value, findIdRegex = /(?:Settings\/)([a-z0-9]+)(?:\/)/ig, id = findIdRegex.exec(iframewindow.location.hash)[1], $overlay = $('<div></div>').css({
			background : 'White',
			width : '100%',
			height : '100%',
			position : 'fixed',
			'z-index' : 999,
			top : '0px',
			opacity : '0.65'
		}).appendTo('body'), $status = $('<div style=\'color:red\'>no data</div>').css({
			'font-size' : '1em',
			'font-weight' : 'bolder',
			padding : '10px 0'
		}), $textarea = $('<textarea class=\'_GAYib\' placeholder=\'eg. search.com; search_param\' style="width: 417px;min-width: calc(100% - 15px);max-width: calc(100% - 15px);height: 160px;min-height: 160px;max-height: 160px;"></textarea>').css({
			width : '100%',
			height : '150px'
		}), $okBtn = $('<button class=\'_GAYe _GAy btn action\'>Import</button>').click(function() {
			var rows = csvJSON($textarea.val());

			$textarea.prop('disabled', true).val('Please wait... It may take few minutes.');
			$okBtn.prop('disabled', true);

			$status.text('initializing!');

			send(0, rows, $status);

		}), $cancelBtn = $('<div class=\'btn\'>Cancel</div>').click(function() {
			$dialog.remove();
			$overlay.remove();
		}), $dialog = $('<div class=\'_GAZVb\'></div>').css({
			width : '450px',
			height : '350px',
			position : 'absolute',
			top : '50%',
			left : '50%',
			'margin-top' : '-200px',
			'margin-left' : '-225px',
			'z-index' : 9999,
			background: 'White',
			border: 'solid 1px Gray',
			padding: '16px'
		}).append('<div class=\'_GALwb\' style=\'margin-bottom:20px;font-size:16px\'><strong>Import search engines</strong></div>').append('<div class=\'_GAC9\'><div class=\'_GAZC\' style=\'margin-bottom:10px;\'>List separated by new line: <span id=\'_GAZDEF\' style=\'color:blue;cursor:pointer\'>Use default</span></div></div>').append($('<div id=\'_GAPITXT\' class=\'_GAPI\'></div>').append($textarea)).append($status).append($('<div class=\'_GAWs _GAaBb\'></div>').append($okBtn).append($cancelBtn)).append('<p style=\'margin-top:20px\'>Converted by miloszmich <a href=\'https://miloszmich.com\' target=\'_blank\'>miloszmich.com</a>.').appendTo('body');

		var send = function(i, r, $c) {
			var value = r[i];

			console.log('Doing row ' + i + ' from ' + r.length + ' rows.');

			if (r.length > i) {
				$c.text((i + 1) + '/' + r.length);

				$.ajax({
				  type: 'POST',
				  url: 'https://analytics.google.com/analytics/web/submitForm?m.page=TrackingOrganicSearchSources&ds=' + id + '&sid=editOrganicSearch&hl=pl&authuser=0',
				  timeout: 0,
				  dataType: 'text',
				  data: {
					token : token,
					domainName : value[0],
					queryParam : value[1],
					editMode : 'CREATE',
					etnityVersion : 1413823458010
					},
				    success: function(msg, textStatus, jqXHR) {
						console.log('DONE FIRED!');
						if(msg === '') {
							console.log('ERROR: Empty response! Retrying!');
							setTimeout(function() { send(i, r, $c); }, 1000);
						} else {
							if(jqXHR.readyState === 4) {
								console.log('success!');
								setTimeout(function() { send(++i, r, $c); }, 1000);
						   } 
						}
					}, 
					error: function(jqXHR, err) {
						console.log('Error status: ' + err + ' RETRYING!');
					}
				});
				
			} else {
				location.reload();
			}
		};

		var csvJSON = function(csv) {

			var lines = csv.split('\n');

			var result = [];

			for (var i = 0; i < lines.length; i++) {

				if (lines[i] == '') {
					continue;
				}
				var obj = {};
				var currentline = lines[i].split(';');

				obj[0] = currentline[0];
				obj[1] = currentline[1];
				result.push(obj);

			}

			return result;
		};
	
		var defaultCSV = function () {
			$('#_GAPITXT').val();
			
		}

	}(jQuery));
