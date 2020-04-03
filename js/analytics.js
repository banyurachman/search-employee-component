(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

// Open the command and put your ga code
// ga('create', 'UA-XXXXXXXXX-1', 'auto');
// ga('send', 'pageview');

jQuery(document).ready(function ($) {
    var sendEvent = function (category, action, label) {
        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label
        });
    }

    var sendEventTest = function (category, action, label) {
        alert(category + " " + action + " " + label);
    }

    // Event Trigger
    $('p a').click(function () {
        sendEventTest('event_name', 'event_action', 'event_desc');
    });
    
});