(function () {
    'use strict';

    var ampmToHours = function (time) {
        if (time === '') {
            return time;
        }

        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];

        if (AMPM === "PM" && hours < 12) {
            hours = hours + 12;
        }

        if (AMPM === "AM" && hours === 12) {
            hours = hours - 12;
        }

        var sHours = hours.toString();
        var sMinutes = minutes.toString();

        if (hours < 10) {
            sHours = "0" + sHours;
        }

        if (minutes < 10) {
            sMinutes = "0" + sMinutes;
        }

        return (sHours + ':' + sMinutes);
    };

    var getEntries = function () {
        var entries = [];

        $('.time-entries-list .entry').each(function () {
            var date = $('.date-container', this).text().split('/');
            var time = $('.time-container', this).text().split(' – ');

            entries.push({
                'edit_in_day': $.trim(date[1]) + '.' + $.trim(date[0]) + '.2014',
                'edit_out_day': $.trim(date[1]) + '.' + $.trim(date[0]) + '.2014',
                'edit_in_time': ampmToHours($.trim(time[0])),
                'edit_out_time': ampmToHours($.trim(time[1])),
                'edit_duration': $.trim($('.duration-container', this).text()),
                'comment': $.trim($('.description-container', this).text()),

                'id': 0,
                'axAction': 'add_edit_record',
                'pct_ID': 19,
                'filter': 'internal',
                'evt_ID': 1,
                'trackingnr': ''
            });
        });

        return entries;
    };

    return JSON.stringify(getEntries());
}());
