## Getting started

To get started with this template, first install the dependenciesm and, run the development server

```bash
yarn && yarn local-ssl && yarn dev
```

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Prisma.js](https://www.prisma.io/docs) - the official Prisma.js documentation

## Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html

## Locally trusted SSL certificate on macOS

Install mkcert

```shell
brew install mkcert && mkcert -install
```

After running that command `mkcert` should have created a CA and added its certificate to the system’s trust store. If you’re following along on macOS, we can verify that by running `dump-trust-settings -d`.

Create SSL cert with the desired hostname:

```shell
mkcert localhost
```

This should result two files `localhost.pem` and, `localhost-key.pem`.
