var entries = ''; // Put entries from toggle here


JSON.parse(entries).forEach(function (entry) {
	$.post('/extensions/ki_timesheets/processor.php', {
		id: entry.id,
		axAction: entry.axAction,
		pct_ID: entry.pct_ID,
		filter: entry.filter,
		evt_ID: entry.evt_ID,
		edit_in_day: entry.edit_in_day,
		edit_out_day: entry.edit_out_day,
		edit_in_time: entry.edit_in_time,
		edit_out_time: entry.edit_out_time,
		edit_duration: entry.edit_duration,
		comment: entry.comment,
		trackingnr: entry.trackingnr
	});
});
