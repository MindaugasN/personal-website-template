# Contributing to Personal Website Template

Thank you for your interest in contributing! This template is maintained as a community resource for Bitcoin job seekers and anyone wanting a sovereign web presence.

## 🎯 Project Goals

1. **Simplicity:** Easy for non-developers to customize
2. **Sovereignty:** Self-hosted, privacy-first, no vendor lock-in
3. **Performance:** Fast, lightweight, mobile-responsive
4. **Community:** Help Bitcoiners and job seekers establish online presence

---

## 🤝 How to Contribute

### Reporting Issues

**Found a bug?**
- Check if it's already reported in [Issues](https://github.com/MindaugasN/personal-website-template/issues)
- If not, create new issue with:
  - Clear title (e.g., "Contact form doesn't send emails")
  - Steps to reproduce
  - Expected vs. actual behavior
  - Screenshots if applicable
  - Your environment (OS, browser, Node version)

**Have a feature request?**
- Search existing feature requests first
- Create new issue with tag `enhancement`
- Explain the use case and why it's valuable

---

### Code Contributions

#### Setup for Development

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/personal-website-template.git
cd personal-website-template

# 3. Add upstream remote
git remote add upstream https://github.com/MindaugasN/personal-website-template.git

# 4. Install dependencies
npm install

# 5. Create feature branch
git checkout -b feature/your-feature-name

# 6. Start dev server
npm run dev
```

#### Code Style Guidelines

- **TypeScript:** Use TypeScript for all new files
- **Components:** Follow existing shadcn/ui patterns
- **Formatting:** Use project's ESLint config
- **Naming:**
  - Components: PascalCase (e.g., `ContactForm.tsx`)
  - Files: kebab-case (e.g., `contact-form-utils.ts`)
  - CSS variables: kebab-case (e.g., `--accent-color`)

#### Commit Messages

Follow conventional commits format:

```
feat: add portfolio projects section
fix: resolve mobile menu not closing
docs: update deployment instructions for Netlify
style: improve spacing in hero section
refactor: extract contact form into separate component
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style/formatting (not CSS)
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Build process, dependencies

---

### Pull Request Process

1. **Update your fork:**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test locally:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Create Pull Request:**
   - Clear title describing the change
   - Reference related issue (e.g., "Fixes #123")
   - Describe what changed and why
   - Add screenshots for UI changes
   - Mark as draft if work in progress

4. **Review process:**
   - Maintainer will review within 1 week
   - Address feedback in new commits
   - Once approved, maintainer will merge

---

## 📝 Documentation Contributions

Documentation improvements are highly valued!

### What to document:

- **README.md:** Setup, deployment, and customization
- **Code comments:** Complex logic or non-obvious decisions
- **Examples:** Real-world use cases and configurations

### Documentation standards:

- Clear, concise language (assume beginner audience)
- Step-by-step instructions with code examples
- Screenshots for visual processes
- Test all commands/code snippets before submitting

---

## 🎨 Design Contributions

Improvements to UI/UX welcome!

### Design guidelines:

- **Accessibility:** WCAG 2.1 AA minimum
- **Mobile-first:** Test on mobile devices
- **Performance:** Lighthouse score 90+ on all metrics
- **Dark mode:** Support both light and dark themes
- **Colors:** Use CSS variables from `src/index.css`

### Before submitting design changes:

1. Test on multiple screen sizes
2. Verify dark mode works
3. Check color contrast ratios
4. Include before/after screenshots

---

## 🐛 Testing

Currently this project doesn't have automated tests. Contributions to add testing are welcome!

### Manual testing checklist:

- [ ] Site builds without errors (`npm run build`)
- [ ] All pages load in development (`npm run dev`)
- [ ] CV download works
- [ ] Contact form submits (if configured)
- [ ] Social links open correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] Works in Chrome, Firefox, Safari
- [ ] Dark mode toggle works (if applicable)

---

## 🚀 Release Process

Maintainers only:

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Create Git tag: `git tag v1.x.x`
4. Push tag: `git push --tags`
5. Create GitHub release with notes

---

## 💬 Community

### Get Help

- **GitHub Issues:** Bug reports and feature requests
- **GitHub Discussions:** Questions, ideas, show your site
- **LinkedIn:** DM [@mindaugas-nizauskas](https://linkedin.com/in/mindaugas-nizauskas)

### Showcase Your Site

Built with this template? We'd love to see it!

1. Comment on [this discussion](link-to-showcase-thread)
2. Include:
   - Your site URL
   - Brief description
   - Any custom features you added
3. We may feature it in the README showcase section

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the same license as the project (see LICENSE file).

---

## 🙏 Thank You

Every contribution, no matter how small, helps make this template better for the community. Whether you're fixing typos, adding features, or sharing feedback - thank you!

---

**Questions?** Open an issue or reach out on LinkedIn!
