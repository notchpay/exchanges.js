(function (root, undefined) {
  // Root will be `window` in browser or `global` on the server:
  var exchange = function (key) {
    return new Exchange(key);
  };

  // Object containing exchange rates relative to the exchange.base currency, eg { "GBP" : "0.64" }

  exchange.rates = {
    AED: 3.672989,
    AFN: 85.804192,
    ALL: 103.133557,
    AMD: 492.860976,
    ANG: 1.794673,
    AOA: 621.997,
    ARS: 98.1346,
    AUD: 1.365848,
    AWG: 1.8005,
    AZN: 1.700805,
    BAM: 1.656648,
    BBD: 2,
    BDT: 85.20873,
    BGN: 1.654902,
    BHD: 0.37691,
    BIF: 1985.610266,
    BMD: 1,
    BND: 1.343136,
    BOB: 6.893727,
    BRL: 5.2403,
    BSD: 1,
    BTC: 0.00002121372,
    BTN: 73.574058,
    BWP: 10.962769,
    BYN: 2.501027,
    BZD: 2.01534,
    CAD: 1.26864,
    CDF: 1985.652681,
    CHF: 0.919122,
    CLF: 0.028404,
    CLP: 783.76,
    CNH: 6.433281,
    CNY: 6.4371,
    COP: 3826.461625,
    CRC: 624.795413,
    CUC: 1,
    CUP: 25.75,
    CVE: 93.59,
    CZK: 21.432087,
    DJF: 177.971645,
    DKK: 6.292765,
    DOP: 56.67905,
    DZD: 136.14755,
    EGP: 15.7149,
    ERN: 15.004977,
    ETB: 45.81,
    EUR: 0.846258,
    FJD: 2.089,
    FKP: 0.723232,
    GBP: 0.723232,
    GEL: 3.1,
    GGP: 0.723232,
    GHS: 6.038922,
    GIP: 0.723232,
    GMD: 52.025,
    GNF: 9765.214039,
    GTQ: 7.733689,
    GYD: 209.174219,
    HKD: 7.778628,
    HNL: 24.2,
    HRK: 6.3266,
    HTG: 97.481362,
    HUF: 295.854965,
    IDR: 14245.15,
    ILS: 3.20639,
    IMP: 0.723232,
    INR: 73.633954,
    IQD: 1459.721418,
    IRR: 42219.999884,
    ISK: 127.95,
    JEP: 0.723232,
    JMD: 149.540298,
    JOD: 0.709,
    JPY: 109.425,
    KES: 110,
    KGS: 84.751077,
    KHR: 4077.167058,
    KMF: 416.549999,
    KPW: 900,
    KRW: 1169.077915,
    KWD: 0.300704,
    KYD: 0.833224,
    KZT: 426.420655,
    LAK: 9583.184882,
    LBP: 1527.862132,
    LKR: 199.461965,
    LRD: 171.50003,
    LSL: 14.22105,
    LYD: 4.518484,
    MAD: 8.952,
    MDL: 17.678863,
    MGA: 3924.198284,
    MKD: 52.189786,
    MMK: 1854.632379,
    MNT: 2837.293893,
    MOP: 8.011299,
    MRO: 356.999828,
    MRU: 36.26,
    MUR: 42.65,
    MVR: 15.41,
    MWK: 812.777982,
    MXN: 19.89315,
    MYR: 4.1601,
    MZN: 63.775004,
    NAD: 14.28,
    NGN: 409.42062,
    NIO: 35.1,
    NOK: 8.618212,
    NPR: 117.716895,
    NZD: 1.40901,
    OMR: 0.384991,
    PAB: 1,
    PEN: 4.105,
    PGK: 3.510518,
    PHP: 49.8,
    PKR: 168.66,
    PLN: 3.853328,
    PYG: 6897.53829,
    QAR: 3.641,
    RON: 4.1876,
    RSD: 99.593857,
    RUB: 72.837,
    RWF: 1009.675897,
    SAR: 3.751471,
    SBD: 8.058065,
    SCR: 13.018878,
    SDG: 441.5,
    SEK: 8.595194,
    SGD: 1.342,
    SHP: 0.723232,
    SLL: 10374.850009,
    SOS: 578.347179,
    SRD: 21.398,
    SSP: 130.26,
    STD: 20747.790504,
    STN: 21.1,
    SVC: 8.748978,
    SYP: 1257.539406,
    SZL: 14.220675,
    THB: 32.873,
    TJS: 11.333037,
    TMT: 3.51,
    TND: 2.7875,
    TOP: 2.247527,
    TRY: 8.44604,
    TTD: 6.786324,
    TWD: 27.6675,
    TZS: 2319,
    UAH: 26.632787,
    UGX: 3529.374243,
    USD: 1,
    UYU: 42.750083,
    UZS: 10680,
    VES: 4112749.65,
    VND: 22734.89495,
    VUV: 111.755866,
    WST: 2.560245,
    XAF: 555.108646,
    XAG: 0.04203185,
    XAU: 0.00055496,
    XCD: 2.70255,
    XDR: 0.700855,
    XOF: 555.108646,
    XPD: 0.00050918,
    XPF: 100.985403,
    XPT: 0.00106781,
    YER: 250.799975,
    ZAR: 14.320019,
    ZMW: 16.331849,
    ZWL: 322,
  };
  // Default exchange rate base currency (eg "USD"), which all the exchange rates are relative to
  exchange.base = "usd";

  exchange.currencies = [];

  var convert = (exchange.convert = function (val, opts) {
    // Convert arrays recursively
    // Make sure we gots some opts
    opts = opts || {};

    // We need to know the `from` and `to` currencies
    if (!opts.to && !exchange.base) {
      throw "to or base currency required";
    }
    if (!opts.from) {
      throw "from currency required";
    }

    if (opts.format && opts.format == true) {
      return format(val * getRate(opts.to, opts.from), opts.to);
    }
    // Multiple the value by the exchange rate
    return val * getRate(opts.to, opts.from);
  });

  // Returns the exchange rate to `target` currency from `base` currency
  var getRate = function (to, from) {
    // Save bytes in minified version
    var rates = exchange.rates;

    // Make sure the base rate is in the rates object:
    rates[exchange.base] = 1;

    // Throw an error if either rate isn't in the rates array
    if (!rates[to] || !rates[from]) throw "Exchange.js error";

    // If `from` currency === exchange.base, return the basic exchange rate for the `to` currency
    if (from === exchange.base) {
      return rates[to];
    }

    // If `to` currency === exchange.base, return the basic inverse rate of the `from` currency
    if (to === exchange.base) {
      return 1 / rates[from];
    }

    // Otherwise, return the `to` rate multipled by the inverse of the `from` rate to get the
    // relative exchange rate between the two currencies
    return rates[to] * (1 / rates[from]);
  };

  var format = function (val, to, _opts) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: to,
    }).format(val);
  };

  var hydrateRates = function (key) {
    if (!checkCookie("_npfx_")) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.forexapi.world/rates");
      xhr.withCredentials = true;
      xhr.setRequestHeader("X-API-Key", key);
      xhr.send();

      xhr.onload = function () {
        if (xhr.status != 200) {
          // HTTP error?
          // handle error
          console.error("Error: " + xhr.status);
          return;
        }

        // get the response from xhr.response
        const _rates = {};

        for (const rate in xhr.response) {
          for (const [__key, __value] of Object.entries(rate)) {
            _rates[__key] = __value;
          }
        }

        exchange.rates = _rates;
        setCookie("_npfxr_", _rates, 60 * 60 * 10);
      };
    } else {
      exchange.rates = getCookie("_npfxr_");
    }
  };

  // If exchange(val) is called as a function, it returns a wrapped object that can be used OO-style
  var Exchange = function (key) {
    if (!key) {
      throw "forexapi.world key required";
    }
    hydrateRates(key);
  };
  var checkCookie = function (cname) {
    let ck = getCookie(cname);
    return ck != "";
  };
  var getCookie = function (cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  var setCookie = function (cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  // Expose `wrapper.prototype` as `exchange.prototype`
  var exchangeProto = (exchange.prototype = Exchange.prototype);

  // exchange(val).convert(opts) does the same thing as exchange.convert(val, opts)
  exchangeProto.convert = function () {
    var args = Array.prototype.slice.call(arguments);
    //args.unshift(this._v);
    return convert.apply(exchange, args);
  };

  // exchange(val).from(currency) returns a wrapped `exchange` where the value has been converted from
  // `currency` to the `exchange.base` currency. Should be followed by `.to(otherCurrency)`
  exchangeProto.from = function (currency) {
    var wrapped = exchange(
      convert(this._v, { from: currency, to: exchange.base })
    );
    wrapped._exchange = exchange.base;
    return wrapped;
  };

  // exchange(val).to(currency) returns the value, converted from `exchange.base` to `currency`
  exchangeProto.to = function (currency) {
    return convert(this._v, {
      from: this._exchange ? this._exchange : exchange.settings.from,
      to: currency,
    });
  };

  // Export the exchange object for CommonJS. If being loaded as an AMD module, define it as such.
  // Otherwise, just add `exchange` to the global object
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = exchange;
    }
    exports.exchange = exchange;
  } else if (typeof define === "function" && define.amd) {
    // Return the library as an AMD module:
    define([], function () {
      return exchange;
    });
  } else {
    // Use exchange.noConflict to restore `exchange` back to its original value before money.js loaded.
    // Returns a reference to the library's `exchange` object; e.g. `var money = exchange.noConflict();`
    exchange.noConflict = (function (previousFx) {
      return function () {
        // Reset the value of the root's `exchange` variable:
        root.exchange = previousFx;
        // Delete the noConflict function:
        exchange.noConflict = undefined;
        // Return reference to the library to re-assign it:
        return exchange;
      };
    })(root.exchange);

    // Declare `exchange` on the root (global/window) object:
    root["exchange"] = exchange;
  }
})(this);
