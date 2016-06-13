angular.module("angular-scrolled", []).directive("scrolled", ["$window", function($window) {

    return {

        link: function(scope, element, attrs) {

            // direction to use. Default to vertical scrolling
            var direction = attrs.scrolledDirection || "vertical";

            // set the threshold. Default to 0 if not specified
            var threshold = parseInt(attrs.scrolledThreshold) || 0;

            // listen to the window if specified
            var useWindow = scope.$eval(attrs.scrolledWindow) || false;

            // set the enabled state. Default to true is not specified
            var enabled = attrs.scrolledEnabled ? scope.$eval(attrs.scrolledEnabled) : true;

            // target to bind our handler to
            var target = useWindow ? angular.element($window) : element;

            // function to check if the trigger point has been reached
            var canTrigger = useWindow ? function() {

                var doc = document.documentElement;

                if (direction === "vertical") {
                    return enabled && ((doc.offsetHeight - $window.innerHeight) - ($window.pageYOffset - (doc.clientTop || 0)) <= threshold);
                } else {
                    return enabled && ((doc.offsetWidth - $window.innerWidth) - ($window.pageXOffset - (doc.clientLeft || 0)) <= threshold);
                }

            } : function() {

                var raw = element[0];

                if (direction === "vertical") {
                    return enabled && (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight - threshold);
                } else {
                    return enabled && (raw.scrollLeft + raw.offsetWidth >= raw.scrollWidth - threshold);
                }
            };

            // our event handler
            var handler = function() {
                if (canTrigger()) {
                    scope.$apply(attrs.scrolled);
                }
            };

            // add our handler to the targeted element
            target.on("scroll", handler);

            // allow threshold amount to be change dynamically
            attrs.$observe("scrolledThreshold", function(value) {
                threshold = parseInt(value) || 0;
            });

            // allow enabled state to be changed dynamically
            attrs.$observe("scrolledEnabled", function(value) {
                enabled = scope.$eval(value);
            });

            // allow enabled state to be changed dynamically
            attrs.$observe("scrolledDirection", function(value) {
                direction = value;
            });

            // remove the event handler when the scope is destroyed
            scope.$on("$destroy", function() {
                target.off("scroll", handler);
            });
        }
    };
}]);