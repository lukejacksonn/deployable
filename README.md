# deployable.site
> See this project deployed at https://deployable.site

This repo simply serves as a very minimalist progressive web app boilerplate. The README however is a step-by-step guide demonstrating how to _properly_ deploy a static web application (such as this) to GitHub pages without ever checking in built assets or directly pushing to the `gh-pages` branch. This approach was pieced together from various blog posts and stackoverflow answers, making the most of free services provided by GitHub, TravisCI and CloudFlare to promote applying industry standard workflows to open source apps; review, build, test, deploy _and_ serve over https for free with almost no configuration! Or servers for that matter :fishing_pole_and_fish:

<hr/>

:angel: You need a free [TravisCI](https://travis-ci.org) account and [CloudFlare](https://travis-ci.org) basic account (if you require custom https domains)

<hr/>

## Setup Overview

1. **Prepare Project**: create a _deployable_ project repository or use a fork of this repo
2. **Obtain Token**: one per project from [here](https://github.com/settings/tokens/new), copy it and use as the value of `GITHUB_TOKEN` in travis
3. **Enable TravisCI**: switch on builds for the project [here](https://travis-ci.org/profile) and add the `GITHUB_TOKEN` environment variable
4. **Configure Build**: add a file like [this](https://github.com/lukejacksonn/deployable/blob/master/.travis.yml) to the project root and configure for your application
5. **Trigger Deploy**: push to master or merge a pull request to invoke a full build and deploy :boom:

<br/>

# 1. Prepare Project

This structure of this repository adheres to a _deployable_ configuration but that doesn't mean you have to use this code as a basis for your _deployable_ project. This approach will work with almost any static site architecture, framework or build pipeline. The important things to recognize are:

- Deployable projects are _frontend only_ and consists of just static files (html/css/javascript/images).
- Deployable projects build all the files they need to run into some single output directory (dist/build/public/etc).
- Deployable projects have a command that builds the project and optionally runs tests (e.g. npm run build).
- Deployable projects feature an `index.html` and a `404.html` in the output directory after being built.
- Deployable projects handle routing on the frontend (all server requests will return the contents of `index.html`).

If your project does not meet all the _deployable_ requirements then you can clone/fork this repository and build upon it or tweak your project to fit.

<br/>

# 2. Obtain Token

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/1457604/27051779-4a568416-4faf-11e7-8163-91a2c06f8409.gif)

<hr/>

1. Navigate to [GitHub Personal Access Token Settings](https://github.com/settings/tokens/new)
2. Enter a _Token Description_ and select the _repo_ scope
3. Scroll down and click `Generate Token`
4. Copy the generated access token to clipboard

<br/>

# 3. Enable TravisCI

![ezgif com-gif-maker](https://user-images.githubusercontent.com/1457604/27051821-6b7a9a1a-4faf-11e7-8706-4906ffbddcfe.gif)

<hr/>

1. Visit your [TravisCI Dashboard](https://travis-ci.org/profile) and find the deployable repository
2. Turn on the _project switch_ and click the _settings_ icon
3. Turn on both **Auto Cancellation** switches
4. Under **Environment Variables** enter `GITHUB_TOKEN` as _Name_
5. Paste the generated access token as _Value_ and click `Add`

<br/>

# 4. Configure Build

> If you do not have a domain name for your project then use `*`**.deployable.site** where `*` is any namespace that has not already been taken by another deployer. Choosing this option limits your site to `http` only.

```
language: node_js
node_js:
- "7"

script: npm run build               // The script that builds the app

deploy:
  local_dir: dist                   // The distributed output directory                  
  fqdn: deployable.site             // The domain name of the deployed site
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN
  on:
    branch: master
```

<hr/>

1. Clone the deployable project to your local machine
2. Add a `travis.yml` file like the one above to the project root
3. Update `script` attribute with the command that builds your project
4. Update `local_dir` attribute with the name of the project output directory
5. Update `fqdn` attribute with the domain name the project should be deployed


<br/>

# 5. Trigger Deploy

6. Add and commit the changes to `travis.yml` then `git push`
4. Check the build and deploy progress on [TravisCI](https://travis-ci.org/profile)
6. When the build succeeds visit your shiny new site at the domain you specified
