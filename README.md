# :rocket: deployable.site
> See this PWA project deployed at https://deployable.site

This repo serves as a template and a step-by-step guide demonstrating how to _properly_ deploy a static web application to GitHub pages. The project gets built and deployed by TravisCI every time there is a commit or merge to the master branch. This means no checking in of built assets, no sub-tree pushes just secure centralized deploys and free hosting.

This process will not cost you anything other than the time it takes to setup.

**Before continuing** ensure you have a [TravisCI](https://travis-ci.org) account and have forked [this repository](https://github.com/lukejacksonn/deployable).



<br/>

## Setup GitHub

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/1457604/27051779-4a568416-4faf-11e7-8163-91a2c06f8409.gif)

<hr/>

1. Visit [GitHub Personal Access Token Settings](https://github.com/settings/tokens/new)
2. Enter a _Token Description_ and select the _repo_ scope
3. Scroll down and click `Generate Token`
4. Copy the generated access token to clipboard

<br/>

## Setup Travis

![ezgif com-gif-maker](https://user-images.githubusercontent.com/1457604/27051821-6b7a9a1a-4faf-11e7-8706-4906ffbddcfe.gif)

<hr/>

1. Visit your [TravisCI Dashboard](https://travis-ci.org/profile) and find `username/deployable`
2. Turn on the _project switch_ and click the _settings_ icon
3. Turn on both **Auto Cancellation** switches
4. Under **Environment Variables** enter `GITHUB_TOKEN` as _Name_
5. Paste the generated access token as _Value_ and click `Add`

<br/>

## Setup Project

![ezgif com-gif-maker](https://user-images.githubusercontent.com/1457604/27058038-cf496f96-4fc6-11e7-838f-b90421cba1b9.gif)

<hr/>

1. Clone your fork of this repo to your local machine
2. Update _fqdn_ in `travis.yml` to `namespace`.deployable.site (where _namespace_ is globally unique)
3. Add and commit the changes then `git push`
4. Check the build and deploy progress on [TravisCI Dashboard](https://travis-ci.org/profile)
6. Once deployed, Visit your site at http://namespace.deployable.site
