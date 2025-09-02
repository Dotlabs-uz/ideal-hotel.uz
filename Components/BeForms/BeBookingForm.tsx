'use client';
import React from 'react';
import {useEffect} from "react";

type Props = {
    lang: string;
};

function BeBookingForm({ lang }: Props) {
    const bookingForm = (w: any) => {
    // @ts-ignore
        !function(e,n){
            // @ts-ignore
            var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
            // @ts-ignore
            if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
                // @ts-ignore
                !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
                    a.onerror=a.onload=function(n,i){return function()
                        // @ts-ignore
                    {e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
                    ["uz-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"])}
        }(window, [
            ["setContext", "BE-INT-ideal-hotel-uz_2025-08-29", lang],
            ["embed", "booking-form", {
                container: "be-booking-form"
            }]
        ]);
    };

    useEffect(() => {
        bookingForm(window);
    }, [lang]);

    return (
        <div id="be-booking-form" />
    )
}

export default BeBookingForm