"use strict";


import locTmql from "loc.html";

$(() => {
	new Join();
})

export class Join {
	constructor() {
		const QS = require('qs');
		console.log('join')
		this.eventBindgin();
	}

	eventBindgin() {
		$('.btn_slct_area').on('click', (e) => {
			if ($('#locWantKey').val() !== '') {
				$('.want_loc').removeClass('hidden');
			} else {
				let locTmql = require("loc.html")
				let callobj = {'key' : $('#locWantKey').val()}
				// let data = require("loc.html")
				axios.post('/data/wantLoc', callobj).then((result) => {
					onsole.log((locTmql(result)));
					console.log(result);

					$('.want_loc').append(locTmql(result));
					$('.want_loc').removeClass('hidden');

					$('.btn_complete').on('click', (e) => {
						let selectedKeyArrary = new Array();
						$('.hope_list > li').each((idx, obj) => {
							if ($(obj).children('a').hasClass('active')) {
								let wantKey = $(obj).children('a'), data
								('key');
								selectedKeyArrary.push(wantKey);
							}
						})
						$('#locWantKey').val(_.join(selectedKeyArrary, ','));
						$('.want_loc').empty().addClass('hidden');
					})
					$('.btn_reset').on('click', (e) => {
						$('.hope_list > li').each((idx, obj) => {
							let $obj = $(obj).children('a');
							if ($(obj).hasClass('active')) {
								$obj.removeClass('active');
							}
						})

					})
					$('.hope_list > li > a').on('click', (e) => {
						if ($(e.currentTarget).hasClass('active')) {
							$(e.currentTarget).removeClass('active');
						} else {
							$(e.currentTarget).addClass('active');
						}

					})
				})
			}
			// $('.normal_pop_wrap').removeClass('hidden');
		})
	}

}

