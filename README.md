# deployable
> See this PWA project deployed at https://deployable.site

This repo serves as a template and a step-by-step guide demonstrating how to deploy a single page app to GitHub pages through TravisCI every time there is a commit or merge to the master branch.

This workflow is commonly employed by tech companies and is worth getting used to. This process will not cost you anything other than the time it takes to setup.

<br/>

## Before Starting

- Create a [TravisCI](https://travis-ci.org) account
- Fork this repository

<br/>

## Setup GitHub

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/1457604/27051779-4a568416-4faf-11e7-8163-91a2c06f8409.gif)

1. Visit [GitHub Personal Access Token Settings](https://github.com/settings/tokens/new)
2. Enter a `Token Description` and select the `repo` scope
3. Scroll down and click `Generate Token`
4. Copy the generated access token to clipboard

<br/>

## Setup Travis

![ezgif com-gif-maker](https://user-images.githubusercontent.com/1457604/27051821-6b7a9a1a-4faf-11e7-8706-4906ffbddcfe.gif)

1. Visit your [TravisCI Dashboard](https://travis-ci.org/profile) and find the `deployable` project
2. Turn the project switch `on` and click the `settings` icon
3. Turn on both switches under the `Auto Cancellation` title
4. Under `Environment Variables` enter `GITHUB_TOKEN` as _Name_
5. Paste the generated access token as _Value_ and click `Add`

<br/>

## Setup Project

1. Clone your personal fork of this project to your local machine
2. Update _name_, _description_, _version_, _author_ in `package.json`
3. Update _fqdn_ in `travis.yml` to `<project-name>.deployable.site`
4. Update _title_ and link in _subtitle_ in `README.md`
5. Add and commit the changes then `git push origin master`
