import React from "react";
import { GAMBannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

export default function LowBarAds() {
    return (
        <GAMBannerAd
            unitId={TestIds.BANNER}
            sizes={[BannerAdSize.FULL_BANNER]}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
        />
    )
}