
	(function ($) {
		var iframewindow = frames['galaxy'], token = iframewindow.preload.token.value, findIdRegex = /(?:Settings\/)([a-z0-9]+)(?:\/)/ig, id = findIdRegex.exec(iframewindow.location.hash)[1], $overlay = $('<div></div>').css({
			background: 'White',
			width: '100%',
			height: '100%',
			position: 'fixed',
			'z-index': 999,
			top: '0px',
			opacity: '0.65'
		}).appendTo('body'), $status = $('<div style=\'color:red\'>no data</div>').css({
			'font-size': '1em',
			'font-weight': 'bolder',
			padding: '10px 0'
		}), $textarea = $('<textarea id=\'_GAYib\' class=\'_GAYib\' placeholder=\'eg. search.com; search_param\' style="width: 417px;min-width: calc(100% - 15px);max-width: calc(100% - 15px);height: 160px;min-height: 160px;max-height: 160px;"></textarea>').css({
			width: '100%',
			height: '150px'
		}), $okBtn = $('<button class=\'_GAYe _GAy btn action\'>Import</button>').click(function () {
			var rows = csvJSON($textarea.val());

			$textarea.prop('disabled', true).val('Please wait... It may take few minutes.');
			$okBtn.prop('disabled', true);

			$status.text('initializing!');

			send(0, rows, $status);

		}), $defaultVAlBtn = $('<span id=\'_GAZDEF\' style=\'color:blue;cursor:pointer\'>Use default</span>').click(function () {
			var txt = "delta-search.com;q; \r\n \
duckduckgo.com;q; \r\n \
govome.inspsearch.com;q; \r\n \
int.search.myway.com;searchfor; \r\n \
k9safesearch.com;q; \r\n \
mys.yoursearch.me;q; \r\n \
mywebsearch.com;searchfor; \r\n \
pl.alhea.com;q; \r\n \
search.1and1.com;q; \r\n \
search.foxtab.com;q; \r\n \
search.mywebsearch.com;searchfor; \r\n \
search.sidecubes.com;q; \r\n \
search.snapdo.com;q; \r\n \
search.sweetim.com;q; \r\n \
search.tb.ask.com;searchfor; \r\n \
search.v9.com;q; \r\n \
searches.omiga-plus.com;q; \r\n \
searches.safehomepage.com;q; \r\n \
searches.uninstallmaster.com;q; \r\n \
searches.vi-view.com;q; \r\n \
suche.t-online.de;q; \r\n \
szukaj.wp.pl;q; \r\n \
webssearches.com;q; \r\n \
www.ask.com;q; \r\n \
zapmeta.com;q; \r\n \
zapmeta.com.pl;q; \r\n \
google.interia.pl;q; \r\n \
search.smartshopping.com;keywords; \r\n \
searchgol.com;q; \r\n \
searchmobileonline.com;q; \r\n \
doko-search.com;q; \r\n \
isearch.searchcompletion.com;q; \r\n \
s.searchatomic.com;search; \r\n \
search.incredibar.com;q; \r\n \
my.parallaxsearch.com;qs; \r\n \
search.webssearches.com;q; \r\n \
int.search.tb.ask.com;searchfor; \r\n \
search.protectedio.com;q; \r\n \
searches.qone8.com;q; \r\n \
search.iminent.com;q; \r\n \
search.mail.com;q; \r\n \
search.myway.com;searchfor; \r\n \
www1.delta-search.com;q; \r\n \
yoursearch.me;q; \r\n \
zensearch.com;q; \r\n \
govome2.inspsearch.com;q; \r\n \
buenosearch.com;q; \r\n \
kingtale3.inspsearch.com;q; \r\n \
search.gboxapp.com;query; \r\n \
search.softonic.com;q; \r\n \
claro-search.com;q; \r\n \
golsearch.com;q; \r\n \
mysearchresults.com;q; \r\n \
searchfunmoods.com;q; \r\n \
search.us.com;k; \r\n \
isearch.zoo.com;q; \r\n \
only-search.com;q; \r\n \
search.smilebox.com;q; \r\n \
thesmartsearch.net;q; \r\n \
viview.inspsearch.com;q; \r\n \
mixidj.delta-search.com;q; \r\n \
search.safefinder.com;q; \r\n \
searchamong.com;query; \r\n \
utorrent.inspsearch.com;q; \r\n \
search.toolbars.alexa.com;q; \r\n \
search.centrum.sk;phrase; \r\n \
int.search.mywebsearch.com;searchfor; \r\n \
shinysearch.com;q; \r\n \
search.babylon.com;q; \r\n \
i.search.metacrawler.com;q; \r\n \
search.jerusalem.com;q; \r\n \
isearch.avg.com;q; \r\n \
mysearch.com;q; \r\n \
search.bt.com;p; \r\n \
search.coupons-bar.com;q; \r\n \
search.delta-search.com;q; \r\n \
search.findwide.com;k; \r\n \
search.lavasoft.com;search; \r\n \
search.xfinity.com;q; \r\n \
searchthis.com;q; \r\n \
enhanced-search.com;q; \r\n \
fastbrowsersearch.com;q; \r\n \
holasearch.com;q; \r\n \
isearch.omiga-plus.com;q; \r\n \
istart.webssearches.com;q; \r\n \
search.ojooo.com;search; \r\n \
search.surfcanyon.com;q; \r\n \
search.webwebweb.com;search; \r\n \
searchassist.net;q; \r\n \
sweetpacks-search.com;q; \r\n \
coolsocialsearch.com;q; \r\n \
samsung.de.searchturbo.com;q; \r\n \
search.clearch.org;q; \r\n \
search.zonealarm.com;q; \r\n \
searchlock.com;q; \r\n \
sr.searchfunmoods.com;q; \r\n \
vodafone.de.searchturbo.com;gsc.q; \r\n \
websearch.pur-esult.info;keywords; \r\n \
search-elnk.net;q; \r\n \
wow.com;q; \r\n \
royal-search.com;keywords; \r\n \
adsensecustomsearchads.com;q; \r\n \
advancedsearch2.virginmedia.com;SearchQuery; \r\n \
airzip.inspsearch.com;q; \r\n \
bittorrent.inspsearch.com;q; \r\n \
browse-search.com;q; \r\n \
ca.yhs4.search.yahoo.com;q; \r\n \
de.images.search.yahoo.com;p; \r\n \
de.search.yahoo.com;p; \r\n \
es.search.yahoo.com;p; \r\n \
es.yhs4.search.yahoo.com;p; \r\n \
fr.images.search.yahoo.com;p; \r\n \
fr.search.yahoo.com;p; \r\n \
gogle2.delta-search.com;q; \r\n \
hk.search.yahoo.com;p; \r\n \
isearch.claro-search.com;q; \r\n \
isearch.glarysoft.com;q; \r\n \
isearch.nation.com;q; \r\n \
it.search.yahoo.com;p; \r\n \
malaysia.search.yahoo.com;p; \r\n \
mx.search.yahoo.com;p; \r\n \
mysearch.avg.com;p; \r\n \
nl.images.search.yahoo.com;p; \r\n \
nl.search.yahoo.com;p; \r\n \
nl.yhs4.search.yahoo.com;p; \r\n \
no.search.yahoo.com;p; \r\n \
pl.search.yahoo.com;p; \r\n \
pl.siteslikesearch.com;search; \r\n \
pl.yhs4.search.yahoo.com;p; \r\n \
ri.search.yahoo.com;p; \r\n \
ro.search.yahoo.com;p; \r\n \
safesearch.net;q; \r\n \
samsung.pl.searchturbo.com;q; \r\n \
search.1und1.de;q; \r\n \
search.abv.bg;q; \r\n \
search.appwiz.com;q; \r\n \
search.ask.com;q; \r\n \
search.b1.org;q; \r\n \
search.bearshare.com;q; \r\n \
search.coo123.net;query; \r\n \
search.creativetoolbars.com;q; \r\n \
search.earthlink.net;q; \r\n \
search.fbdownloader.com;q; \r\n \
search.fenrir-inc.com;q; \r\n \
search.findeer.com;q; \r\n \
search.free.fr;qs; \r\n \
search.genieo.com;q; \r\n \
search.handycafe.com;q; \r\n \
search.icafemanager.com;q; \r\n \
search.icq.com;q; \r\n \
search.orbitum.com;search; \r\n \
search.pch.com;q; \r\n \
search.portalsepeti.com;q; \r\n \
search.results-hub.com;p; \r\n \
search.searchult.com;q; \r\n \
search.seznam.cz;q; \r\n \
search.socialdownloadr.com;q; \r\n \
search.speedbit.com;q; \r\n \
search.suddenlink.net;search; \r\n \
search.symbalooplaces.com;q; \r\n \
search.ukr.net;q; \r\n \
search.volny.cz;q; \r\n \
search.whiteskyservices.com;searchparam; \r\n \
search.yahoo.com;p; \r\n \
search.zum.com;query; \r\n \
searchthe.website;q; \r\n \
searchya.com;p; \r\n \
similarsitesearch.com;URL; \r\n \
tw.search.yahoo.com;p; \r\n \
uk.search.yahoo.com;p; \r\n \
uk.yhs4.search.yahoo.com;p; \r\n \
us.search.yahoo.com;p; \r\n \
us.yhs4.search.yahoo.com;p; \r\n \
www2.delta-search.com;q; \r\n \
omigaplus.inspsearch.com;q; \r\n \
safesearch.avira.com;q; \r\n \
s-de.searchturbo.com;gsc.q; \r\n \
googto.com;q; \r\n \
windowssearch.com;q; \r\n \
start.mysearchdial.com;p; \r\n \
dk.search.yahoo.com;p; \r\n \
searchassist.verizon.com;SearchQuery; \r\n \
de.yhs4.search.yahoo.com;p; \r\n \
no.yhs4.search.yahoo.com;p; \r\n \
search.fvpimageviewer.com;q; \r\n \
se.search.yahoo.com;p; \r\n \
at.search.yahoo.com;p; \r\n \
se.yhs4.search.yahoo.com;p; \r\n \
fr.yhs4.search.yahoo.com;p; \r\n \
search.wowway.com;search; \r\n \
search.media.telstra.com.au;find; \r\n \
fi.yhs4.search.yahoo.com;p; \r\n \
ca.search.yahoo.com;p; \r\n \
search.juno.com;q; \r\n \
dk.yhs4.search.yahoo.com;p; \r\n \
vn.search.yahoo.com;p; \r\n \
at.yhs4.search.yahoo.com;p; \r\n \
fi.search.yahoo.com;p; \r\n \
search.certified-toolbar.com;q; \r\n \
au.search.yahoo.com;p; \r\n \
ndpsearch.com;query; \r\n \
th.yhs4.search.yahoo.com;p; \r\n \
100searchengines.com;q; \r\n \
ch.search.yahoo.com;p; \r\n \
isearch-123.com;q; \r\n \
search.fdownloadr.com;q; \r\n \
search.frontier.com;q; \r\n \
search.i.ua;q; \r\n \
secury-search.com;q; \r\n \
ch.yhs4.search.yahoo.com;p; \r\n \
mysearch.sweetim.com;q; \r\n \
search.alot.com;q; \r\n \
search.avira.com;q; \r\n \
search.baisvik.com;q; \r\n \
search.easylifeapp.com;q; \r\n \
search.etoolkit.com;q; \r\n \
search.navegaki.com;q; \r\n \
search.photo.qip.ru;query; \r\n \
search.pimpmyhomepage.com;q; \r\n \
search.rockettab.com;q; \r\n \
search.skydns.ru;query; \r\n \
search.wp.pl;q; \r\n \
search1.ereadingsource.com;query; \r\n \
searchdns.netcraft.com;host; \r\n \
serp.searchcanvas.com;q; \r\n \
search.globososo.com;q; \r\n \
search.qone8.com;q; \r\n \
r.search.yahoo.com;p; \r\n \
search.snap.do;q; \r\n \
globososo.inspsearch.com;q; \r\n \
qtype.inspsearch.com;q; \r\n \
search-123.com;q; \r\n \
searches.globososo.com;q; \r\n \
i-gosearch.com;query; \r\n \
m.search.seznam.cz;oq; \r\n \
my.daemon-search.com;q; \r\n \
search.hao123.co.th;q; \r\n \
search.smt.docomo.ne.jp;search_box; \r\n \
search2.virginmedia.com;q; \r\n \
search.nation.com;q; \r\n \
sg.search.yahoo.com;p; \r\n \
home.searchpile.com;q; \r\n \
in.search.yahoo.com;p; \r\n \
in.yhs4.search.yahoo.com;p; \r\n \
search.carrotsearch.com;query; \r\n \
search.ovguide.com;q; \r\n \
searchguide.level3.com;q; \r\n \
searchsuggests.com;domains; \r\n \
search.tut.by;query; \r\n \
i-mysearch.com;query; \r\n \
search.carrot2.org;query; \r\n \
search1.speedbit.com;q; \r\n \
scanresearch.com;query; \r\n \
search.starburnsoftware.com;q; \r\n \
fastestwebsearch.com;query; \r\n \
isearch.whitesmoke.com;q; \r\n \
mixidj.claro-search.com;q; \r\n \
search.littlefighter2-toolbar.com;s; \r\n \
search.newtabking.com;query; \r\n \
search.qip.ru;query; \r\n \
search.searchya.com;p; \r\n \
search.ultrasurf.us;q; \r\n \
search.vmn.net;q; \r\n \
searchatlas.centrum.cz;q; \r\n \
searchyu.com;q; \r\n \
start-search.com;q; \r\n \
yourbestsearch.net;query; \r\n \
szukaj.com;q; \r\n \
szukaj.gazeta.pl;query; \r\n \
szukaj.gooru.pl;szukaj; \r\n \
szukaj.o2.pl;q; \r\n "
			$('#_GAYib').val(txt);
		}), $cancelBtn = $('<div class=\'btn\'>Cancel</div>').click(function () {
			$dialog.remove();
			$overlay.remove();
		}), $dialog = $('<div class=\'_GAZVb\'></div>').css({
			width: '450px',
			height: '350px',
			position: 'absolute',
			top: '50%',
			left: '50%',
			'margin-top': '-200px',
			'margin-left': '-225px',
			'z-index': 9999,
			background: 'White',
			border: 'solid 1px Gray',
			padding: '16px'
		}).append('<div class=\'_GALwb\' style=\'margin-bottom:20px;font-size:16px\'><strong>Import search engines</strong></div>').append('<div class=\'_GAC9\'><div class=\'_GAZC\' style=\'margin-bottom:10px;\'>List separated by new line: </div></div>').append($('<div id=\'_GAPITXT\' class=\'_GAPI\'></div>').append($defaultVAlBtn).append($textarea)).append($status).append($('<div class=\'_GAWs _GAaBb\'></div>').append($okBtn).append($cancelBtn)).append('<p style=\'margin-top:20px\'>Converted by miloszmich <a href=\'https://miloszmich.com\' target=\'_blank\'>miloszmich.com</a>.').appendTo('body');

		var send = function (i, r, $c) {
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
						token: token,
						domainName: value[0],
						queryParam: value[1],
						editMode: 'CREATE',
						etnityVersion: 1413823458010
					},
					success: function (msg, textStatus, jqXHR) {
						console.log('DONE FIRED!');
						if (msg === '') {
							console.log('ERROR: Empty response! Retrying!');
							setTimeout(function () { send(i, r, $c); }, 1000);
						} else {
							if (jqXHR.readyState === 4) {
								console.log('success!');
								setTimeout(function () { send(++i, r, $c); }, 1000);
							}
						}
					},
					error: function (jqXHR, err) {
						console.log('Error status: ' + err + ' RETRYING!');
					}
				});

			} else {
				location.reload();
			}
		};

		var csvJSON = function (csv) {

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


	}(jQuery));
