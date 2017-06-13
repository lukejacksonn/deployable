# :rocket: deployable.site
> See this project deployed at https://deployable.site

This repo simply serves as a very minimalist progressive web app boilerplate. The README however is a step-by-step guide demonstrating how to _properly_ deploy a static web application (such as this) to GitHub pages without ever checking in built assets or directly pushing to the `gh-pages` branch. This approach was pieced together from various blog posts and stackoverflow answers, making the most of free services provided by GitHub, TravisCI and CloudFlare to promote applying industry standard workflows to open source apps; review, build, test, deploy _and_ serve over https for free with almost no configuration! Or servers for that matter :fishing_pole_and_fish:

<hr/>

:angel: You need a free [TravisCI](https://travis-ci.org) account and [CloudFlare](https://travis-ci.org) basic account (if you require custom https domains)

<hr/>

## Setup Overview

1. **Select Project**: single out an existing _deployable_ web app repository or use a fork of this repo
2. **Obtain Token**: one per project from [here](https://github.com/settings/tokens/new), copy it and use as the value of `GITHUB_TOKEN` in travis
3. **Enable TravisCI**: switch on builds for the project [here](https://travis-ci.org/profile) and add the `GITHUB_TOKEN` environment variable
4. **Configure Build**: add a file like [this](https://github.com/lukejacksonn/deployable/blob/master/.travis.yml) to the project root and configure for your application
5. **Trigger Deploy**: push to master or merge pull request to invoke a full build and deploy :boom:

<br/>

## Setup GitHub

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/1457604/27051779-4a568416-4faf-11e7-8163-91a2c06f8409.gif)

<hr/>

1. Navigate to [GitHub Personal Access Token Settings](https://github.com/settings/tokens/new)
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
