# Todo:

- Have a description blurb for each group (and make the "what happens at Tea Time" on the About page more generic)
- It'd be nice to have a `/groups/{id}` endpoint that can link directly to a group (so that groups advertising at events can provide links/qr codes straight to their group)
  - I'm not exactly sure what "link directly to a group" will mean in practice. Maybe it just means that group is listed first?
- I'd like isMobile to be de-duped as a utils.isMobile or whatever
- In the future, if this site actually becomes popular, we may want to give group managers a way to manage their group info (eg date & time meeting or description) without going through me. Like an "admin view".

## Dev Process

### Publishing

To publish a new version of the the site:

1. Make changes *(optionally: test changes with `npm run start`)*
2. Commit changes
3. Deploy changes publicly by running `npm run deploy`

### Instructions I followed to make this site

https://github.com/derekantrican/react-gh-pages/tree/master (originally forked from https://github.com/gitname/react-gh-pages but I added info on using a custom domain)