(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{568:function(a,t,s){a.exports=s.p+"assets/img/unsupported.679e01e6.png"},569:function(a,t,s){a.exports=s.p+"assets/img/mount.d471affc.png"},712:function(a,t,s){"use strict";s.r(t);var n=s(35),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"legacy-macos-offline-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#legacy-macos-offline-method"}},[a._v("#")]),a._v(" Legacy macOS: Offline Method")]),a._v(" "),n("p",[a._v("This method allows us to download full installers from Apple, however is limited to the following macOS versions:")]),a._v(" "),n("ul",[n("li",[a._v("Lion (10.7)")]),a._v(" "),n("li",[a._v("Mountain Lion (10.8)")]),a._v(" "),n("li",[a._v("Yosemite (10.10)")]),a._v(" "),n("li",[a._v("El Capitan (10.11)")]),a._v(" "),n("li",[a._v("Sierra (10.12)")])]),a._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),n("p",[a._v("Mavericks (10.9) is not available with this method. See "),n("RouterLink",{attrs:{to:"/installer-guide/mac-install-recovery.html"}},[a._v("Legacy macOS: Online Method")]),a._v(" for this version.")],1)]),a._v(" "),n("p",[a._v("To start, go to one of the following links:")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://support.apple.com/kb/DL2077",target:"_blank",rel:"noopener noreferrer"}},[a._v("Mac OS X Lion Installer"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://support.apple.com/kb/DL2076",target:"_blank",rel:"noopener noreferrer"}},[a._v("Mac OS X Mountain Lion Installer"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://support.apple.com/en-us/HT211683",target:"_blank",rel:"noopener noreferrer"}},[a._v("How to get old versions of macOS"),n("OutboundLink")],1),a._v(" (for 10.10 - 10.12 installers)")])]),a._v(" "),n("p",[a._v("Download your desired version and a .dmg file should be provided, with a .pkg inside.")]),a._v(" "),n("p",[a._v('Depending on what OS you\'re on, you can install this package, which will provide you with a "Install (macOS version).app" and head to '),n("a",{attrs:{href:"#setting-up-the-installer"}},[a._v("Setting up the installer")]),a._v("; however if you receive this error:")]),a._v(" "),n("p",[n("img",{attrs:{src:s(568),alt:""}})]),a._v(" "),n("p",[a._v("Your SMBIOS is too new to run that version natively (even if you're trying to make a USB for a different computer, it still checks). This means we'll need to manually extract the installer.")]),a._v(" "),n("h3",{attrs:{id:"extracting-the-installer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extracting-the-installer"}},[a._v("#")]),a._v(" Extracting the Installer")]),a._v(" "),n("p",[a._v("To start, grab the InstallMacOSX/InstallOS.dmg and mount it:")]),a._v(" "),n("p",[n("img",{attrs:{src:s(569),alt:""}})]),a._v(" "),n("p",[a._v("Next, let's open up a Terminal window and extract the package to a folder on our desktop. This may take a while.")]),a._v(" "),n("ul",[n("li",[a._v("For Lion and Mountain Lion:")])]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/Desktop\npkgutil --expand-full "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Volumes/Install Mac OS X/InstallMacOSX.pkg"')]),a._v(" OSInstaller\n")])])]),n("ul",[n("li",[a._v("For Yosemite and El Capitan:")])]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/Desktop\npkgutil --expand-full "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Volumes/Install OS X/InstallMacOSX.pkg"')]),a._v(" OSInstaller\n")])])]),n("ul",[n("li",[a._v("For Sierra:")])]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/Desktop\npkgutil --expand-full "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Volumes/Install macOS/InstallOS.pkg"')]),a._v(" OSInstaller\n")])])]),n("p",[a._v("Next, run the following (one at a time):")]),a._v(" "),n("ul",[n("li",[a._v("Lion:")])]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" OSInstaller/InstallMacOSX.pkg\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" InstallESD.dmg "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Payload/Install Mac OS X Lion.app/Contents/SharedSupport/"')]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Payload/Install Mac OS X Lion.app"')]),a._v(" /Applications\n")])])]),n("ul",[n("li",[a._v("Mountain Lion:")])]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" OSInstaller/InstallMacOSX.pkg\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" InstallESD.dmg "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Payload/Install OS X Mountain Lion.app/Contents/SharedSupport/"')]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Payload/Install OS X Mountain Lion.app"')]),a._v(" /Applications\n")])])]),n("ul",[n("li",[a._v("Yosemite:")])]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" OSInstaller/InstallMacOSX.pkg\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" InstallESD.dmg "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Payload/Install OS X Yosemite.app/Contents/SharedSupport/"')]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Payload/Install OS X Yosemite.app"')]),a._v(" /Applications\n")])])]),n("ul",[n("li",[a._v("El Capitan:")])]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" OSInstaller/InstallMacOSX.pkg\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" InstallESD.dmg "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Payload/Install OS X El Capitan.app/Contents/SharedSupport/"')]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Payload/Install OS X El Capitan.app"')]),a._v(" /Applications\n")])])]),n("ul",[n("li",[a._v("Sierra:")])]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" OSInstaller/InstallOS.pkg\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" InstallESD.dmg "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Payload/Install macOS Sierra.app/Contents/SharedSupport/"')]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Payload/Install macOS Sierra.app"')]),a._v(" /Applications\n")])])]),n("h3",{attrs:{id:"once-you-re-finished-you-can-head-to-setting-up-the-installer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#once-you-re-finished-you-can-head-to-setting-up-the-installer"}},[a._v("#")]),a._v(" Once you're finished, you can head to "),n("RouterLink",{attrs:{to:"/installer-guide/mac-install.html#setting-up-the-installer"}},[a._v("Setting up the installer")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);