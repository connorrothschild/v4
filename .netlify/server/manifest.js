export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","favicon-fill.png","favicon.png","fonts/.DS_Store","fonts/Satoshi-Black.eot","fonts/Satoshi-Black.ttf","fonts/Satoshi-Black.woff","fonts/Satoshi-Black.woff2","fonts/Satoshi-BlackItalic.eot","fonts/Satoshi-BlackItalic.ttf","fonts/Satoshi-BlackItalic.woff","fonts/Satoshi-BlackItalic.woff2","fonts/Satoshi-Bold.eot","fonts/Satoshi-Bold.ttf","fonts/Satoshi-Bold.woff","fonts/Satoshi-Bold.woff2","fonts/Satoshi-BoldItalic.eot","fonts/Satoshi-BoldItalic.ttf","fonts/Satoshi-BoldItalic.woff","fonts/Satoshi-BoldItalic.woff2","fonts/Satoshi-Italic.eot","fonts/Satoshi-Italic.ttf","fonts/Satoshi-Italic.woff","fonts/Satoshi-Italic.woff2","fonts/Satoshi-Light.eot","fonts/Satoshi-Light.ttf","fonts/Satoshi-Light.woff","fonts/Satoshi-Light.woff2","fonts/Satoshi-LightItalic.eot","fonts/Satoshi-LightItalic.ttf","fonts/Satoshi-LightItalic.woff","fonts/Satoshi-LightItalic.woff2","fonts/Satoshi-Medium.eot","fonts/Satoshi-Medium.ttf","fonts/Satoshi-Medium.woff","fonts/Satoshi-Medium.woff2","fonts/Satoshi-MediumItalic.eot","fonts/Satoshi-MediumItalic.ttf","fonts/Satoshi-MediumItalic.woff","fonts/Satoshi-MediumItalic.woff2","fonts/Satoshi-Regular.eot","fonts/Satoshi-Regular.ttf","fonts/Satoshi-Regular.woff","fonts/Satoshi-Regular.woff2","fonts/Satoshi-Variable.eot","fonts/Satoshi-Variable.ttf","fonts/Satoshi-Variable.woff","fonts/Satoshi-Variable.woff2","fonts/Satoshi-VariableItalic.eot","fonts/Satoshi-VariableItalic.ttf","fonts/Satoshi-VariableItalic.woff","fonts/Satoshi-VariableItalic.woff2","g/images/.DS_Store","g/images/post/covid-gun-spikes/featured-1200.png","g/images/post/covid-gun-spikes/featured-1200.webp","g/images/post/covid-gun-spikes/featured-400.png","g/images/post/covid-gun-spikes/featured-400.webp","g/images/post/covid-gun-spikes/featured-800.png","g/images/post/covid-gun-spikes/featured-800.webp","g/images/post/covid-gun-spikes/unnamed-chunk-4-1-1200.png","g/images/post/covid-gun-spikes/unnamed-chunk-4-1-1200.webp","g/images/post/covid-gun-spikes/unnamed-chunk-4-1-400.png","g/images/post/covid-gun-spikes/unnamed-chunk-4-1-400.webp","g/images/post/covid-gun-spikes/unnamed-chunk-4-1-800.png","g/images/post/covid-gun-spikes/unnamed-chunk-4-1-800.webp","g/images/post/covid-gun-spikes/unnamed-chunk-5-1-1200.png","g/images/post/covid-gun-spikes/unnamed-chunk-5-1-1200.webp","g/images/post/covid-gun-spikes/unnamed-chunk-5-1-400.png","g/images/post/covid-gun-spikes/unnamed-chunk-5-1-400.webp","g/images/post/covid-gun-spikes/unnamed-chunk-5-1-800.png","g/images/post/covid-gun-spikes/unnamed-chunk-5-1-800.webp","g/images/post/covid-gun-spikes/unnamed-chunk-6-1-1200.png","g/images/post/covid-gun-spikes/unnamed-chunk-6-1-1200.webp","g/images/post/covid-gun-spikes/unnamed-chunk-6-1-400.png","g/images/post/covid-gun-spikes/unnamed-chunk-6-1-400.webp","g/images/post/covid-gun-spikes/unnamed-chunk-6-1-800.png","g/images/post/covid-gun-spikes/unnamed-chunk-6-1-800.webp","g/images/project/atus/header-1200.png","g/images/project/atus/header-1200.webp","g/images/project/atus/header-400.png","g/images/project/atus/header-400.webp","g/images/project/atus/header-800.png","g/images/project/atus/header-800.webp","g/images/project/atus/mac-1-1200.png","g/images/project/atus/mac-1-1200.webp","g/images/project/atus/mac-1-400.png","g/images/project/atus/mac-1-400.webp","g/images/project/atus/mac-1-800.png","g/images/project/atus/mac-1-800.webp","g/images/project/atus/mac-2-1200.png","g/images/project/atus/mac-2-1200.webp","g/images/project/atus/mac-2-400.png","g/images/project/atus/mac-2-400.webp","g/images/project/atus/mac-2-800.png","g/images/project/atus/mac-2-800.webp","g/images/project/atus/phone-1-1200.png","g/images/project/atus/phone-1-1200.webp","g/images/project/atus/phone-1-400.png","g/images/project/atus/phone-1-400.webp","g/images/project/atus/phone-1-800.png","g/images/project/atus/phone-1-800.webp","g/images/project/atus/phone-2-1200.png","g/images/project/atus/phone-2-1200.webp","g/images/project/atus/phone-2-400.png","g/images/project/atus/phone-2-400.webp","g/images/project/atus/phone-2-800.png","g/images/project/atus/phone-2-800.webp","g/images/project/bob-ross-art-gallery/header-1200.png","g/images/project/bob-ross-art-gallery/header-1200.webp","g/images/project/bob-ross-art-gallery/header-400.png","g/images/project/bob-ross-art-gallery/header-400.webp","g/images/project/bob-ross-art-gallery/header-800.png","g/images/project/bob-ross-art-gallery/header-800.webp","g/images/project/bob-ross-art-gallery/iphone-1-400.png","g/images/project/bob-ross-art-gallery/iphone-1-400.webp","g/images/project/bob-ross-art-gallery/iphone-1-800.png","g/images/project/bob-ross-art-gallery/iphone-1-800.webp","g/images/project/bob-ross-art-gallery/iphone-2-400.png","g/images/project/bob-ross-art-gallery/iphone-2-400.webp","g/images/project/bob-ross-art-gallery/iphone-2-800.png","g/images/project/bob-ross-art-gallery/iphone-2-800.webp","g/images/project/bob-ross-art-gallery/iphone-3-400.png","g/images/project/bob-ross-art-gallery/iphone-3-400.webp","g/images/project/bob-ross-art-gallery/iphone-3-800.png","g/images/project/bob-ross-art-gallery/iphone-3-800.webp","g/images/project/bob-ross-art-gallery/iphone-4-400.png","g/images/project/bob-ross-art-gallery/iphone-4-400.webp","g/images/project/bob-ross-art-gallery/iphone-4-800.png","g/images/project/bob-ross-art-gallery/iphone-4-800.webp","g/images/project/bob-ross-art-gallery/mac-1-1200.png","g/images/project/bob-ross-art-gallery/mac-1-1200.webp","g/images/project/bob-ross-art-gallery/mac-1-400.png","g/images/project/bob-ross-art-gallery/mac-1-400.webp","g/images/project/bob-ross-art-gallery/mac-1-800.png","g/images/project/bob-ross-art-gallery/mac-1-800.webp","g/images/project/bob-ross-art-gallery/mac-2-1200.png","g/images/project/bob-ross-art-gallery/mac-2-1200.webp","g/images/project/bob-ross-art-gallery/mac-2-400.png","g/images/project/bob-ross-art-gallery/mac-2-400.webp","g/images/project/bob-ross-art-gallery/mac-2-800.png","g/images/project/bob-ross-art-gallery/mac-2-800.webp","g/images/project/bob-ross-art-gallery/mac-3-1200.png","g/images/project/bob-ross-art-gallery/mac-3-1200.webp","g/images/project/bob-ross-art-gallery/mac-3-400.png","g/images/project/bob-ross-art-gallery/mac-3-400.webp","g/images/project/bob-ross-art-gallery/mac-3-800.png","g/images/project/bob-ross-art-gallery/mac-3-800.webp","g/images/project/bob-ross-art-gallery/mac-4-1200.png","g/images/project/bob-ross-art-gallery/mac-4-1200.webp","g/images/project/bob-ross-art-gallery/mac-4-400.png","g/images/project/bob-ross-art-gallery/mac-4-400.webp","g/images/project/bob-ross-art-gallery/mac-4-800.png","g/images/project/bob-ross-art-gallery/mac-4-800.webp","g/images/project/bob-ross-art-gallery/mac-5-1200.png","g/images/project/bob-ross-art-gallery/mac-5-1200.webp","g/images/project/bob-ross-art-gallery/mac-5-400.png","g/images/project/bob-ross-art-gallery/mac-5-400.webp","g/images/project/bob-ross-art-gallery/mac-5-800.png","g/images/project/bob-ross-art-gallery/mac-5-800.webp","g/images/project/compas/header-1200.png","g/images/project/compas/header-1200.webp","g/images/project/compas/header-400.png","g/images/project/compas/header-400.webp","g/images/project/compas/header-800.png","g/images/project/compas/header-800.webp","g/images/project/compas/mac-1-1200.png","g/images/project/compas/mac-1-1200.webp","g/images/project/compas/mac-1-400.png","g/images/project/compas/mac-1-400.webp","g/images/project/compas/mac-1-800.png","g/images/project/compas/mac-1-800.webp","g/images/project/compas/mac-2-1200.png","g/images/project/compas/mac-2-1200.webp","g/images/project/compas/mac-2-400.png","g/images/project/compas/mac-2-400.webp","g/images/project/compas/mac-2-800.png","g/images/project/compas/mac-2-800.webp","g/images/project/compas/phone-1-1200.png","g/images/project/compas/phone-1-1200.webp","g/images/project/compas/phone-1-400.png","g/images/project/compas/phone-1-400.webp","g/images/project/compas/phone-1-800.png","g/images/project/compas/phone-1-800.webp","g/images/project/compas/phone-2-1200.png","g/images/project/compas/phone-2-1200.webp","g/images/project/compas/phone-2-400.png","g/images/project/compas/phone-2-400.webp","g/images/project/compas/phone-2-800.png","g/images/project/compas/phone-2-800.webp","g/images/project/covid-masking/header-1200.png","g/images/project/covid-masking/header-1200.webp","g/images/project/covid-masking/header-400.png","g/images/project/covid-masking/header-400.webp","g/images/project/covid-masking/header-800.png","g/images/project/covid-masking/header-800.webp","g/images/project/covid-masking/mac-1-1200.png","g/images/project/covid-masking/mac-1-1200.webp","g/images/project/covid-masking/mac-1-400.png","g/images/project/covid-masking/mac-1-400.webp","g/images/project/covid-masking/mac-1-800.png","g/images/project/covid-masking/mac-1-800.webp","g/images/project/covid-masking/mac-2-1200.png","g/images/project/covid-masking/mac-2-1200.webp","g/images/project/covid-masking/mac-2-400.png","g/images/project/covid-masking/mac-2-400.webp","g/images/project/covid-masking/mac-2-800.png","g/images/project/covid-masking/mac-2-800.webp","g/images/project/covid-masking/mac-3-1200.png","g/images/project/covid-masking/mac-3-1200.webp","g/images/project/covid-masking/mac-3-400.png","g/images/project/covid-masking/mac-3-400.webp","g/images/project/covid-masking/mac-3-800.png","g/images/project/covid-masking/mac-3-800.webp","g/images/project/covid-masking/mac-4-1200.png","g/images/project/covid-masking/mac-4-1200.webp","g/images/project/covid-masking/mac-4-400.png","g/images/project/covid-masking/mac-4-400.webp","g/images/project/covid-masking/mac-4-800.png","g/images/project/covid-masking/mac-4-800.webp","g/images/project/covid-masking/mac-5-1200.png","g/images/project/covid-masking/mac-5-1200.webp","g/images/project/covid-masking/mac-5-400.png","g/images/project/covid-masking/mac-5-400.webp","g/images/project/covid-masking/mac-5-800.png","g/images/project/covid-masking/mac-5-800.webp","g/images/project/covid-masking/phone-1-1200.png","g/images/project/covid-masking/phone-1-1200.webp","g/images/project/covid-masking/phone-1-400.png","g/images/project/covid-masking/phone-1-400.webp","g/images/project/covid-masking/phone-1-800.png","g/images/project/covid-masking/phone-1-800.webp","g/images/project/covid-masking/phone-2-1200.png","g/images/project/covid-masking/phone-2-1200.webp","g/images/project/covid-masking/phone-2-400.png","g/images/project/covid-masking/phone-2-400.webp","g/images/project/covid-masking/phone-2-800.png","g/images/project/covid-masking/phone-2-800.webp","g/images/project/covid-masking/phone-3-1200.png","g/images/project/covid-masking/phone-3-1200.webp","g/images/project/covid-masking/phone-3-400.png","g/images/project/covid-masking/phone-3-400.webp","g/images/project/covid-masking/phone-3-800.png","g/images/project/covid-masking/phone-3-800.webp","g/images/project/cudi-hums/albums-mac-1200.png","g/images/project/cudi-hums/albums-mac-1200.webp","g/images/project/cudi-hums/albums-mac-400.png","g/images/project/cudi-hums/albums-mac-400.webp","g/images/project/cudi-hums/albums-mac-800.png","g/images/project/cudi-hums/albums-mac-800.webp","g/images/project/cudi-hums/albums-phone-1200.png","g/images/project/cudi-hums/albums-phone-1200.webp","g/images/project/cudi-hums/albums-phone-400.png","g/images/project/cudi-hums/albums-phone-400.webp","g/images/project/cudi-hums/albums-phone-800.png","g/images/project/cudi-hums/albums-phone-800.webp","g/images/project/cudi-hums/header-1200.png","g/images/project/cudi-hums/header-1200.webp","g/images/project/cudi-hums/header-400.png","g/images/project/cudi-hums/header-400.webp","g/images/project/cudi-hums/header-800.png","g/images/project/cudi-hums/header-800.webp","g/images/project/cudi-hums/intro-phone-1200.png","g/images/project/cudi-hums/intro-phone-1200.webp","g/images/project/cudi-hums/intro-phone-400.png","g/images/project/cudi-hums/intro-phone-400.webp","g/images/project/cudi-hums/intro-phone-800.png","g/images/project/cudi-hums/intro-phone-800.webp","g/images/project/cudi-hums/lyrics-mac-1200.png","g/images/project/cudi-hums/lyrics-mac-1200.webp","g/images/project/cudi-hums/lyrics-mac-400.png","g/images/project/cudi-hums/lyrics-mac-400.webp","g/images/project/cudi-hums/lyrics-mac-800.png","g/images/project/cudi-hums/lyrics-mac-800.webp","g/images/project/cudi-hums/lyrics-phone-1200.png","g/images/project/cudi-hums/lyrics-phone-1200.webp","g/images/project/cudi-hums/lyrics-phone-400.png","g/images/project/cudi-hums/lyrics-phone-400.webp","g/images/project/cudi-hums/lyrics-phone-800.png","g/images/project/cudi-hums/lyrics-phone-800.webp","g/images/project/cudi-hums/outro-phone-1200.png","g/images/project/cudi-hums/outro-phone-1200.webp","g/images/project/cudi-hums/outro-phone-400.png","g/images/project/cudi-hums/outro-phone-400.webp","g/images/project/cudi-hums/outro-phone-800.png","g/images/project/cudi-hums/outro-phone-800.webp","g/images/project/cudi-hums/tracks-mac-1200.png","g/images/project/cudi-hums/tracks-mac-1200.webp","g/images/project/cudi-hums/tracks-mac-400.png","g/images/project/cudi-hums/tracks-mac-400.webp","g/images/project/cudi-hums/tracks-mac-800.png","g/images/project/cudi-hums/tracks-mac-800.webp","g/images/project/cudi-hums/tracks-phone-1200.png","g/images/project/cudi-hums/tracks-phone-1200.webp","g/images/project/cudi-hums/tracks-phone-400.png","g/images/project/cudi-hums/tracks-phone-400.webp","g/images/project/cudi-hums/tracks-phone-800.png","g/images/project/cudi-hums/tracks-phone-800.webp","g/images/project/how-many-people/header-1200.png","g/images/project/how-many-people/header-1200.webp","g/images/project/how-many-people/header-400.png","g/images/project/how-many-people/header-400.webp","g/images/project/how-many-people/header-800.png","g/images/project/how-many-people/header-800.webp","g/images/project/how-many-people/mac-1-1200.png","g/images/project/how-many-people/mac-1-1200.webp","g/images/project/how-many-people/mac-1-400.png","g/images/project/how-many-people/mac-1-400.webp","g/images/project/how-many-people/mac-1-800.png","g/images/project/how-many-people/mac-1-800.webp","g/images/project/how-many-people/mac-2-1200.png","g/images/project/how-many-people/mac-2-1200.webp","g/images/project/how-many-people/mac-2-400.png","g/images/project/how-many-people/mac-2-400.webp","g/images/project/how-many-people/mac-2-800.png","g/images/project/how-many-people/mac-2-800.webp","g/images/project/how-many-people/phone-1-1200.png","g/images/project/how-many-people/phone-1-1200.webp","g/images/project/how-many-people/phone-1-400.png","g/images/project/how-many-people/phone-1-400.webp","g/images/project/how-many-people/phone-1-800.png","g/images/project/how-many-people/phone-1-800.webp","g/images/project/how-many-people/phone-2-1200.png","g/images/project/how-many-people/phone-2-1200.webp","g/images/project/how-many-people/phone-2-400.png","g/images/project/how-many-people/phone-2-400.webp","g/images/project/how-many-people/phone-2-800.png","g/images/project/how-many-people/phone-2-800.webp","g/images/project/map-houston-homicides/header-1200.png","g/images/project/map-houston-homicides/header-1200.webp","g/images/project/map-houston-homicides/header-400.png","g/images/project/map-houston-homicides/header-400.webp","g/images/project/map-houston-homicides/header-800.png","g/images/project/map-houston-homicides/header-800.webp","g/images/project/map-houston-homicides/mac-1-1200.png","g/images/project/map-houston-homicides/mac-1-1200.webp","g/images/project/map-houston-homicides/mac-1-400.png","g/images/project/map-houston-homicides/mac-1-400.webp","g/images/project/map-houston-homicides/mac-1-800.png","g/images/project/map-houston-homicides/mac-1-800.webp","g/images/project/map-houston-homicides/mac-2-1200.png","g/images/project/map-houston-homicides/mac-2-1200.webp","g/images/project/map-houston-homicides/mac-2-400.png","g/images/project/map-houston-homicides/mac-2-400.webp","g/images/project/map-houston-homicides/mac-2-800.png","g/images/project/map-houston-homicides/mac-2-800.webp","g/images/project/map-houston-homicides/mac-3-1200.png","g/images/project/map-houston-homicides/mac-3-1200.webp","g/images/project/map-houston-homicides/mac-3-400.png","g/images/project/map-houston-homicides/mac-3-400.webp","g/images/project/map-houston-homicides/mac-3-800.png","g/images/project/map-houston-homicides/mac-3-800.webp","g/images/project/map-houston-homicides/mac-4-1200.png","g/images/project/map-houston-homicides/mac-4-1200.webp","g/images/project/map-houston-homicides/mac-4-400.png","g/images/project/map-houston-homicides/mac-4-400.webp","g/images/project/map-houston-homicides/mac-4-800.png","g/images/project/map-houston-homicides/mac-4-800.webp","g/images/project/map-houston-homicides/phone-1-1200.png","g/images/project/map-houston-homicides/phone-1-1200.webp","g/images/project/map-houston-homicides/phone-1-400.png","g/images/project/map-houston-homicides/phone-1-400.webp","g/images/project/map-houston-homicides/phone-1-800.png","g/images/project/map-houston-homicides/phone-1-800.webp","g/images/project/map-houston-homicides/phone-2-1200.png","g/images/project/map-houston-homicides/phone-2-1200.webp","g/images/project/map-houston-homicides/phone-2-400.png","g/images/project/map-houston-homicides/phone-2-400.webp","g/images/project/map-houston-homicides/phone-2-800.png","g/images/project/map-houston-homicides/phone-2-800.webp","g/images/project/map-houston-homicides/phone-3-1200.png","g/images/project/map-houston-homicides/phone-3-1200.webp","g/images/project/map-houston-homicides/phone-3-400.png","g/images/project/map-houston-homicides/phone-3-400.webp","g/images/project/map-houston-homicides/phone-3-800.png","g/images/project/map-houston-homicides/phone-3-800.webp","g/images/project/map-missing-migrants/header-1200.png","g/images/project/map-missing-migrants/header-1200.webp","g/images/project/map-missing-migrants/header-400.png","g/images/project/map-missing-migrants/header-400.webp","g/images/project/map-missing-migrants/header-800.png","g/images/project/map-missing-migrants/header-800.webp","g/images/project/map-missing-migrants/mac-1-1200.png","g/images/project/map-missing-migrants/mac-1-1200.webp","g/images/project/map-missing-migrants/mac-1-400.png","g/images/project/map-missing-migrants/mac-1-400.webp","g/images/project/map-missing-migrants/mac-1-800.png","g/images/project/map-missing-migrants/mac-1-800.webp","g/images/project/map-missing-migrants/mac-2-1200.png","g/images/project/map-missing-migrants/mac-2-1200.webp","g/images/project/map-missing-migrants/mac-2-400.png","g/images/project/map-missing-migrants/mac-2-400.webp","g/images/project/map-missing-migrants/mac-2-800.png","g/images/project/map-missing-migrants/mac-2-800.webp","g/images/project/map-missing-migrants/mac-3-1200.png","g/images/project/map-missing-migrants/mac-3-1200.webp","g/images/project/map-missing-migrants/mac-3-400.png","g/images/project/map-missing-migrants/mac-3-400.webp","g/images/project/map-missing-migrants/mac-3-800.png","g/images/project/map-missing-migrants/mac-3-800.webp","g/images/project/map-missing-migrants/mac-4-1200.png","g/images/project/map-missing-migrants/mac-4-1200.webp","g/images/project/map-missing-migrants/mac-4-400.png","g/images/project/map-missing-migrants/mac-4-400.webp","g/images/project/map-missing-migrants/mac-4-800.png","g/images/project/map-missing-migrants/mac-4-800.webp","g/images/project/map-missing-migrants/mac-5-1200.png","g/images/project/map-missing-migrants/mac-5-1200.webp","g/images/project/map-missing-migrants/mac-5-400.png","g/images/project/map-missing-migrants/mac-5-400.webp","g/images/project/map-missing-migrants/mac-5-800.png","g/images/project/map-missing-migrants/mac-5-800.webp","g/images/project/map-missing-migrants/phone-1-1200.png","g/images/project/map-missing-migrants/phone-1-1200.webp","g/images/project/map-missing-migrants/phone-1-400.png","g/images/project/map-missing-migrants/phone-1-400.webp","g/images/project/map-missing-migrants/phone-1-800.png","g/images/project/map-missing-migrants/phone-1-800.webp","g/images/project/map-missing-migrants/phone-2-1200.png","g/images/project/map-missing-migrants/phone-2-1200.webp","g/images/project/map-missing-migrants/phone-2-400.png","g/images/project/map-missing-migrants/phone-2-400.webp","g/images/project/map-missing-migrants/phone-2-800.png","g/images/project/map-missing-migrants/phone-2-800.webp","g/images/project/map-missing-migrants/phone-3-1200.png","g/images/project/map-missing-migrants/phone-3-1200.webp","g/images/project/map-missing-migrants/phone-3-400.png","g/images/project/map-missing-migrants/phone-3-400.webp","g/images/project/map-missing-migrants/phone-3-800.png","g/images/project/map-missing-migrants/phone-3-800.webp","g/images/project/media-mentions/header-1200.png","g/images/project/media-mentions/header-1200.webp","g/images/project/media-mentions/header-400.png","g/images/project/media-mentions/header-400.webp","g/images/project/media-mentions/header-800.png","g/images/project/media-mentions/header-800.webp","g/images/project/media-mentions/mac-1200.png","g/images/project/media-mentions/mac-1200.webp","g/images/project/media-mentions/mac-400.png","g/images/project/media-mentions/mac-400.webp","g/images/project/media-mentions/mac-800.png","g/images/project/media-mentions/mac-800.webp","g/images/project/media-mentions/phone-1200.png","g/images/project/media-mentions/phone-1200.webp","g/images/project/media-mentions/phone-400.png","g/images/project/media-mentions/phone-400.webp","g/images/project/media-mentions/phone-800.png","g/images/project/media-mentions/phone-800.webp","g/images/project/one-line-hacks/header-1200.png","g/images/project/one-line-hacks/header-1200.webp","g/images/project/one-line-hacks/header-400.png","g/images/project/one-line-hacks/header-400.webp","g/images/project/one-line-hacks/header-800.png","g/images/project/one-line-hacks/header-800.webp","g/images/project/one-line-hacks/mac-1-1200.png","g/images/project/one-line-hacks/mac-1-1200.webp","g/images/project/one-line-hacks/mac-1-400.png","g/images/project/one-line-hacks/mac-1-400.webp","g/images/project/one-line-hacks/mac-1-800.png","g/images/project/one-line-hacks/mac-1-800.webp","g/images/project/one-line-hacks/phone-1-1200.png","g/images/project/one-line-hacks/phone-1-1200.webp","g/images/project/one-line-hacks/phone-1-400.png","g/images/project/one-line-hacks/phone-1-400.webp","g/images/project/one-line-hacks/phone-1-800.png","g/images/project/one-line-hacks/phone-1-800.webp","g/images/project/police-killings/header-1200.png","g/images/project/police-killings/header-1200.webp","g/images/project/police-killings/header-400.png","g/images/project/police-killings/header-400.webp","g/images/project/police-killings/header-800.png","g/images/project/police-killings/header-800.webp","g/images/project/police-killings/mac-1-1200.png","g/images/project/police-killings/mac-1-1200.webp","g/images/project/police-killings/mac-1-400.png","g/images/project/police-killings/mac-1-400.webp","g/images/project/police-killings/mac-1-800.png","g/images/project/police-killings/mac-1-800.webp","g/images/project/police-killings/mac-2-1200.png","g/images/project/police-killings/mac-2-1200.webp","g/images/project/police-killings/mac-2-400.png","g/images/project/police-killings/mac-2-400.webp","g/images/project/police-killings/mac-2-800.png","g/images/project/police-killings/mac-2-800.webp","g/images/project/police-killings/phone-1-1200.png","g/images/project/police-killings/phone-1-1200.webp","g/images/project/police-killings/phone-1-400.png","g/images/project/police-killings/phone-1-400.webp","g/images/project/police-killings/phone-1-800.png","g/images/project/police-killings/phone-1-800.webp","g/images/project/police-killings/phone-2-1200.png","g/images/project/police-killings/phone-2-1200.webp","g/images/project/police-killings/phone-2-400.png","g/images/project/police-killings/phone-2-400.webp","g/images/project/police-killings/phone-2-800.png","g/images/project/police-killings/phone-2-800.webp","g/images/project/quarantunes/header-1200.png","g/images/project/quarantunes/header-1200.webp","g/images/project/quarantunes/header-400.png","g/images/project/quarantunes/header-400.webp","g/images/project/quarantunes/header-800.png","g/images/project/quarantunes/header-800.webp","g/images/project/quarantunes/macbook-1200.png","g/images/project/quarantunes/macbook-1200.webp","g/images/project/quarantunes/macbook-400.png","g/images/project/quarantunes/macbook-400.webp","g/images/project/quarantunes/macbook-800.png","g/images/project/quarantunes/macbook-800.webp","g/images/project/quarantunes/side-by-side-1200.png","g/images/project/quarantunes/side-by-side-1200.webp","g/images/project/quarantunes/side-by-side-400.png","g/images/project/quarantunes/side-by-side-400.webp","g/images/project/quarantunes/side-by-side-800.png","g/images/project/quarantunes/side-by-side-800.webp","g/images/project/state-police-spending/header-1200.png","g/images/project/state-police-spending/header-1200.webp","g/images/project/state-police-spending/header-400.png","g/images/project/state-police-spending/header-400.webp","g/images/project/state-police-spending/header-800.png","g/images/project/state-police-spending/header-800.webp","g/images/project/state-police-spending/mac-1200.png","g/images/project/state-police-spending/mac-1200.webp","g/images/project/state-police-spending/mac-400.png","g/images/project/state-police-spending/mac-400.webp","g/images/project/state-police-spending/mac-800.png","g/images/project/state-police-spending/mac-800.webp","g/images/project/state-police-spending/phone-1200.png","g/images/project/state-police-spending/phone-1200.webp","g/images/project/state-police-spending/phone-400.png","g/images/project/state-police-spending/phone-400.webp","g/images/project/state-police-spending/phone-800.png","g/images/project/state-police-spending/phone-800.webp","g/images/project/tpl-schools-db/header-1200.png","g/images/project/tpl-schools-db/header-1200.webp","g/images/project/tpl-schools-db/header-400.png","g/images/project/tpl-schools-db/header-400.webp","g/images/project/tpl-schools-db/header-800.png","g/images/project/tpl-schools-db/header-800.webp","g/images/project/tpl-schools-db/iphone-1-400.png","g/images/project/tpl-schools-db/iphone-1-400.webp","g/images/project/tpl-schools-db/iphone-1-800.png","g/images/project/tpl-schools-db/iphone-1-800.webp","g/images/project/tpl-schools-db/iphone-2-400.png","g/images/project/tpl-schools-db/iphone-2-400.webp","g/images/project/tpl-schools-db/iphone-2-800.png","g/images/project/tpl-schools-db/iphone-2-800.webp","g/images/project/tpl-schools-db/iphone-3-400.png","g/images/project/tpl-schools-db/iphone-3-400.webp","g/images/project/tpl-schools-db/iphone-3-800.png","g/images/project/tpl-schools-db/iphone-3-800.webp","g/images/project/tpl-schools-db/mac-1-1200.png","g/images/project/tpl-schools-db/mac-1-1200.webp","g/images/project/tpl-schools-db/mac-1-400.png","g/images/project/tpl-schools-db/mac-1-400.webp","g/images/project/tpl-schools-db/mac-1-800.png","g/images/project/tpl-schools-db/mac-1-800.webp","g/images/project/tpl-schools-db/mac-2-1200.png","g/images/project/tpl-schools-db/mac-2-1200.webp","g/images/project/tpl-schools-db/mac-2-400.png","g/images/project/tpl-schools-db/mac-2-400.webp","g/images/project/tpl-schools-db/mac-2-800.png","g/images/project/tpl-schools-db/mac-2-800.webp","images/.DS_Store","images/icons/shuffle.svg","images/jobs/axios.svg","images/jobs/moksha.svg","images/jobs/socom.svg","images/jobs/tpl.svg","images/me/.DS_Store","images/me/1.png","images/me/2.png","images/me/3.png","images/me/4.png","images/me/5.png","images/noise/.DS_Store","images/noise/basic.png","images/noise/grid.png","images/noise/groovy.png","images/post/.DS_Store","images/post/adding-a-chart-to-your-d3-tooltip/.DS_Store","images/post/adding-a-chart-to-your-d3-tooltip/header.png","images/post/adding-a-chart-to-your-d3-tooltip/new-tooltip.gif","images/post/adding-a-chart-to-your-d3-tooltip/old-tooltip.gif","images/post/adding-a-chart-to-your-d3-tooltip/west-virginia.jpg","images/post/animate-hugo-academic/about.png","images/post/animate-hugo-academic/after-demo-hero-remove.png","images/post/animate-hugo-academic/before-demo-hero-remove.png","images/post/animate-hugo-academic/bg-red.png","images/post/animate-hugo-academic/double-slide.gif","images/post/animate-hugo-academic/final.gif","images/post/animate-hugo-academic/font-red.png","images/post/animate-hugo-academic/header.jpg","images/post/animate-hugo-academic/header.png","images/post/animate-hugo-academic/left-and-right.gif","images/post/animate-hugo-academic/red.gif","images/post/animate-hugo-academic/slide-from-right.gif","images/post/automation-scrollytell/header.png","images/post/bible-babies/boys.gif","images/post/bible-babies/combined.gif","images/post/bible-babies/girls.gif","images/post/bible-babies/header.png","images/post/bible-babies/line.png","images/post/bible-babies/male-female-line.png","images/post/color-in-data-vis/.DS_Store","images/post/color-in-data-vis/all-color.jpg","images/post/color-in-data-vis/all-grey.jpg","images/post/color-in-data-vis/bad-and-better.jpg","images/post/color-in-data-vis/bad-chart.jpg","images/post/color-in-data-vis/bad-color-use-1.jpg","images/post/color-in-data-vis/bad-color-use-2.jpg","images/post/color-in-data-vis/better-chart1.png","images/post/color-in-data-vis/betterchart-1.jpg","images/post/color-in-data-vis/choropleth-ex.jpg","images/post/color-in-data-vis/color-emotion-guide-lol.jpg","images/post/color-in-data-vis/color-emphasized.png","images/post/color-in-data-vis/flipping-points-color-annotate1.jpg","images/post/color-in-data-vis/flipping-points-color-annotate2.jpg","images/post/color-in-data-vis/flipping-points-color.jpg","images/post/color-in-data-vis/header-old.png","images/post/color-in-data-vis/header.png","images/post/color-in-data-vis/map-Texas-rainbow-1.jpg","images/post/color-in-data-vis/popgrowth-vs-popsize-bw-1.png","images/post/covid-gun-spikes/featured.png","images/post/covid-gun-spikes/header.png","images/post/covid-gun-spikes/table-replacement.png","images/post/covid-gun-spikes/unnamed-chunk-4-1.png","images/post/covid-gun-spikes/unnamed-chunk-5-1.png","images/post/covid-gun-spikes/unnamed-chunk-6-1.png","images/post/covid-on-campus/featured.png","images/post/covid-on-campus/geofacet_processed.png","images/post/covid-on-campus/header.png","images/post/covid-on-campus/table1.png","images/post/covid-on-campus/table2.png","images/post/covid-on-campus/table3.png","images/post/covid-posts/authorVer2-1.png","images/post/covid-posts/dataTable-1.png","images/post/covid-posts/featured.png","images/post/covid-posts/header.png","images/post/covid-posts/prolificVer2-1.png","images/post/covid-posts/topicsVer2-1.png","images/post/covid-posts/weekly-1.png","images/post/do-something-else/startup-faang-satisfaction.png","images/post/dumbbell-plots/age-disrupt.jpg","images/post/dumbbell-plots/age-worry.jpg","images/post/dumbbell-plots/axios.jpg","images/post/dumbbell-plots/featured.jpg","images/post/dumbbell-plots/header.png","images/post/dumbbell-plots/partisan-disrupt.jpg","images/post/dumbbell-plots/partisan-worry.jpg","images/post/dumbbell-plots/pew.jpg","images/post/dumbbell-plots/process-0.jpg","images/post/dumbbell-plots/process-1.jpg","images/post/dumbbell-plots/process-2.jpg","images/post/dumbbell-plots/process-3.jpg","images/post/dumbbell-plots/process-4.jpg","images/post/dumbbell-plots/process-5.jpg","images/post/dumbbell-plots/process-6.jpg","images/post/dumbbell-plots/process-gif.gif","images/post/dumbbell-plots/table.jpg","images/post/economist-table-replication-using-reactable/featured.png","images/post/economist-table-replication-using-reactable/header.png","images/post/flat-data-r/.DS_Store","images/post/flat-data-r/flat-diagram.png","images/post/flat-data-r/header.png","images/post/introducing-tpltheme/featured.png","images/post/introducing-tpltheme/header.png","images/post/introducing-tpltheme/unnamed-chunk-10-1.png","images/post/introducing-tpltheme/unnamed-chunk-11-1.png","images/post/introducing-tpltheme/unnamed-chunk-12-1.png","images/post/introducing-tpltheme/unnamed-chunk-13-1.png","images/post/introducing-tpltheme/unnamed-chunk-14-1.png","images/post/introducing-tpltheme/unnamed-chunk-15-1.png","images/post/introducing-tpltheme/unnamed-chunk-16-1.png","images/post/introducing-tpltheme/unnamed-chunk-17-1.png","images/post/introducing-tpltheme/unnamed-chunk-18-1.png","images/post/introducing-tpltheme/unnamed-chunk-3-1.png","images/post/introducing-tpltheme/unnamed-chunk-5-1.png","images/post/introducing-tpltheme/unnamed-chunk-6-1.png","images/post/introducing-tpltheme/unnamed-chunk-7-1.png","images/post/introducing-tpltheme/unnamed-chunk-8-1.png","images/post/introducing-tpltheme/unnamed-chunk-9-1.png","images/post/map-springfield/bw_map_springfield.png","images/post/map-springfield/gold_map_springfield.png","images/post/map-springfield/header.png","images/post/media-mentions/header.png","images/post/media-mentions/unnamed-chunk-2-1.png","images/post/media-mentions/unnamed-chunk-3-1.png","images/post/media-mentions/unnamed-chunk-4-1.png","images/post/media-mentions/unnamed-chunk-5-1.png","images/post/media-mentions/unnamed-chunk-6-1.png","images/post/media-mentions/unnamed-chunk-7-1.png","images/post/nuxt-blog-starter/blog-card.png","images/post/nuxt-blog-starter/dark.png","images/post/nuxt-blog-starter/header.png","images/post/nuxt-blog-starter/home-card.png","images/post/nuxt-blog-starter/light.png","images/post/nuxt-blog-starter/new-site-perf.png","images/post/nuxt-blog-starter/old-site-perf.png","images/post/nuxt-blog-starter/transitions.gif","images/post/refugee-trends/.DS_Store","images/post/refugee-trends/featured.png","images/post/refugee-trends/final.svg","images/post/refugee-trends/firsttry.jpg","images/post/refugee-trends/header.png","images/post/refugee-trends/macro.jpg","images/post/refugee-trends/policyviz.jpg","images/post/refugee-trends/ref.png","images/post/refugee-trends/secondtry.jpg","images/post/refugee-trends/wapo.png","images/post/svelte-and-d3/header-old.png","images/post/svelte-and-d3/header.png","images/post/svelte-scrollytelling/map.gif","images/post/this-site/.DS_Store","images/post/this-site/award-example.png","images/post/this-site/blog-example.png","images/post/this-site/commits.png","images/post/this-site/flayks-project.png","images/post/this-site/hero.mp4","images/post/this-site/inview.mp4","images/post/this-site/niccolo-tweet-1.png","images/post/this-site/niccolo-tweet-2.png","images/post/this-site/paul-graham.png","images/post/this-site/project-example.png","images/post/this-site/projects.mp4","images/post/tidy-tuesday-powerlifting/featured.png","images/post/tidy-tuesday-powerlifting/header.png","images/post/tidy-tuesday-powerlifting/table.png","images/post/tidy-tuesday-powerlifting/unnamed-chunk-10-1.gif","images/post/tidy-tuesday-powerlifting/unnamed-chunk-11-1.gif","images/post/tidy-tuesday-powerlifting/unnamed-chunk-8-1.png","images/post/tidy-tuesday-powerlifting/unnamed-chunk-9-1.gif","images/post/tidy-tuesday-replication/bloomberg.png","images/post/tidy-tuesday-replication/featured.png","images/post/tidy-tuesday-replication/header.png","images/post/tidy-tuesday-replication/replication.png","images/project/.DS_Store","images/project/atus/header.png","images/project/atus/mac-1.png","images/project/atus/mac-2.png","images/project/atus/phone-1.png","images/project/atus/phone-2.png","images/project/atus/thumbnail.png","images/project/bob-ross-art-gallery/header.png","images/project/bob-ross-art-gallery/iphone-1.png","images/project/bob-ross-art-gallery/iphone-2.png","images/project/bob-ross-art-gallery/iphone-3.png","images/project/bob-ross-art-gallery/iphone-4.png","images/project/bob-ross-art-gallery/mac-1.png","images/project/bob-ross-art-gallery/mac-2.png","images/project/bob-ross-art-gallery/mac-3.png","images/project/bob-ross-art-gallery/mac-4.png","images/project/bob-ross-art-gallery/mac-5.png","images/project/bob-ross-art-gallery/thumbnail.png","images/project/compas/header.png","images/project/compas/mac-1.png","images/project/compas/mac-2.png","images/project/compas/phone-1.png","images/project/compas/phone-2.png","images/project/compas/thumbnail.png","images/project/covid-masking/header.png","images/project/covid-masking/mac-1.png","images/project/covid-masking/mac-2.png","images/project/covid-masking/mac-3.png","images/project/covid-masking/mac-4.png","images/project/covid-masking/mac-5.png","images/project/covid-masking/phone-1.png","images/project/covid-masking/phone-2.png","images/project/covid-masking/phone-3.png","images/project/covid-masking/thumbnail.png","images/project/cudi-hums/.DS_Store","images/project/cudi-hums/albums-mac.png","images/project/cudi-hums/albums-phone.png","images/project/cudi-hums/header.png","images/project/cudi-hums/intro-phone.png","images/project/cudi-hums/lyrics-mac.png","images/project/cudi-hums/lyrics-phone.png","images/project/cudi-hums/outro-phone.png","images/project/cudi-hums/thumbnail.png","images/project/cudi-hums/tracks-mac.png","images/project/cudi-hums/tracks-phone.png","images/project/how-many-people/header.png","images/project/how-many-people/mac-1.png","images/project/how-many-people/mac-2.png","images/project/how-many-people/phone-1.png","images/project/how-many-people/phone-2.png","images/project/how-many-people/thumbnail.png","images/project/map-houston-homicides/header.png","images/project/map-houston-homicides/mac-1.png","images/project/map-houston-homicides/mac-2.png","images/project/map-houston-homicides/mac-3.png","images/project/map-houston-homicides/mac-4.png","images/project/map-houston-homicides/phone-1.png","images/project/map-houston-homicides/phone-2.png","images/project/map-houston-homicides/phone-3.png","images/project/map-houston-homicides/thumbnail.png","images/project/map-missing-migrants/header.png","images/project/map-missing-migrants/mac-1.png","images/project/map-missing-migrants/mac-2.png","images/project/map-missing-migrants/mac-3.png","images/project/map-missing-migrants/mac-4.png","images/project/map-missing-migrants/mac-5.png","images/project/map-missing-migrants/phone-1.png","images/project/map-missing-migrants/phone-2.png","images/project/map-missing-migrants/phone-3.png","images/project/map-missing-migrants/thumbnail.png","images/project/media-mentions/header.png","images/project/media-mentions/mac.png","images/project/media-mentions/phone.png","images/project/media-mentions/thumbnail.png","images/project/one-line-hacks/.DS_Store","images/project/one-line-hacks/header-old.png","images/project/one-line-hacks/header.png","images/project/one-line-hacks/mac-1.png","images/project/one-line-hacks/phone-1.png","images/project/one-line-hacks/thumbnail.png","images/project/police-killings/header.png","images/project/police-killings/mac-1.png","images/project/police-killings/mac-2.png","images/project/police-killings/phone-1.png","images/project/police-killings/phone-2.png","images/project/police-killings/thumbnail.png","images/project/quarantunes/header.png","images/project/quarantunes/macbook.png","images/project/quarantunes/phone.png","images/project/quarantunes/side-by-side.png","images/project/quarantunes/tablet.png","images/project/quarantunes/thumbnail.png","images/project/state-police-spending/header.png","images/project/state-police-spending/mac.png","images/project/state-police-spending/phone.png","images/project/state-police-spending/thumbnail.png","images/project/tpl-schools-db/.DS_Store","images/project/tpl-schools-db/header.png","images/project/tpl-schools-db/iphone-1.png","images/project/tpl-schools-db/iphone-2.png","images/project/tpl-schools-db/iphone-3.png","images/project/tpl-schools-db/mac-1.png","images/project/tpl-schools-db/mac-2.png","images/project/tpl-schools-db/thumbnail.png","plugins/MorphSVGPlugin.min.js","social.png","videos/.DS_Store","videos/0.mov","videos/0.webm","videos/1.mov","videos/1.webm","videos/2.mov","videos/2.webm","videos/3.mov","videos/3.webm","videos/raw/.DS_Store","videos/raw/0.mov","videos/raw/0.webm","videos/raw/1-prores.mov","videos/raw/1.mov","videos/raw/1.webm","videos/raw/2.mov","videos/raw/2.webm","videos/raw/3-prores.mov","videos/raw/3.mov","videos/raw/3.webm","workers/bundler.js","workers/compiler.js"]),
	mimeTypes: {".png":"image/png",".eot":"application/vnd.ms-fontobject",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".webp":"image/webp",".svg":"image/svg+xml",".gif":"image/gif",".jpg":"image/jpeg",".mp4":"video/mp4",".js":"application/javascript",".mov":"video/quicktime",".webm":"video/webm"},
	_: {
		entry: {"file":"_app/immutable/start-addc9821.js","imports":["_app/immutable/start-addc9821.js","_app/immutable/chunks/index-41fb7161.js","_app/immutable/chunks/singletons-89692b04.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js'),
			() => import('./nodes/33.js'),
			() => import('./nodes/34.js'),
			() => import('./nodes/35.js'),
			() => import('./nodes/36.js'),
			() => import('./nodes/37.js'),
			() => import('./nodes/38.js'),
			() => import('./nodes/39.js'),
			() => import('./nodes/40.js'),
			() => import('./nodes/41.js'),
			() => import('./nodes/42.js'),
			() => import('./nodes/43.js'),
			() => import('./nodes/44.js'),
			() => import('./nodes/45.js'),
			() => import('./nodes/46.js'),
			() => import('./nodes/47.js'),
			() => import('./nodes/48.js'),
			() => import('./nodes/49.js'),
			() => import('./nodes/50.js'),
			() => import('./nodes/51.js'),
			() => import('./nodes/52.js'),
			() => import('./nodes/53.js'),
			() => import('./nodes/54.js'),
			() => import('./nodes/55.js'),
			() => import('./nodes/56.js'),
			() => import('./nodes/57.js'),
			() => import('./nodes/58.js'),
			() => import('./nodes/59.js'),
			() => import('./nodes/60.js'),
			() => import('./nodes/61.js'),
			() => import('./nodes/62.js'),
			() => import('./nodes/63.js'),
			() => import('./nodes/64.js')
		],
		routes: [
			{
					id: "",
					pattern: /^\/$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":2},
					endpoint: null
				},
			{
					id: "awards.json",
					pattern: /^\/awards\.json$/,
					names: [],
					types: [],
					page: null,
					endpoint: () => import('./entries/endpoints/awards.json/_server.js')
				},
			{
					id: "experience.json",
					pattern: /^\/experience\.json$/,
					names: [],
					types: [],
					page: null,
					endpoint: () => import('./entries/endpoints/experience.json/_server.js')
				},
			{
					id: "posts.json",
					pattern: /^\/posts\.json$/,
					names: [],
					types: [],
					page: null,
					endpoint: () => import('./entries/endpoints/posts.json/_server.js')
				},
			{
					id: "projects.json",
					pattern: /^\/projects\.json$/,
					names: [],
					types: [],
					page: null,
					endpoint: () => import('./entries/endpoints/projects.json/_server.js')
				},
			{
					id: "about",
					pattern: /^\/about\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":3},
					endpoint: null
				},
			{
					id: "award",
					pattern: /^\/award\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":4},
					endpoint: null
				},
			{
					id: "experience",
					pattern: /^\/experience\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":20},
					endpoint: null
				},
			{
					id: "post",
					pattern: /^\/post\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":25},
					endpoint: null
				},
			{
					id: "project",
					pattern: /^\/project\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":50},
					endpoint: null
				},
			{
					id: "award/bipp-2018",
					pattern: /^\/award\/bipp-2018\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":5},
					endpoint: null
				},
			{
					id: "award/chrp-2020",
					pattern: /^\/award\/chrp-2020\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":6},
					endpoint: null
				},
			{
					id: "award/d2k-showcase-2020",
					pattern: /^\/award\/d2k-showcase-2020\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":7},
					endpoint: null
				},
			{
					id: "award/datathon-2020",
					pattern: /^\/award\/datathon-2020\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":8},
					endpoint: null
				},
			{
					id: "award/hpc-2018",
					pattern: /^\/award\/hpc-2018\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":9},
					endpoint: null
				},
			{
					id: "award/hpc-2019",
					pattern: /^\/award\/hpc-2019\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":10},
					endpoint: null
				},
			{
					id: "award/hpc-2020",
					pattern: /^\/award\/hpc-2020\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":11},
					endpoint: null
				},
			{
					id: "award/hudspeth-2020",
					pattern: /^\/award\/hudspeth-2020\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":12},
					endpoint: null
				},
			{
					id: "award/malofiej-2020",
					pattern: /^\/award\/malofiej-2020\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":13},
					endpoint: null
				},
			{
					id: "award/malofiej-2021",
					pattern: /^\/award\/malofiej-2021\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":14},
					endpoint: null
				},
			{
					id: "award/nationals-2017",
					pattern: /^\/award\/nationals-2017\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":15},
					endpoint: null
				},
			{
					id: "award/northeastern-2020",
					pattern: /^\/award\/northeastern-2020\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":16},
					endpoint: null
				},
			{
					id: "award/pudding-cup-2020",
					pattern: /^\/award\/pudding-cup-2020\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":17},
					endpoint: null
				},
			{
					id: "award/rstudio-table-contest-2021",
					pattern: /^\/award\/rstudio-table-contest-2021\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":18},
					endpoint: null
				},
			{
					id: "award/snd-2021",
					pattern: /^\/award\/snd-2021\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":19},
					endpoint: null
				},
			{
					id: "experience/axios",
					pattern: /^\/experience\/axios\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":21},
					endpoint: null
				},
			{
					id: "experience/moksha",
					pattern: /^\/experience\/moksha\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":22},
					endpoint: null
				},
			{
					id: "experience/socom",
					pattern: /^\/experience\/socom\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":23},
					endpoint: null
				},
			{
					id: "experience/tpl",
					pattern: /^\/experience\/tpl\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":24},
					endpoint: null
				},
			{
					id: "post/adding-a-chart-to-your-d3-tooltip",
					pattern: /^\/post\/adding-a-chart-to-your-d3-tooltip\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":26},
					endpoint: null
				},
			{
					id: "post/animate-hugo-academic",
					pattern: /^\/post\/animate-hugo-academic\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":27},
					endpoint: null
				},
			{
					id: "post/automation-scrollytell",
					pattern: /^\/post\/automation-scrollytell\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":28},
					endpoint: null
				},
			{
					id: "post/color-in-data-vis",
					pattern: /^\/post\/color-in-data-vis\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":29},
					endpoint: null
				},
			{
					id: "post/covid-gun-spikes",
					pattern: /^\/post\/covid-gun-spikes\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":30},
					endpoint: null
				},
			{
					id: "post/covid-on-campus",
					pattern: /^\/post\/covid-on-campus\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":31},
					endpoint: null
				},
			{
					id: "post/covid-posts",
					pattern: /^\/post\/covid-posts\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":32},
					endpoint: null
				},
			{
					id: "post/do-something-else",
					pattern: /^\/post\/do-something-else\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":33},
					endpoint: null
				},
			{
					id: "post/dumbbell-plots",
					pattern: /^\/post\/dumbbell-plots\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":34},
					endpoint: null
				},
			{
					id: "post/economist-table-replication-using-reactable",
					pattern: /^\/post\/economist-table-replication-using-reactable\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":35},
					endpoint: null
				},
			{
					id: "post/flat-data-r",
					pattern: /^\/post\/flat-data-r\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":36},
					endpoint: null
				},
			{
					id: "post/following",
					pattern: /^\/post\/following\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":37},
					endpoint: null
				},
			{
					id: "post/introducing-tpltheme",
					pattern: /^\/post\/introducing-tpltheme\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":38},
					endpoint: null
				},
			{
					id: "post/learning",
					pattern: /^\/post\/learning\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":39},
					endpoint: null
				},
			{
					id: "post/map-springfield",
					pattern: /^\/post\/map-springfield\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":40},
					endpoint: null
				},
			{
					id: "post/nuxt-blog-starter",
					pattern: /^\/post\/nuxt-blog-starter\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":41},
					endpoint: null
				},
			{
					id: "post/refugee-trends",
					pattern: /^\/post\/refugee-trends\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":42},
					endpoint: null
				},
			{
					id: "post/svelte-and-d3",
					pattern: /^\/post\/svelte-and-d3\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":43},
					endpoint: null
				},
			{
					id: "post/svelte-reactivity",
					pattern: /^\/post\/svelte-reactivity\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":44},
					endpoint: null
				},
			{
					id: "post/svelte-scatter",
					pattern: /^\/post\/svelte-scatter\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":45},
					endpoint: null
				},
			{
					id: "post/svelte-scrollytelling",
					pattern: /^\/post\/svelte-scrollytelling\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":46},
					endpoint: null
				},
			{
					id: "post/this-site",
					pattern: /^\/post\/this-site\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":47},
					endpoint: null
				},
			{
					id: "post/tidy-tuesday-powerlifting",
					pattern: /^\/post\/tidy-tuesday-powerlifting\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":48},
					endpoint: null
				},
			{
					id: "post/tidy-tuesday-replication",
					pattern: /^\/post\/tidy-tuesday-replication\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":49},
					endpoint: null
				},
			{
					id: "project/atus",
					pattern: /^\/project\/atus\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":51},
					endpoint: null
				},
			{
					id: "project/bob-ross-art-gallery",
					pattern: /^\/project\/bob-ross-art-gallery\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":52},
					endpoint: null
				},
			{
					id: "project/compas",
					pattern: /^\/project\/compas\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":53},
					endpoint: null
				},
			{
					id: "project/covid-masking",
					pattern: /^\/project\/covid-masking\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":54},
					endpoint: null
				},
			{
					id: "project/cudi-hums",
					pattern: /^\/project\/cudi-hums\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":55},
					endpoint: null
				},
			{
					id: "project/how-many-people",
					pattern: /^\/project\/how-many-people\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":56},
					endpoint: null
				},
			{
					id: "project/map-houston-homicides",
					pattern: /^\/project\/map-houston-homicides\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":57},
					endpoint: null
				},
			{
					id: "project/map-missing-migrants",
					pattern: /^\/project\/map-missing-migrants\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":58},
					endpoint: null
				},
			{
					id: "project/media-mentions",
					pattern: /^\/project\/media-mentions\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":59},
					endpoint: null
				},
			{
					id: "project/one-line-hacks",
					pattern: /^\/project\/one-line-hacks\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":60},
					endpoint: null
				},
			{
					id: "project/police-killings",
					pattern: /^\/project\/police-killings\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":61},
					endpoint: null
				},
			{
					id: "project/quarantunes",
					pattern: /^\/project\/quarantunes\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":62},
					endpoint: null
				},
			{
					id: "project/state-police-spending",
					pattern: /^\/project\/state-police-spending\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":63},
					endpoint: null
				},
			{
					id: "project/tpl-schools-db",
					pattern: /^\/project\/tpl-schools-db\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":64},
					endpoint: null
				}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
