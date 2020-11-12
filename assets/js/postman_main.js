! function(n) {
    var a = {};

    function o(e) {
        if (a[e]) return a[e].exports;
        var t = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = n, o.c = a, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) o.d(n, a, function(e) {
                return t[e]
            }.bind(null, a));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/", o(o.s = 1)
}([function(e, t, n) {}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "cache", function() {
        return Z
    }), n.d(t, "getCurrentVersion", function() {
        return ue
    }), n.d(t, "bootstrapView", function() {
        return de
    }), n.d(t, "fetchAllData", function() {
        return ge
    }), n.d(t, "renderAll", function() {
        return pe
    }), n.d(t, "showError", function() {
        return fe
    }), n.d(t, "initialUILoad", function() {
        return me
    }), n.d(t, "updateSelectedLanguageIfRequired", function() {
        return ve
    }), n.d(t, "enforceTableWidth", function() {
        return he
    }), n.d(t, "populateDataIntoTemplate", function() {
        return ye
    }), n.d(t, "showLoader", function() {
        return be
    }), n.d(t, "prepareView", function() {
        return $e
    }), n.d(t, "enableTooltip", function() {
        return xe
    }), n.d(t, "enablePopper", function() {
        return we
    }), n.d(t, "scrollToHash", function() {
        return Ce
    }), n.d(t, "attachExampleHandlers", function() {
        return _e
    }), n.d(t, "fetchSnippetFromCache", function() {
        return Se
    }), n.d(t, "attachHandlers", function() {
        return ke
    }), n.d(t, "processExpandableElements", function() {
        return Ee
    }), n.d(t, "handleExpandableContent", function() {
        return Re
    }), n.d(t, "attachExpandableDescriptionHandlers", function() {
        return Le
    }), n.d(t, "handleExpandableTable", function() {
        return Ae
    }), n.d(t, "attachSidebarHandlers", function() {
        return Oe
    }), n.d(t, "updateSettingValue", function() {
        return qe
    }), n.d(t, "saveSelectedLanguageSettings", function() {
        return Ie
    }), n.d(t, "isPositive", function() {
        return Te
    }), n.d(t, "filterLanguagesList", function() {
        return He
    }), n.d(t, "attachLanguageSettingsHandlers", function() {
        return Ne
    }), n.d(t, "attachLanguageSettingsListHandlers", function() {
        return Me
    }), n.d(t, "attachLanguageSettingsRetryHandlers", function() {
        return Je
    }), n.d(t, "handleLanguageSettingsModalClose", function() {
        return je
    }), n.d(t, "activateFolder", function() {
        return De
    }), n.d(t, "isSnippetHighlightEnabled", function() {
        return Be
    }), n.d(t, "checkIfPrettifyEnabled", function() {
        return Ue
    }), n.d(t, "bindScrollHandler", function() {
        return Pe
    }), n.d(t, "adjustDocumentPadding", function() {
        return Fe
    }), n.d(t, "handleLayoutChange", function() {
        return Ve
    }), n.d(t, "getUpdatedUrl", function() {
        return We
    }), n.d(t, "documentationDisplayConfigCookie", function() {
        return ze
    }), n.d(t, "getExamples", function() {
        return Ge
    }), n.d(t, "getInitialJson", function() {
        return Ke
    }), n.d(t, "renderExamples", function() {
        return Ze
    }), n.d(t, "sanitiseSnippets", function() {
        return Qe
    }), n.d(t, "renderCollection", function() {
        return Xe
    }), n.d(t, "updateAuthInfoAndRequestBodyCacheRecursively", function() {
        return Ye
    }), n.d(t, "processAuthData", function() {
        return et
    }), n.d(t, "processAuthInfoForDisplay", function() {
        return tt
    }), n.d(t, "showInModal", function() {
        return nt
    }), n.d(t, "renderLanguageListInModal", function() {
        return at
    }), n.d(t, "renderSelectedLanguageSettings", function() {
        return ot
    }), n.d(t, "renderLanguageSettingsModal", function() {
        return rt
    }), n.d(t, "renderLanguageSettingsLoadError", function() {
        return it
    }), n.d(t, "fetchSelectedLanguageSettings", function() {
        return st
    }), n.d(t, "showLanguageSettingsModal", function() {
        return lt
    }), n.d(t, "collapseFolder", function() {
        return ct
    }), n.d(t, "expandFolder", function() {
        return ut
    }), n.d(t, "toggleFolderState", function() {
        return dt
    }), n.d(t, "changeResponse", function() {
        return gt
    }), n.d(t, "changeAllRequests", function() {
        return pt
    }), n.d(t, "buildToC", function() {
        return ft
    }), n.d(t, "updateTOC", function() {
        return bt
    }), n.d(t, "highlightVisibleSnippets", function() {
        return mt
    }), n.d(t, "fetchContentToHighlight", function() {
        return vt
    }), n.d(t, "elementIsVisible", function() {
        return ht
    }), n.d(t, "changeLoadingText", function() {
        return yt
    }), n.d(t, "setupAccordionToggleChanges", function() {
        return $t
    });
    n(0);
    var a = {
            inherit: "Inherit auth from parent",
            noauth: "No Auth",
            basic: "Basic Auth",
            bearer: "Bearer Token",
            digest: "Digest Auth",
            oauth1: "OAuth 1.0",
            oauth2: "OAuth 2.0",
            hawk: "Hawk Authentication",
            awsv4: "AWS Signature",
            ntlm: "NTLM Authentication [Beta]",
            apikey: "API Key",
            edgegrid: "Akamai EdgeGrid"
        },
        o = {
            key: "curl",
            label: "cURL",
            variant: "cURL"
        };

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(t, n) {
        var e = window && window.localStorage,
            a = n;
        if (e) {
            if ("object" === r(n)) try {
                a = JSON.stringify(n)
            } catch (e) {
                return void Raven.captureException(new Error("Attempt to stringify an invalid object:"), {
                    extra: {
                        object: n,
                        error: e
                    }
                })
            }
            "string" != typeof t && Raven.captureException(new Error("Attempt to pass in a non-string key value to local storage"), {
                extra: {
                    key: t
                }
            });
            try {
                return void("function" == typeof e.setItem && e.setItem(t, a))
            } catch (e) {
                Raven.captureException(new Error(e), {
                    extra: {
                        key: t,
                        value: n
                    }
                })
            }
        }
    }

    function v(t) {
        var e = window && window.localStorage;
        if (e) {
            "string" != typeof t && Raven.captureException(new Error("Attempt to pass in a non-string key value to local storage"), {
                extra: {
                    key: t
                }
            });
            try {
                return "function" == typeof e.getItem && e.getItem(t) || null
            } catch (e) {
                Raven.captureException(new Error(e), {
                    extra: {
                        key: t
                    }
                })
            }
        }
    }

    function s() {
        return !("string" != typeof window.location.pathname || !window.location.pathname.match(/^\/preview\//))
    }

    function l(t) {
        var e, n, a, o = $('meta[name="cmodelID"]').attr("content"),
            r = $(".active-environment").data("environment-id"),
            i = "curl",
            s = "curl",
            l = "cURL",
            c = ue(),
            u = scope.host + "/api/preview/" + o + "?type=snippet";
        try {
            e = v("lang_label"), n = v("lang_variant"), a = v("lang_preference"), n && a && e && (s = e, i = a, l = n)
        } catch (e) {
            Raven.captureException(e)
        }
        if (r && 0 != r && (u += "&environment=" + r), u += "&lang=" + i, u += "&variant=" + l, c && (u += "&versionTag=" + c), !o) return Raven.captureException(new Error("Attempt to fetch examples without any valid collection UID available"), {
            extra: {
                api: u,
                id: o,
                ownerId: ownerId
            }
        }), t({});
        $.getJSON(u).done(function(e) {
            return t(e, i, l, s)
        }).fail(function(e) {
            return Raven.captureException(new Error("Error fetching example JSON"), {
                extra: {
                    api: u,
                    error: e.responseJSON
                }
            }), t({}, i, l, s)
        })
    }

    function c(n, a) {
        ! function(e, t) {
            var n = {
                url: scope.host + "/settings",
                contentType: "application/json"
            };
            try {
                n.data = JSON.stringify({
                    languages: [e]
                })
            } catch (e) {
                return Raven.captureException({
                    error: e,
                    message: "Error string-ifying stored settings"
                }), t(e)
            }
            $.post(n).done(function(e) {
                return t(null, e)
            }).fail(function(e) {
                return Raven.captureException(new Error("Error fetching language specific settings"), {
                    extra: {
                        url: n.url,
                        error: e.responseJSON
                    }
                }), t(e)
            })
        }(n, function(e, t) {
            return e ? a(e) : (t && "unauthorized" === t.status && function(e) {
                if (e) {
                    var t = u(),
                        n = e && e.key,
                        a = e && e.variant;
                    t = t || [];
                    for (var o = 0; o < t.length; o++)
                        if (t[o].key === n && t[o].variant === a) return t[o] = e, i("language_settings", t);
                    t && n && a && t.push(e), i("language_settings", t)
                }
            }(n), a(null))
        })
    }

    function u() {
        var e = v("language_settings");
        try {
            e = JSON.parse(e)
        } catch (e) {
            Raven.captureException(e)
        }
        return e
    }

    function h(e, t) {
        var n = u(),
            a = 0;
        if (Array.isArray(n))
            for (a = 0; a < n.length; a++)
                if (n[a].key === e && n[a].variant === t) return n[a];
        return {}
    }

    function d(e, t, n) {
        var a, o, r, i = {};
        try {
            r = h(a = e, o = t)
        } catch (e) {
            return Raven.captureException(e), n(e)
        }
        return function(e, t, n) {
            e = e || "curl", t = t || "cURL";
            var a = scope.host + encodeURI("/settings/" + e + "/" + t + "/"),
                o = {
                    url: a,
                    contentType: "application/json"
                };
            $.getJSON(o).done(function(e) {
                return n(null, e)
            }).fail(function(e) {
                return Raven.captureException(new Error("Error fetching language specific settings"), {
                    extra: {
                        url: a,
                        error: e.responseJSON
                    }
                }), n(e, {})
            })
        }(a, o, function(e, t) {
            return e ? n(e) : "success" === (i = t).status ? n(null, i) : r && !_.isEmpty(r) ? n(null, r) : n(null, i)
        })
    }

    function g() {
        var e, t, n;
        try {
            e = v("lang_label"), t = v("lang_preference"), n = v("lang_variant")
        } catch (e) {
            Raven.captureException(e)
        }
        return {
            label: e,
            key: t,
            variant: n
        }
    }

    function p() {
        var e, t = $('meta[name="languages"]').attr("content");
        try {
            e = JSON.parse(t)
        } catch (e) {
            Raven.captureException(e)
        }
        return e
    }

    function f(o) {
        function e(e, t, n, a) {
            return o(e, t, n, a)
        }
        return s() ? l(e) : function(t) {
            var n, e, a, o, r, i = $('meta[name="cmodelID"]').attr("content"),
                s = $('meta[name="ownerId"]').attr("content"),
                l = $('meta[name="publishedId"]').attr("content"),
                c = $(".active-environment").data("environment-id"),
                u = "curl",
                d = "curl",
                g = "cURL",
                p = ue(),
                f = {},
                m = {};
            try {
                e = v("lang_label"), a = v("lang_variant"), o = v("lang_preference"), e && a && o && (d = e, u = o, g = a)
            } catch (e) {
                Raven.captureException(e)
            }
            try {
                f = {
                    codegenSettings: (r = h(u, g)) && r.options
                }
            } catch (e) {
                Raven.captureException({
                    error: e,
                    message: "Error parsing stored language settings."
                })
            }
            if (n = !i && s && l ? scope.host + "/api/examples/" + s + "/" + l : scope.host + "/api/examples/" + i, c && 0 != c ? (n += "?environment=" + c, n += "&lang=" + u) : n += "?lang=" + u, n += "&variant=" + g, p && (n += "&versionTag=" + p), m = {
                    url: n,
                    contentType: "application/json"
                }, f) try {
                m.data = JSON.stringify(f)
            } catch (e) {
                Raven.captureException({
                    error: e,
                    message: "Error string-ifying stored settings"
                })
            }
            if (!(i || s && l)) return Raven.captureException(new Error("Attempt to fetch examples without any valid ID available"), {
                extra: {
                    api: n,
                    id: i,
                    ownerId: s,
                    publishedId: l
                }
            }), t({});
            $.post(m).done(function(e) {
                return t(e, u, g, d)
            }).fail(function(e) {
                return Raven.captureException(new Error("Error fetching example JSON"), {
                    extra: {
                        api: n,
                        error: e.responseJSON
                    }
                }), t({}, u, g, d)
            })
        }(e)
    }

    function m() {
        $(".dropdown-selector").each(function(e, t) {
            $(t).chosen({
                disable_search: !0
            })
        }), $(".chosen-search-input").attr("maxlength", 100), $(".chosen-select").on("change", function(e, t) {
            ! function(e, t) {
                $(".".concat(e)).trigger("change", {
                    id: e,
                    selectedValue: t
                })
            }($(this).closest(".dropdown-container").data("dropdown-id"), t.selected), e.stopImmediatePropagation(), e.preventDefault()
        })
    }

    function y(e, t) {
        $("".concat(e, " .dropdown-selector")).val(t).trigger("chosen:updated")
    }

    function b(e) {
        try {
            if (e.item) return e.item.forEach(function(e) {
                return b(e)
            });
            var t = e && e._postman_id,
                n = e && e.request && e.request.body,
                a = e && e.request && e.request.header,
                o = e && e.request && e.request.urlObject && e.request.urlObject.query,
                r = e && e.request && e.request.urlObject && e.request.urlObject.variable;
            ! function(e, t) {
                if (!t) return;
                var n, a = t.mode,
                    o = t[a];
                "formdata" === a ? n = $("#" + e).find(".request-body-formdata-container") : "urlencoded" === a && (n = $("#" + e).find(".request-body-urlencoded-container"));
                if (!Array.isArray(o)) return;
                var r = {
                        rows: o.map(function(e) {
                            return {
                                row: [{
                                    value: e.key,
                                    "cell-class": "col-md-3 col-xs-12 name"
                                }, {
                                    partial: "_valueAndDescription",
                                    value: e.value,
                                    description: e.description,
                                    "cell-class": "col-md-9 col-xs-12 value"
                                }],
                                "row-class": "param row"
                            }
                        })
                    },
                    i = Handlebars.partials._table(r);
                n.html(i)
            }(t, n),
            function(e, t) {
                if (!Array.isArray(t)) return;
                var n = $("#" + e).find(".headers-key-value-table"),
                    a = {
                        rows: t.map(function(e) {
                            return {
                                row: [{
                                    value: e.key,
                                    "cell-class": "col-md-3 col-xs-12 name"
                                }, {
                                    partial: "_valueAndDescription",
                                    value: e.value,
                                    description: e.description,
                                    "cell-class": "col-md-9 col-xs-12 value"
                                }],
                                "row-class": "param row"
                            }
                        })
                    },
                    o = Handlebars.partials._table(a);
                n.html(o)
            }(t, a),
            function(e, t) {
                if (!Array.isArray(t)) return;
                var n = $("#" + e).find(".request-query-params-container"),
                    a = {
                        rows: t.map(function(e) {
                            if (!e || !e.disabled) return {
                                row: [{
                                    value: e.key,
                                    "cell-class": "col-md-3 col-xs-12 name"
                                }, {
                                    partial: "_valueAndDescription",
                                    value: e.value,
                                    description: e.description && e.description.content,
                                    "cell-class": "col-md-9 col-xs-12 value"
                                }],
                                "row-class": "param row"
                            }
                        })
                    },
                    o = Handlebars.partials._table(a);
                n.html(o)
            }(t, o),
            function(e, t) {
                if (!Array.isArray(t)) return;
                var n = $("#" + e).find(".request-path-variable-container"),
                    a = {
                        rows: t.map(function(e) {
                            return {
                                row: [{
                                    value: e.key,
                                    "cell-class": "col-md-3 col-xs-12 name"
                                }, {
                                    partial: "_valueAndDescription",
                                    value: e.value,
                                    description: e.description && e.description.content,
                                    "cell-class": "col-md-9 col-xs-12 value"
                                }],
                                "row-class": "param row"
                            }
                        })
                    },
                    o = Handlebars.partials._table(a);
                n.html(o)
            }(t, r)
        } catch (e) {
            Raven.captureException(e)
        }
    }

    function x() {
        $("body").on("shown.bs.tab", '.example-response__tabs a[data-toggle="tab"]', function(a) {
            Be(function(e) {
                if (e) {
                    var t = _.get(a, "target.dataset.target"),
                        n = $(t + ' code[class*="language-"]').get(0);
                    Prism.highlightElement(n)
                }
            })
        })
    }
    var w = $(".top-bar"),
        C = $(".layout"),
        S = $(".config-bar"),
        k = {
            "classic-double-column": {
                value: "classic-double-column",
                label: "Double Column",
                template: "documenter"
            },
            "classic-single-column": {
                value: "classic-single-column",
                label: "Single Column",
                template: "classic-single-column"
            }
        },
        E = k[$('meta[name="documentationLayout"]').attr("content") || "classic-double-column"],
        R = "#doc-body" + ("classic-single-column" === E.value ? "-" + E.value : "");

    function L(e) {
        return "classic-double-column" === E.value ? $(R).removeClass("is-sidebar-error").addClass("is-sidebar-loading") : $(R).removeClass("is-sidebar-error").addClass("are-examples-loading"), $(w).addClass("is-loading"), $(S).addClass("is-loading"), l(e)
    }

    function A(t) {
        var e = $('meta[name="cmodelID"]').attr("content"),
            n = $(".active-environment").data("environment-id"),
            a = ue(),
            o = scope.host + "/api/preview/" + e,
            r = ["type=collection", "segregateAuth=true"];
        if (n && 0 != n && r.push("environment=" + n), a && r.push("versionTag=" + a), 0 < r.length && (o += "?" + r.join("&")), !e) return Raven.captureException(new Error("Attempt to fetch JSON without any valid ID available"), {
            extra: {
                api: o,
                uid: e
            }
        }), t({});
        $.getJSON(o).done(function(e) {
            return t(e)
        }).fail(function(e) {
            return Raven.captureException(new Error("Error fetching initial JSON"), {
                extra: {
                    api: o,
                    error: e.responseJSON
                }
            }), showError(e.responseJSON)
        })
    }

    function O(e, n, a, o) {
        if (Z.exampleResponses = {}, Z.exampleRequests = {}, e) {
            var r, t = e.data;
            if (!n && !a && !o) try {
                o = getStorageItem("lang_label") || "cURL", n = getStorageItem("lang_preference") || "curl", a = getStorageItem("lang_variant") || "cURL"
            } catch (e) {
                Raven.captureException(e)
            }
            try {
                p()
            } catch (e) {
                Raven.captureException(e)
            }
            $("#mobile-controls .language-dropdown .selected-language").text(o + " - " + a), "classic-double-column" === E.value ? $(R).removeClass("is-sidebar-loading").addClass("is-sidebar-error") : $(R).removeClass("are-examples-loading").addClass("is-sidebar-error"), Array.isArray(t) && t.forEach(function(l) {
                var e = $("#" + l.item_id + " .examples"),
                    t = l.example;
                Array.isArray(t) && t.forEach(function(e, t) {
                    var n = _.get(e, "response.body"),
                        a = _.get(e, "response.header"),
                        o = _.get(e, "snippet"),
                        r = o && Object.keys(o)[0],
                        i = r && Object.keys(o[r])[0],
                        s = Qe(o[r], r, i);
                    if (Z.exampleRequests[l.item_id + "_" + t] = s, n) {
                        try {
                            n = JSON.stringify(JSON.parse(n), null, 2), e.response.body = n
                        } catch (e) {}
                        Z.exampleResponses[l.item_id + "_" + t] = n, Array.isArray(a) && a.length && (Z.exampleHeaders[l.item_id + "_" + t] = a.reduce(function(e, t) {
                            return e + (t.key + ": ") + t.value + "\n"
                        }, ""))
                    }
                }), r = Handlebars.partials["_request-examples"]({
                    sample: t,
                    _postman_id: l.item_id,
                    selectedLang: n,
                    selectedLangVariant: a,
                    selectedLangLabel: o,
                    layout: E.value
                }), e.replaceWith(r)
            }), $(w).removeClass("is-loading"), $(S).removeClass("is-loading"), $(C).removeClass("is-content-loading"), $(S).removeClass("is-content-loading"), "classic-double-column" === E.value ? $(R).removeClass("is-sidebar-loading is-sidebar-error") : $(R).removeClass("are-examples-loading is-sidebar-error"), setTimeout(function() {
                Modernizr.csspositionsticky || Fe($(".pm-message-persistent")), mt(), _e(), Ee(), x()
            })
        }
    }

    function q(e, t) {
        var n = e,
            a = e && e.item,
            o = E && E.label;
        n && $(".active-environment").data("environment-id"), n && n.info.documentationLayout && (o = k[n.info.documentationLayout].label), $(".layout-dropdown .selected-layout").text(o), Z.requestBody = {}, a.forEach(function(e) {
            Ye(e)
        }), n.documentationLayout = E.value;
        var r = "classic-single-column" === E.value ? "-" + E.value : "";
        et(n, _.get(n, "info._postman_id")), ye("doc-sidebar", "#doc-body" + r, n), ye("nav-sidebar", "#nav-sidebar", n), "classic-double-column" === E.value && ($(C).removeClass("is-content-loading"), $(S).removeClass("is-content-loading")), setTimeout(function() {
            he()
        }), ft(), b(n), setTimeout(function() {
            Oe()
        }, 100), "function" == typeof t && t()
    }

    function I(e) {
        var t = $('meta[name="allowedDomain"]').attr("content");
        if ("string" == typeof t && 0 !== t.length) {
            var n = new RegExp(t),
                a = new RegExp(/^https?:\/\/([^/?#]+)(?:[/?#]|$)$/),
                o = e.origin,
                r = "string" == typeof o && (o.match(a)[1] || ""),
                i = e.data;
            return t && o && "string" == typeof r && n.test(r) ? transformReceivedMessage(i) : void 0
        }
    }

    function T() {
        $(".toggle-accordion-collapse").off(), $(".toggle-accordion-collapse").on("click", function(e) {
            var t = $(e.target).closest(".accordion"),
                n = t.hasClass("open");
            t.toggleClass("open"), n ? t.trigger("collapse") : t.trigger("open")
        })
    }

    function H() {
        var e = $(".logo");
        e.css("background-image", 'url("' + e.data("identity-href") + '")').removeData("identity-href")
    }
    var N = [],
        M = {},
        J = 5e3;

    function j(t) {
        $(".toast").hover(function(e) {
            ! function(e) {
                P(e)
            }("timer" + $(e.target).closest(".toast").data("toast-id"))
        }, function(e) {
            U($(e.target).closest(".toast").data("toast-id"), t)
        }), $(".toast .pm-toast-dismiss").on("click", function(e) {
            B($(e.target).closest(".toast").data("toast-id"))
        })
    }

    function D(e, t, n, a) {
        var o = $("#toast-container"),
            r = N.length + 1;
        N.push({
            id: r,
            type: e && e.toLowerCase(),
            title: t,
            content: n
        });
        var i = Handlebars.templates.toast,
            s = {
                toasts: N
            };
        o.replaceWith(i(s)), j(a), U(r, a)
    }

    function B(t) {
        var e = "timer" + t,
            n = $(".toast[data-id='toast-".concat(t, "']"));
        P(e), N = N.filter(function(e) {
            return e.id !== t
        }), n.remove(), n.off()
    }

    function U(e, t) {
        var n = t && "number" == typeof t ? t : J,
            a = "timer" + e;
        P(a), M[a] = setTimeout(function() {
            B(e)
        }, n)
    }

    function P(e) {
        clearTimeout(M[e]), delete M[e]
    }

    function F(e, t) {
        e && $(e).text(t)
    }

    function V(e) {
        var t = s() ? function(e, t) {
            for (var n = window.location.search.substring(1).split("&"), a = !1, o = 0; o < n.length; o++) {
                if (n[o].split("=")[0] === e) {
                    n[o] = e + "=" + t, a = !0;
                    break
                }
            }
            return a || n.push(e + "=" + selectedLayout.value), n = n.join("&"), window.location.origin + window.location.pathname + "?" + n + window.location.hash
        }("version", e) : "?version=".concat(e);
        window.open(t, "_self")
    }
    var W, z = {},
        G = !1,
        K = [],
        Z = {
            exampleRequests: {},
            exampleResponses: {},
            exampleHeaders: {},
            requestBody: {}
        },
        Q = {
            maxHighlightLength: 5e3
        },
        X = !1,
        Y = {},
        ee = !1,
        te = $(".top-bar"),
        ne = $(".layout"),
        ae = $(".config-bar"),
        oe = o,
        re = {
            "classic-double-column": {
                value: "classic-double-column",
                label: "Double Column",
                template: "documenter"
            },
            "classic-single-column": {
                value: "classic-single-column",
                label: "Single Column",
                template: "classic-single-column"
            }
        },
        ie = a,
        se = re[$('meta[name="documentationLayout"]').attr("content") || "classic-double-column"],
        le = "#doc-body" + ("classic-single-column" === se.value ? "-" + se.value : ""),
        ce = "div.documentation-loader > div.loader > div#loader-text";

    function ue() {
        var e = window.location.search,
            t = /[?&]version=([^&#]*)/.exec(e);
        return t ? t[1] : document.querySelector("meta[name='versionTagId']").getAttribute("content") || ""
    }

    function de(t) {
        try {
            var e = function(e) {
                bt(_.get(e, "info.toc", [])), X ? q(e, function() {
                    return G = !0
                }) : Xe(e), "function" == typeof t && t()
            };
            H(), be(), $(ne).addClass("is-content-loading"), $(ae).removeClass(""), X ? A(e) : Ke(e)
        } catch (e) {
            return Raven.captureException(e)
        }
    }

    function ge(r) {
        try {
            var e = X ? A : Ke,
                t = X ? L : Ge;
            H(), be(), $(ne).addClass("is-content-loading"), $(ae).removeClass(""), F(ce, "Loading collection..."), e(function(o) {
                bt(_.get(o, "info.toc", [])), F(ce, "Loading snippets..."), t(function(e, t, n, a) {
                    "function" == typeof r && r({
                        collectionJson: o,
                        examples: {
                            data: e,
                            langPreference: t,
                            langVariant: n,
                            langLabel: a
                        }
                    })
                })
            })
        } catch (e) {
            return Raven.captureException(e)
        }
    }

    function pe(e, t) {
        try {
            var n = t.data,
                a = t.langPreference,
                o = t.langVariant,
                r = t.langLabel;
            $(ne).addClass("is-content-loading"), $(ae).removeClass(""), F(ce, "Rendering..."), X ? q(e, function() {
                return G = !0
            }) : Xe(e), G && (X ? O(n, a, o, r) : Ze(n, a, o, r), attachLanguageSelectorDropdownHandlers())
        } catch (e) {
            return Raven.captureException(e)
        }
    }

    function fe(e) {
        e = e || {}, $(".layout").addClass("is-error"), ye("error", "#error-view", {
            code: e.code,
            message: e.message || "An error occured while fetching data, please try again later"
        })
    }

    function me() {
        var e = $(".active-environment").data("environment-id");
        $e(), T(), m(),
            function(e, t) {
                $("".concat(e, " .dropdown-selector")).chosen("destroy"), $("".concat(e, " .dropdown-selector")).chosen(t)
            }(".language-selector-dropdown", {
                disable_search: !1
            }), _.isFunction(messenger.bootstrap) && messenger.bootstrap(messenger.showAll), setTimeout(function() {
                ke()
            }, 100), ve(), $(".layout-dropdown-selector").on("change", function(e, t) {
                Ve(t.selectedValue)
            }), $(".version-dropdown-selector").on("change", function(e, t) {
                V(t.selectedValue)
            }), $(".environment-dropdown-selector").on("change", function(e, t) {
                G = !1,
                    function(e) {
                        var o = !1,
                            r = s();

                        function t(e, t, n, a) {
                            o && (r ? O(e, t, n, a) : Ze(e, t, n, a))
                        }

                        function n() {
                            o = !0, r ? L(t) : Ge(t)
                        }
                        $(".active-environment").data("environment-id", e), $(".layout").removeClass("is-error"), be(), r ? A(function(e) {
                            bt(_.get(e, "info.toc", [])), q(e, n)
                        }) : Ke(function(e) {
                            bt(_.get(e, "info.toc", [])), Xe(e, n)
                        })
                    }(t.selectedValue)
            }), $(".language-selector-dropdown").on("change", function(e, t) {
                var n = t.selectedValue.split(" - ");
                pt(n[0], n[1], n[2])
            }), $t(), y(".environment-dropdown-selector", e), _.set(Prism, "languages.pmresponseheaders", {
                kvpair: {
                    pattern: /(^|\n)[^\n]*\n/,
                    inside: {
                        key: /^([^:\n]+: )/
                    }
                }
            })
    }

    function ve() {
        var e, t, n;
        try {
            e = v("lang_label"), t = v("lang_preference"), n = v("lang_variant")
        } catch (e) {
            Raven.captureException(e)
        }
        if (!e || !t || !n) try {
            i("lang_label", oe.label), i("lang_preference", oe.key), i("lang_variant", oe.variant)
        } catch (e) {
            Raven.captureException(e)
        }
        y(".language-selector-dropdown", t && n && e ? "".concat(t, " - ").concat(n, " - ").concat(e) : "".concat(oe.key, " - ").concat(oe.variant, " - ").concat(oe.label))
    }

    function he() {
        $(".md-table-container").each(function(e, t) {
            var n = t.querySelector("tr").cells.length;
            $(this).css("width", 150 * n)
        })
    }

    function ye(e, t, n) {
        var a = Handlebars.templates[e];
        $(t).html(a(n)).removeClass("is-loading")
    }

    function be() {
        console.log(W)
        W = W, $(le).html(W)
    }

    function $e() {
        Pe(), Ce(), xe(), we()
    }

    function xe() {
        $('[data-toggle="tooltip"]').tooltip({
            delay: {
                show: 100
            },
            trigger: "hover"
        })
    }

    function we() {
        $('[data-toggle="popover"]').popover()
    }

    function Ce() {
        var e = window.location.hash,
            t = $(e),
            n = $("html, body");
        t.length && n.scrollTop(t.offset().top)
    }

    function _e() {
        $(".retryLoadingExamples").on("click", function() {
            X ? L(O) : Ge(Ze)
        }), $(".example-name li").click(gt), $("#language-settings").on("click", function() {
            lt()
        })
    }

    function Se(e, t) {
        if ("example-request" === t) return Z.exampleRequests[e]
    }

    function ke() {
        var e = $("body"),
            t = new Clipboard(".copy-request"),
            n = new Clipboard(".copy-snippet", {
                text: function(e) {
                    return Se($(e).data("id"), $(e).data("content-type"))
                }
            });
        e.on("click", ".is-expandable", nt), $("#mobile-controls .language_dropdown").on("click", ".dropdown-menu-item", function(e) {
            var t = $(e.target),
                n = t.data("lang-key"),
                a = t.data("lang-variant"),
                o = t.data("lang-label");
            n && a && o && ($("#mobile-controls .language-dropdown .selected-language").text(o + " - " + a), pt(n, a, o))
        }), $("#mobile-controls #language-settings-icon").on("click", function(e) {
            lt()
        }), $("body").on("click", "#menu-toggle", function() {
            $("body").toggleClass("nav-open")
        }).on("click", ".nav a", function() {
            setTimeout(function() {
                $("body").removeClass("nav-open"), Ce()
            }, 0)
        }), new Clipboard(".copy-text"), t.on("success", function(e) {
            e.clearSelection(), $(e.trigger).addClass("copied"), setTimeout(function() {
                $(e.trigger).removeClass("copied")
            }, 1e3)
        }), n.on("success", function(e) {
            e.clearSelection(), $(e.trigger).addClass("copied"), setTimeout(function() {
                $(e.trigger).removeClass("copied")
            }, 1e3)
        }), $(".settings-toggle").on("click", function() {
            $("#mobile-controls").toggleClass("is-visible")
        }), window.addEventListener("message", I), Le()
    }

    function Ee() {
        document.querySelectorAll(".click-to-expand-wrapper").forEach(function(e) {
            Re(e)
        })
    }

    function Re(e) {
        var t = $(e),
            n = 0 < t.children("code").first().length ? t.children("code").first() : t.children("table").first();
        t.innerHeight() - 2 < n.innerHeight() && t.addClass("is-expandable")
    }

    function Le() {
        $(".collection-description details").one("click", Ae), $(".folder-description details").one("click", Ae), $(".request-description details").one("click", Ae)
    }

    function Ae(t) {
        setTimeout(function() {
            var e = t.target;
            $(e).children(".click-to-expand-wrapper.is-table-wrapper").toArray().forEach(function(e) {
                Re(e)
            })
        }, 0)
    }

    function Oe() {
        $(".folder .toggle-folder-collapse").on("click", dt), $(".folder-link>a").on("click", De), $(".pm-doc-sprite-folder").on("click", function() {
            $(this).siblings(".folder-link").find("a")[0].click()
        })
    }

    function qe(e, t, n) {
        for (var a = 0; a < e.options.length; a++)
            if (e.options[a].id === t) {
                e.options[a].value = n;
                break
            } return e
    }

    function Ie() {
        var i, o = $("#languageSettingsForm").data("language-key"),
            r = $("#languageSettingsForm").data("language-label"),
            s = $("#languageSettingsForm ").data("language-variant");
        try {
            p()
        } catch (e) {
            Raven.captureException(e)
        }
        i = JSON.parse(JSON.stringify(Y)), $("#languageSettingsForm *").filter(":input").each(function() {
            var e, t = $(this),
                n = t.attr("id"),
                a = t.data("type");
            if ("positiveInteger" === a) {
                e = t.val();
                var o = parseInt(e),
                    r = Te(o);
                i = qe(i, n, r ? o : 0)
            } else "boolean" === a ? (e = t.is(":checked"), i = qe(i, n, e)) : "enum" === a && (e = $("#" + n + " .title").text(), i = qe(i, n, e))
        }), c(JSON.parse(JSON.stringify(i)), function(e, t) {
            if (e) {
                var n = "Failed to save settings for " + (r + " - " + s) + ".",
                    a = $("#saveLanguageSettingsBtn button");
                return D("ERROR", "Failed to save settings", n), a.removeClass("saving"), void a.attr("disabled", !1)
            }
            ot(r, o, s, "saveSettings", function() {
                var e = "Settings for " + (r + " - " + s) + " saved successfully",
                    t = o + " - " + s;
                K.push(t), D("SUCCESS", "Changes Saved!", e)
            })
        })
    }

    function Te(e) {
        return 0 <= e
    }

    function He(e) {
        (e = e.toLowerCase()) ? ($(".languages-list-item").not("[data-lang-name*='" + e + "']").css("display", "block"), $(".languages-list-item[data-lang-name*='" + e + "']").css("display", "block")) : $(".languages-list-item").css("display", "block")
    }

    function Ne() {
        $("#languageSettingsModal .modal-header button.close").off(), $("#saveLanguageSettingsBtn button").off(), $("#languageSettingsModal .dropdown-menu-item").off(), $("#language-search-input").off(), $("#saveLanguageSettingsBtn button").on("click", function() {
            $("#saveLanguageSettingsBtn button").addClass("saving"), $("#saveLanguageSettingsBtn button").attr("disabled", !0), Ie()
        }), $("#languageSettingsModal .dropdown-menu-item").on("click", function() {
            var e = $(this) && $(this).data("item-value"),
                t = $(this).parent().parent().attr("id");
            $("span#" + t).text(e)
        }), $("#language-search-input").on("keyup", function() {
            He($(this).val())
        }), $(".pm-switch-input input[type='checkbox']").on("click", function() {
            var e = $(this),
                t = e.siblings(".pm-label");
            e.is(":checked") ? (t.text("ON"), t.removeClass("off"), t.addClass("on")) : (t.text("OFF"), t.removeClass("on"), t.addClass("off"))
        })
    }

    function Me() {
        $(".languages-list-item").off(), $(".languages-list-item").on("click", function() {
            if (!ee) {
                var e = $(this).data("lang-label"),
                    t = $(this).data("lang-key"),
                    n = $(this).data("lang-variant"),
                    a = $(".languages-list-item.selected"),
                    o = $(".language-dropdown-xs .dropdown-toggle .selected-language");
                t === Y.key && n === Y.variant || ({
                    label: e,
                    key: t,
                    variant: n
                }, a.each(function(e) {
                    $(this).removeClass("selected")
                }), $(this).addClass("selected"), o && o.text(e + " - " + n), ot(e, t, n))
            }
        })
    }

    function Je() {
        $("#retryGetSettingsBtn button").off(), $(".ls-settings-error-container #retryGetSettingsBtn button").on("click", function() {
            var e = $(".languages-list-item.selected").first(),
                t = e && e.data("lang-label"),
                n = e && e.data("lang-key"),
                a = e && e.data("lang-variant");
            n && a && t && ot(t, n, a)
        })
    }

    function je() {
        var e = g(),
            t = e.key + " - " + e.variant;
        if ($("#languageSettingsModal").off(), $("body").removeClass("disableScroll"), $("#language-search-input").val(""), K && -1 < K.indexOf(t)) {
            var n = function(e, t, n, a) {
                G && (X ? O(e, t, n, a) : Ze(e, t, n, a))
            };
            X ? L(n) : Ge(n)
        }
    }

    function De() {
        var e = $(this),
            t = $(this).closest(".folder"),
            n = $(".folder-link>a");
        t.hasClass("open") ? e.hasClass("active") && ct(t) : (n.removeClass("active-folder"), ut(t))
    }

    function Be(n) {
        var a, o = [],
            r = g();
        Y && Y.options && r.key === Y.key && r.variant === Y.variant ? n(Ue(Y.options)) : st(r.key, r.variant, function(e, t) {
            if (e) {
                Y = {
                    key: r.key,
                    variant: r.variant,
                    label: r.label,
                    options: [{
                        name: "Prettify",
                        id: "prettify",
                        value: !0,
                        description: "Enabling this will ensure a prettified output for the generated code.",
                        type: "boolean"
                    }]
                };
                D("ERROR", "Failed to fetch settings", "Failed to fetch settings for " + (r.key + " - " + r.variant) + "."), n(!0)
            }
            o = (a = Y = t) && a.options, n(Ue(o))
        })
    }

    function Ue(e) {
        for (var t = 0; t < e.length; t++)
            if ("prettify" === e[t].id) return e[t].value;
        return !0
    }

    function Pe() {
        Modernizr.csspositionsticky || $(window).on("scroll resize pm-notification-closed", Fe.bind(this, $(".pm-message-persistent"))), $(window).on("scroll", _.debounce(mt, 1e3))
    }

    function Fe(e) {
        var t = $(window).scrollTop(),
            n = e.parents(".pm-persistent-notification-container"),
            a = 0;
        e && e.length && (a = e.outerHeight()), 70 < t ? (t = 70, n.addClass("is-fixed")) : n.removeClass("is-fixed"), $(".sidebar").css("padding-top", 70 + a - t + "px"), $(".container-fluid").css("padding-top", a + "px")
    }

    function Ve(e) {
        var t = e,
            n = re[t] && re[t].label,
            a = "";
        se && se.value === t || (se = re[t] ? re[t] : se, n && $(".layout-dropdown .selected-layout").text(n), X ? (a = We(se), location.href = a) : (ze(t, 31536e4), location.reload(!0)))
    }

    function We(e) {
        for (var t = window.location.search.substring(1).split("&"), n = !1, a = 0; a < t.length; a++) {
            if ("documentationLayout" === t[a].split("=")[0]) {
                t[a] = "documentationLayout=" + e.value, n = !0;
                break
            }
        }
        return n || t.push("documentationLayout=" + e.value), t = t.join("&"), window.location.origin + window.location.pathname + "?" + t + window.location.hash
    }

    function ze(e, t) {
        var n = {
                documentationLayout: re[e] && e || "classic-double-column"
            },
            a = encodeURIComponent("j:" + JSON.stringify(n));
        document.cookie = "documentationConfig=" + a + "; path=" + window.location.pathname + "; max-age=" + t + "; SameSite=Lax"
    }

    function Ge(e) {
        return "classic-double-column" === se.value ? $(le).removeClass("is-sidebar-error").addClass("is-sidebar-loading") : $(le).removeClass("is-examples-error").addClass("are-examples-loading"), $(te).addClass("is-loading"), $(ae).addClass(""), f(e)
    }

    function Ke(t) {
        var n, e = $('meta[name="cmodelID"]').attr("content"),
            a = $('meta[name="ownerId"]').attr("content"),
            o = $('meta[name="publishedId"]').attr("content"),
            r = $(".active-environment").data("environment-id"),
            i = ue(),
            s = ["segregateAuth=true"];
        if (n = !e && a && o ? scope.host + "/api/collections/" + a + "/" + o : scope.host + "/api/collections/" + e, r && 0 != r && s.push("environment=" + r), i && s.push("versionTag=" + i), 0 < s.length && (n += "?" + s.join("&")), !(e || a && o)) return Raven.captureException(new Error("Attempt to fetch JSON without any valid ID available"), {
            extra: {
                api: n,
                id: e,
                ownerId: a,
                publishedId: o
            }
        }), t({});
        $.getJSON(n).done(function(e) {
            return t(e)
        }).fail(function(e) {
            return Raven.captureException(new Error("Error fetching initial JSON"), {
                extra: {
                    api: n,
                    error: e.responseJSON
                }
            }), fe(e.responseJSON)
        })
    }

    function Ze(e, n, a, t) {
        if (Z.exampleResponses = {}, Z.exampleRequests = {}, e) {
            var o, r = e && e.data;
            if (!n && !a && !t) try {
                t = v("lang_label") || "cURL", n = v("lang_preference") || "curl", a = v("lang_variant") || "cURL"
            } catch (e) {
                Raven.captureException(e)
            }
            try {
                p()
            } catch (e) {
                Raven.captureException(e)
            }
            $("#mobile-controls .language-dropdown .selected-language").text(t + " - " + a), _.isEmpty(r) && ("classic-double-column" === se.value ? $(le).removeClass("is-sidebar-loading").addClass("is-sidebar-error") : $(le).removeClass("are-examples-loading").addClass("is-examples-error"), $(".retryLoadingExamples").on("click", function() {
                X ? L(O) : Ge(Ze)
            }), $("#language-settings").on("click", function() {
                lt()
            })), r.forEach(function(l) {
                var e = $("#" + l.item_id + " .examples"),
                    t = l.example;
                Array.isArray(t) && t.forEach(function(e, t) {
                    var n = _.get(e, "response.body"),
                        a = _.get(e, "response.header"),
                        o = _.get(e, "snippet"),
                        r = o && Object.keys(o)[0],
                        i = r && Object.keys(o[r])[0],
                        s = Qe(o[r], r, i);
                    Z.exampleRequests[l.item_id + "_" + t] = s;
                    try {
                        n && (n = JSON.stringify(JSON.parse(n), null, 2), e.response.body = n)
                    } catch (e) {}
                    Z.exampleResponses[l.item_id + "_" + t] = n, Array.isArray(a) && a.length && (Z.exampleHeaders[l.item_id + "_" + t] = a.reduce(function(e, t) {
                        return e + (t.key + ": ") + t.value + "\n"
                    }, ""))
                }), o = Handlebars.partials["_request-examples"]({
                    sample: t,
                    _postman_id: l.item_id,
                    selectedLang: n,
                    selectedLangVariant: a,
                    selectedLangLabel: a,
                    layout: se.value
                }), e.replaceWith(o)
            }), !0, "classic-double-column" === se.value ? $(le).removeClass("is-sidebar-loading is-sidebar-error") : $(le).removeClass("are-examples-loading is-examples-error"), $(te).removeClass("is-loading"), $(ae).removeClass(""), $(ne).removeClass("is-content-loading"), $(ae).removeClass(""), setTimeout(function() {
                Modernizr.csspositionsticky || Fe($(".pm-message-persistent")), mt(), _e(), Ee(), x()
            })
        }
    }

    function Qe(e, t, n) {
        var a = e[n];
        return "cURL" === t ? a = (a = a.replace(/\\n|\\r/g, "\n")).replace(/\\t/g, "    ") : e[n]
    }

    function Xe(e, t) {
        var n = e,
            a = e && e.item,
            o = se && se.label;
        n && n.info.public && (0 == $(".active-environment").data("environment-id") ? "no-env" : "env", n.info.privateUrl), $(".layout-dropdown .selected-layout").text(o), Z.requestBody = {}, a.forEach(function(e) {
            Ye(e)
        }), n.documentationLayout = se.value;
        var r = "classic-single-column" === se.value ? "-" + se.value : "";
        et(n, _.get(n, "info._postman_id")), ye("doc-sidebar", "#doc-body" + r, n), ye("nav-sidebar", "#nav-sidebar", n), G = !0, "classic-double-column" === se.value && ($(ne).removeClass("is-content-loading"), $(ae).removeClass("")), setTimeout(function() {
            he()
        }), ft(), b(n), setTimeout(function() {
            Oe()
        }, 100), "function" == typeof t && t()
    }

    function Ye(e) {
        var t = _.get(e, "request.body"),
            n = _.get(e, "_postman_id");
        et(e, n), t && (Z.requestBody[n] = t), e && e.item && e.item.forEach(function(e) {
            Ye(e)
        })
    }

    function et(e, t) {
        var n;
        n = tt(!!e.item ? _.get(e, "auth") : _.get(e, "request.auth"), t), e.authInfoForDisplay = n
    }

    function tt(e, t) {
        if (e && e.type && "noauth" !== e.type) {
            var n = {},
                a = e[e.type],
                o = _.get(a, "basicConfig", []),
                r = [],
                i = e.isInherited,
                s = e.source;
            return n.entityID = t, n.type = e.type, n.label = ie[e.type], i ? (n.isInherited = !0, n.inheritedEntityID = _.get(s, "_postman_id"), n.inheritedEntityType = _.get(s, "type"), n.inheritedEntityName = _.get(s, "name")) : o && 0 < o.length && (r = o.map(function(e) {
                return {
                    row: [{
                        value: e.key.replace(/([a-z])([A-Z])/g, "$1 $2"),
                        "cell-class": "col-md-3 col-xs-12 name"
                    }, {
                        value: e.value,
                        "cell-class": "col-md-9 col-xs-12 value"
                    }],
                    "row-class": "param row"
                }
            }), n.basicConfig = r), n
        }
    }

    function nt(e) {
        var t, n, a, o, r, i, s, l, c, u, d, g = $(this),
            p = $("#snippetModal"),
            f = $("#rawBodyModal"),
            m = $("#tableModal"),
            v = $("#snippetModal code"),
            h = $("#rawBodyModal .copy-request-modal"),
            y = $("#rawBodyModal code");
        v = $("#snippetModal code");
        if (e && e.target && "A" === e.target.tagName) {
            if (e.ctrlKey || e.metaKey) {
                var b = window.open();
                b.opener = null, b.location = e.target.href
            } else window.open(e.target.href, "_self");
            return !1
        }
        if (r = 0 !== $(this).parents(".examples").length ? (l = "dark-background", "") : (l = "white-background", "section"), t = g.css("width"), n = g.data("id"), d = g.data("content-type"), a = g.data("title"), o = g.data("clipboard-target"), i = 0 <= ["html", "xml"].indexOf((g.data("lang") || "").toLowerCase()), s = g.clone(), c = Z.exampleResponses[n], u = Z.exampleHeaders[n], h.attr("data-clipboard-target", ""), this.classList.contains("is-example")) v.empty().text(c), p.removeClass("white-background dark-background").addClass(l).modal().find(".modal-body").css("width", t || "auto"), $("#snippetModal .modal-header .title").empty().text(a), c.replace(/\s/gi, "").length <= Q.maxHighlightLength && (v.removeClass("language-markup language-javascript language-undefined language-pmresponseheaders").addClass("language-" + (i ? "markup" : "javascript")), Prism.highlightElement(v.get(0)));
        else if (this.classList.contains("is-example-headers")) v.empty().text(u), p.removeClass("white-background dark-background").addClass(l).modal().find(".modal-body").css("width", t || "auto"), $("#snippetModal .modal-header .title").empty().text(a), u.replace(/\s/gi, "").length <= Q.maxHighlightLength && (v.removeClass("language-markup language-javascript language-undefined language-pmresponseheaders").addClass("language-pmresponseheaders"), Prism.highlightElement(v.get(0)));
        else {
            var x = "",
                w = "";
            if (w = (x = "example-request" === d ? Z.exampleRequests[n] : Z.requestBody[n]) && x.mode && "graphql" !== x.mode ? x[x.mode] : x && "graphql" === x.mode ? "graphql-variables" === d ? x.graphql.variables : x.graphql.query : x, t = s.css("width"), s.removeClass("is-expandable click-to-expand-wrapper is-snippet-wrapper"), !w) return m.addClass("white-background").modal().find(".modal-body").empty().append(s).css("width", t || "auto"), !1;
            o ? (h.show(), h.attr("data-clipboard-target", "#modal-" + g.data("id"))) : h.hide(), y.empty().text(w), y.attr("id", ""), o && y.attr("id", "modal-" + g.data("id")), f.removeClass("white-background dark-background").addClass(l).modal().find(".modal-body").removeClass("section").addClass(r).css("width", t || "auto"), $("#rawBodyModal .modal-header .title").empty().text(a), w && w.replace(/\s/gi, "").length <= Q.maxHighlightLength && (y.removeClass("language-markup language-javascript language-undefined").addClass("language-" + (i ? "markup" : "javascript")), Prism.highlightElement(y.get(0)))
        }
    }

    function at(e, t, n) {
        var a, o, r, i, s, l = $("#languageSettingsModal .languages-list"),
            c = p();
        if (e && t && n) o = e, a = t, r = n;
        else try {
            o = v("lang_label") || "cURL", a = v("lang_preference") || "curl", r = v("lang_variant") || "cURL"
        } catch (e) {
            Raven.captureException(e)
        }
        c = c || [], i = Handlebars.partials["_language-list"]({
            languages: c,
            language: {
                key: a,
                label: o,
                variant: r
            }
        }), l.replaceWith(i), setTimeout(function() {
            (s = $("#languageSettingsModal .language-settings-container .languages-list-item.selected")) && s[0].scrollIntoView({
                block: "nearest"
            })
        }, 100), setTimeout(function() {
            Me()
        }, 100)
    }

    function ot(e, t, n, a, o) {
        var r, i, s, l = $("#languageSettingsModal .language-settings"),
            c = $("#saveLanguageSettingsBtn button"),
            u = {};
        if (ee = !0, "saveSettings" !== a && (l.addClass("is-loading"), c.removeClass("saving"), c.attr("disabled", !1)), e && t && n) i = e, r = t, s = n;
        else try {
            i = v("lang_label") || "cURL", r = v("lang_preference") || "curl", s = v("lang_variant") || "cURL"
        } catch (e) {
            Raven.captureException(e)
        }
        return st(r, s, function(e, t) {
            if (e ? it(r, i, s) : (Y = u = t, rt(u)), "saveSettings" === a) return o && o()
        })
    }

    function rt(e) {
        var t, n = $("#languageSettingsModal .language-settings"),
            a = $("#saveLanguageSettingsBtn button");
        n.removeClass("is-loading"), ee = !1, t = Handlebars.partials["_language-settings"]({
            language: e
        }), n.replaceWith(t), setTimeout(function() {
            Ne()
        }, 100), a.removeClass("saving"), a.attr("disabled", !1)
    }

    function it(e, t, n, a) {
        var o, r = $("#languageSettingsModal .language-settings"),
            i = $("#saveLanguageSettingsBtn button");
        r.removeClass("is-loading"), ee = !1, o = Handlebars.partials["_language-load-error"]({
            language: {
                key: e,
                label: t,
                variant: n
            }
        }), r.replaceWith(o), i.removeClass("saving"), i.attr("disabled", !1), Je()
    }

    function st(e, t, n) {
        d(e, t, function(e, t) {
            return e ? n(e) : t && t.languageSettings ? n(null, t.languageSettings) : n(null, t)
        })
    }

    function lt() {
        var e = $("#languageSettingsModal"),
            t = $("#languageSettingsModal .language-settings");
        K = [], null, e.modal(), t.addClass("is-loading"), ee = !0, $("body").addClass("disableScroll"), $("#languageSettingsModal").on("hidden.bs.modal", je), at(), ot()
    }

    function ct(e) {
        return e.removeClass("user-opened open").find("ul:first").removeClass("display-requests"), !0
    }

    function ut(e) {
        return e.addClass("open user-opened").find("ul:first").addClass("display-requests user-opened"), !0
    }

    function dt() {
        var e = $(this).closest(".folder");
        e.hasClass("open") && ct(e) || ut(e)
    }

    function gt() {
        var e = $(this),
            t = e.data("request-info"),
            n = e.data("request-name");
        $(".formatted-requests[data-id^=" + n + "]").hide(), $(".example-response[data-id^=" + n + "]").hide(), $(".formatted-requests[data-id=" + t + "]").show(), $(".example-response[data-id=" + t + "]").show(), $("#" + n + "_dropdown").attr("title", e.text()), $("#" + n + "_dropdown .example-name__label").text(e.text()), mt()
    }

    function pt(e, t, n) {
        var a, o, r;
        r = e && t && n ? (a = e, o = n, t) : (a = $(this).attr("data-lang-key") || "curl", o = $(this).attr("data-lang-label") || "cURL", $(this).attr("data-lang-variant") || "cURL");
        try {
            i("lang_label", o), i("lang_preference", a), i("lang_variant", r)
        } catch (e) {
            Raven.captureException(e)
        }
        X ? L(Ze) : Ge(Ze)
    }

    function ft() {
        var a = [];
        z.forEach(function(e) {
            var t = Handlebars.templates["toc-item"],
                n = {
                    id: e.slug,
                    name: e.content
                };
            a.push(t(n))
        }), a.forEach(function(e) {
            $(e).appendTo($(".toc ul"))
        })
    }

    function mt() {
        Be(function(e) {
            if (!e) return !1;
            var t = document.querySelectorAll("pre code"),
                n = [],
                a = document.querySelectorAll("pre code.is-highlighted");
            _.forEach(t, function(e) {
                ht(e) && n.push(e)
            }), _.forEach(a, function(e) {
                var t; - 1 === _.indexOf(n, e) && (t = $(e)).text(t.text()).removeClass("is-highlighted")
            }), _.forEach(n, function(e) {
                if (-1 === _.indexOf(a, e)) {
                    $(e).addClass("is-highlighted");
                    var t = vt(e);
                    Prism.highlightElement(t)
                }
            })
        })
    }

    function vt(e) {
        var t;
        return "string" != typeof e || (11 < (t = e.split("\n")).length ? e = t.slice(0, 11).join("\n") : 5e3 < e.length && (e = e.slice(0, 5e3))), e
    }

    function ht(e) {
        var t, n, a = e.getBoundingClientRect(e),
            o = window.innerHeight;
        window.innerWidth;
        return t = a.top < o && 0 < a.top || a.bottom < o && 0 < a.bottom, n = a.top < 0 && a.bottom > o, t || n
    }

    function yt(e, t) {
        if (e) {
            var n = document.getElementById(e);
            e && (n.innerText = t)
        }
    }

    function bt(e) {
        z = e, setTimeout(function() {
            T(), $t()
        }, 100)
    }

    function $t() {
        $(".accordion").on("collapse", function(e) {
            var t = $(e.target).find(".sidebar-icons"),
                n = t.children()[0],
                a = t.children()[1];
            $(n).removeClass("pm-icon-triangle--open").addClass("pm-icon-triangle--closed"), $(a).removeClass("pm-icon-folder--open").addClass("pm-icon-folder--closed")
        }), $(".accordion").on("open", function(e) {
            var t = $(e.target).find(".sidebar-icons"),
                n = t.children()[0],
                a = t.children()[1];
            $(n).removeClass("pm-icon-triangle--").addClass("pm-icon-triangle--open"), $(a).removeClass("pm-icon-folder--").addClass("pm-icon-folder--open")
        })
    }
    $(document).ready(function() {
        return X = s(), "classic-double-column" === se.value ? de(function() {
            return me(), (X ? L : Ge)(function(e, t, n, a) {
                G && (X ? O(e, t, n, a) : Ze(e, t, n, a))
            })
        }) : ge(function(e) {
            pe(e.collectionJson, e.examples), me()
        })
    })
}]);