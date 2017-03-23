
// The tracker tracks whether you are currently working on exercises.
// Every second, the "alarm" is fired, and the url of the current tab is examined.
// If this url corresponds with the zeeguu url, the time spent on exercises counter is incremented.
var Tracker = new function() {
    var self = this;
    this.idle = false;
    this.tabActive = null;
    this.zeeguuRegex = "https://zeeguu.herokuapp.com/.*";


    // Initialize the alarm, and initialize the idle-checker.
    this.init = function(){

        // Fire alarm every second.
        setInterval(self.fireAlarm, 1000);

        // When the user does not input anything for 15 seconds, set the state to idle.
        chrome.idle.setDetectionInterval(15);
        chrome.idle.onStateChanged.addListener(self.checkIdle);
    };

    // Check if the user is idle. If the user is not idle, and on the zeeguu website, increment the counter.
    this.fireAlarm = function(){
        if(!self.idle){
            self.getCurrentTab();
            if(self.compareUrlToRegex(self.zeeguuRegex, self.tabActive)){
                TrackerStorage.incrementDayStat(1);
            }
        }
    };

    // Function attached to the idle-listener. Sets the self.idle variable.
    this.checkIdle = function(idleState){
        if(idleState == 'active'){
            self.idle = false;
        } else if(idleState == 'idle'){
            self.idle = true;
        }
    };

    // Gets the current tab.
    this.getCurrentTab = function(){
        chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
            if(tabs.length == 1) {
                self.tabActive = tabs[0].url;
            }
        });
    };

    // Compare regex to url.
    this.compareUrlToRegex = function(regex, url){
        return RegExp(regex).test(url);
    };
};

Tracker.init();
TrackerStorage.init();
