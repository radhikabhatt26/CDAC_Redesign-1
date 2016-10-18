(function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-23713087-1", {
    "cookieDomain": "auto",
    "allowLinker": true
});
ga("require", "linker");
ga("linker:autoLink", ["www.esa.doc.gov", "esa.doc.gov", "esa.gov", "www.esa.gov"]);
ga("set", "anonymizeIp", true);
ga("send", "pageview");