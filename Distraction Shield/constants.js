/**
 * All the constants used throughout the extension
 * @module constants
 */

/* ---------- ----- background ----- ---------- */
export const zeeguuExLink = "https://www.zeeguu.unibe.ch/practice/get-ex";

export const zeeguuExTracker = "www.zeeguu.unibe.ch/practice/get-ex";

export const tdsRedirectParam = "?tds_redirect=";

/* ---------- ----- optionspage----- ---------- */
export const feedbackLink = "https://docs.google.com/forms/d/e/1FAIpQLScHTpTaGD19HJd4d7k98FV_20-NwRV0dp9xNMWza7_1KsiGag/viewform";

/* ---------- ----- BlockedSite ----- ---------- */
export const FAVICONLINK = "https://www.google.com/s2/favicons?domain=";
/* ---------- ----- export constants for statistics ----- ---------- */

// The time in seconds after which a user is considered to be idle. Important for tracking the amount of time spent on a url.
// Minimum value is 15 seconds.
export const idleTime = 15;

// The time in milliseconds of how many times the url of the website is compared to the blacklist or the exercise page.
export const measureFrequency = 1000;

// The time in milliseconds after which the time tracking export const iables are saved to the local or sync storage.
export const savingFrequency = 5000;

/* ---------- ----- UserSettings, inject ----- ---------- */
export const modes = {
    lazy: {
        label: "lazy",
        zeeguuText: "You are in lazy mode. Click <a id='originalDestination'>'Skip'</a> any time to continue browsing."
    },
    pro: {
        label: "pro",
        zeeguuText: "You are in pro mode. Complete the exercise and click the 'Take me away!' button when you are done to continue browsing."
    }
};

export const zeeguLoginLink = "https://www.zeeguu.unibe.ch/login";

export const tdsRedirectParamRegex = /[?]tds_redirect=(.*)/;

export const loginMessage = "Please log in to get productive!";


/* ---------- ----- BlockedSiteList ----- ---------- */
export const newUrlNotUniqueError = "Oops! You already blocked this website: ";
export const newUrlSuccess = "Successfully blocked ";

/* ---------- ----- Whitelist ----- ----- ---------- */

/**
 * A list of regexp's. If a url matches one of these it is not supposed to beblocked
 * @type {RegExp[]}
 */
export const whitelist = [
    /_\/chrome\/newtab/,
    /oauth.*\?.*client_id/,
    /zeeguu.unibe.ch/
];

/* ---------- ----- urlFormatter ----- ---------- */
export const INVALID_URL_MESSAGE = "We unfortunately could not reach the site you are trying to block.\n" +
    "Are you sure the url is correct? \n \n";

/**/
export const dataCollectionMsg = 'Please be aware that anonymous data are collected for purposes of improving the extension. '+
    'The data cannot be traced back to you as a person.\n\nWe respect your privacy.';

/* -------------------- Text Messages ----------------------- */
export const zeeguuInfoText = "Hey, you tried to enter one of the sites you wanted to be protected from!";

/* -------------------- Keypress export constants ----------------------- */
/* ---------- ----- optionsPage/htmlFunctionality ----- ---------- */
export const KEY_DELETE = 46;
export const KEY_ENTER = 13;

/* -------------------- Number export constants ----------------------- */

// The amount of milliseconds in one day
export const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

/* ---------- ----- turnoffSlider ----- ---------- */
export const MAX_TURN_OFF_TIME = 480;
