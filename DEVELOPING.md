This guide helps contributors set up the project locally, preview changes, and understand the basic workflow.

---

## **1.  Prerequisites**

Before you start, make sure you have:

### **Hugo (extended version)**

Check if you already have it:

```bash
hugo version
```

If not installed:

**Linux/macOS (Homebrew):**

```bash
brew install hugo
```

**Windows (chocolatey):**

```powershell
choco install hugo-extended
```

> **Note:** This project requires **Hugo Extended** to build SCSS and themes correctly.

---

## **2.  Clone the Repository**

```bash
git clone https://github.com/A7med7x7/a7.github.io.git
cd a7.github.io
```

---

## **3.  Project Structure (Quick Tour)**

```
a7.github.io/
│
├── content/        # Your blog posts + pages
├── layouts/        # Custom HTML templates
├── static/         # Images, CSS, JS (served as-is)
├── themes/         # Theme folder
├── config.toml     # Main site configuration
└── assets/         # SCSS / pipeline assets (if used)
```


---

## **4. ▶ Run the Website Locally**

Start the development server:

```bash
hugo server -D
```

* `-D` includes draft posts
* Site will be available at:
  **[http://localhost:1313](http://localhost:1313)**

Hugo automatically reloads pages on save — no rebuilding needed.

---

## **5. Creating Content**

Create a new blog post:

```bash
hugo new posts/my-first-post.md
```

This will create a markdown file under `content/posts/`.

Open it and start editing.

---

## **6.  Build for Production**

Generate the final static site into the `public/` folder:

```bash
hugo --minify
```

This is what GitHub Pages will serve.

---

## **7.  Deploying (GitHub Pages)**

Deployment happens automatically when you push changes to the `main` branch.
GitHub Actions builds the Hugo site and publishes it to:

```
https://a7med7x7.github.io/a7.github.io/
```

No manual steps required.

---

## **8. Contributing**

1. Create a new branch
2. Commit your changes
3. Open a pull request

Basic commands:

```bash
git checkout -b feature/my-change
git add .
git commit -m "Describe your change"
git push origin feature/my-change
```