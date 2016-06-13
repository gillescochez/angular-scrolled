describe("angular-scrolled", function() {

    beforeEach(function() {
        browser.get("index.html");
    });

    describe("binding to element", function() {

        it("should load more items when the element is scrolled to the bottom", function() {

            var count = 0;

            element.all(by.css("#wrap > .item")).then(function(items) {
                count = items.length;
            });

            browser.executeScript("document.getElementById('wrap').scrollTop = 1000;").then(function() {
                element.all(by.css("#wrap > .item")).then(function(items) {
                    expect(items.length).toEqual(count * 2);
                });
            });
        });

        it("should NOT load more item if scrolled-enabled is false", function() {

            var count = 0;

            element.all(by.css("#wrap > .item")).then(function(items) {
                count = items.length;
            });

            element(by.model("enabled")).click();

            browser.executeScript("document.getElementById('wrap').scrollTop = 1000;").then(function() {
                element.all(by.css("#wrap > .item")).then(function(items) {
                    expect(items.length).toEqual(count);
                });
            });
        });
    });

    describe("binding to window", function() {

        it("should load more items when the window is scrolled to the bottom", function() {

            var count = 0;

            element.all(by.css("#doc > .item")).then(function(items) {
                count = items.length;
            });

            browser.executeScript("window.scrollTo(0, 10000);").then(function() {
                element.all(by.css("#doc > .item")).then(function(items) {
                    expect(items.length).toEqual(count * 2);
                });
            });
        });
    });
});