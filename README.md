# Language Packs (i18n) for eav & 2sxc
This github repository is for managing and sharing the language packs (i18n) for the following project:

* [eav](https://github.com/2sic/eav) - the data storage system and data-api used in 2sxc
* [2sxc](https://github.com/2sic/2sxc) - the sexy content management system for DNN

Note that we chose to create an own repository because it's easier to handle with many collaborators. So the core projects only contain the newest EN language pack, which is copied to here every few changes. 

## Background
### Angular-Translate and the Dev-Process

To understand i18n (internationalization) in these projects it helps to understand how the i18n implementation work. Here's the stack - beginning from the browser:

The browser runs [AngularJS](https://angularjs.org/) and [Angular-Translate](https://angular-translate.github.io/). It's configured to retrieve language files in this pattern:

* `[root-folder]/dist/i18n/[packagename]-[2lettercode].js`

Note that 

* we're actually using a JSON file (not a JS), but many web servers will refuse to deliver a file with a `.json` extension, so we're publishing them as `.js`
* if the desired language is missing, the server will deliver a http 404 but that's ok, angular-translate will revert back to en

Editing a JSON with a .js extension is not fun in a normal code editor as it will always marke everything as invalid. So when editing/working with the files, we're using JSON as it should be. These are stored here:

* `[root-folder]/src/i18n/[packagename]-[2lettercode].js`

This way it's easy to work with in visual studio. 

Note that from the src-folder it is automatically copied/renamed to the dist-folder using the grunt-job in this folder (see `gruntfile.js`).

### Distribution of the Packages

Whenever we create a new distribution of 2sxc we will download the latest files from here and include them in the package. In case you want to know how that works - here's the brief answer: 2sxc contains a bower-dependency to this project and will automatically retrieve it whenever we work on it. To then inject it into the distribution we must run a grunt-job in 2sxc which will extract all these resources and merge them into 2sxc.

## How you can Contribute Translations

### Translation by Forking

The normal way to contribute is by 

1. forking the project, then 
2. adding your translations in your fork and 
3. creating a pull-request so your changes get merged into our branch.

### Translation by becoming a Contributor

If you want to be part of the team and take charge of a language, open an issue and tell us about it. I'll then add you to the official team so you can work on this directly. In this case it's much more important that you know what you're doing - so we'll only do this for people who will contribute regularly and understand github.

## Comparing Changes Across Versions

Often when the core language pack changes, it would help translators see what changed. This can be done easily using the Github change-tool. It works as follows:

1. Whenever we release a new version, we add a tag like [2sxc_08.00.04](https://github.com/2sic/2sxc-eav-languages/tree/2sxc_08.00.04) to mark that version
2. So to compare what changed, you can just use two tags and compare them - like this comparison between [08.00.04 and 08.00.05](https://github.com/2sic/2sxc-eav-languages/compare/2sxc_08.00.04...2sxc_08.00.05)

As you can see in the previous example, the main difference (except for some .sln files) is a single line in the `edit-en.json` which also appears in the .js. You can now just tweak the URL of the compare link to comper any versions you need. 