# Todo:

- Have a description blurb for each group (and make the "what happens at Tea Time" on the About page more generic)
- SEO meta tags
- I'd like isMobile to be de-duped as a utils.isMobile or whatever

## HashRouter vs BrowserRouter

It would be great to be able to use BrowserRouter (urls like '/groups') rather than HashRouter (urls like '/#/groups'), but GitHub Pages doesn't seem to support it. There's a workaround [here](https://github.com/rafgraph/spa-github-pages) by using a custom 404 page, but that still shows a "that page cannot be found" in the browser even when the page is navigated to. Ultimately, this is probably on GitHub Pages to fix.

Maybe, we can use a version of the custom 404 page solution to *allow* people to put 'tea-time.social/groups' in their browser and still get to the page.