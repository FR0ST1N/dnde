# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.0-alpha.1] - (Oct 20,2021)

### Added

- changes to list page (26f7407)
- change default routing page '/' instead of '/list' (909999d)
- hide sendmail, copy preview for builds, hide editor for devices with screenwidth 1200px (e93e516)
- handle invlaid response (69e7adc)
- landing/list page changes, change font of app throught. (0998afc)
- add options for html2canvas (1d85e3f)
- change padding of default drag and drop image (fc1019b)
- crash #bug regorted (93abb22)
- add restore from lcoal feature, (85bfc5f)
- Preview - center the images, regardless of width, since that can change. (d13185a)
- compare by using underscore, instead of forloop (0b884c6)
- clone config on new load instead of passing it as reference (ec2af25)
- perfomance improvement in dev build (0f6e854)
- use logger instead of console, to control log messages (fc79046)
- load initial undo state when template is first loading (9701bfe)
- prevent text element link navigation in editor mode (02334d8)
- list page (7bddc91)
- list page header design (5461b30)
- reset undoredo on new load (a1c967f)
- add bunch of fonts from google fonts (edc79d7)
- link tag update to editor (0a43350)
- refactor getIndexOfElementInParent (a698508)
- add error boundary to unable to copy. (e8897dd)
- load the template from api (a7588f8)
- integrating /w backend (f8e9de0)
- background image for section listen for visibility instead of active element. (01b738b)
- preview generation (3f4f35a)
- btoa cant handle latin1, included a libary that does. (d6a3b4b)
- when undo/redo remove user selection (9b810ea)
- add border width, border style, border color (aef12ba)
- move importJson from api logic inside useeffect (6f1f253)
- update custom headStyle to include removing default applied underline to a tag (ae8bd75)
- width/height properties to utilize visible callback (9e555c1)
- remvoe padding to divider by default (9192164)
- imported templates processing (91920ce)
- different, but more responsive implementation of getValue (a9c86b7)
- new 3 column layout (df4d3a9)
- prerequiste for loading template from api (afcec97)
- slug to routing, new route -> load new template design (ceaa36c)
- add redux and redux toolkit (832a8b1)
- new template design (129c03e)
- preview design (4344f60)
- react router dom -> list/navigate (b9bf2a2)

## Changes

- update icosn of social (12e27e8)
- indicator for html rerenders (3af3a04)
- content inconsitent, revert back to original except remove cyclic mjmldependency (39afdeb)
- change default html content (a508dc9)
- add social icon (0d24156)
- editor height adjustment (dd2a814)
- fixed position undo redo (70891bc)
- preview for alpha build image (1511ef9)

## [0.0.0-alpha] - (Oct 16,2021)

- Initial alpha release, all functionalities included.