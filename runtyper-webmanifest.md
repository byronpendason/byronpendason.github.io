---
permalink: /manifest.webmanifest
---
{
  // Name of the app and short name in case there isn't enough space
  "name": "RuneTyper",
  "short_name": "RuneTyper",
  // Description what your app is
  "description": "Type Runes on your phone or desktop!",
 
  // Scope and start URL - these need to change to yours
  "scope": "/runetyper",
  "start_url": "/runetyper",
 
  // colours of the app as displayed in the installer
  "background_color": "#000000",
  "theme_color": "#000000",
 
  // Display of the app. 
  //This could be "standalone", "fullscreen", "minimal-ui" or "browser"
  "display": "standalone", 
 
  // The possible icons to display. Make sure to change the src URL,
  // the type and the size to your needs. If the size isn't correct, 
  // you may not be able to install the app. 
  "icons": [
      {
        "src": "/media/runetyper.png",
        "type": "image/png",
        "sizes": "512x512"
      }
  ]
}
