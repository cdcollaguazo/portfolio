# Portfolio

Personal portfolio frontend for the `cdcollaguazo` platform.

This project is an **Angular** application that presents professional experience, projects, skills, and other relevant information. It does not manage AWS infrastructure directly.

---

## 1. Responsibilities

This project:

- Provides the public portfolio user interface.
- Presents professional and project information.
- Builds the static frontend assets deployed to the platform.
- Integrates with the shared CloudFront and S3 hosting provided by the common infrastructure.

AWS infrastructure is managed separately by the common infrastructure repository.

---

## 2. Architecture

```text
Browser
   |
   v
CloudFront
   |
   v
Shared S3 Bucket
   |
   v
Angular Portfolio
```

The application is built as static content and uploaded to the shared frontend bucket.

CloudFront serves the portfolio as the main public frontend of the platform.

---

## 3. Project Structure

```text
portfolio/
├── .github/                # CI/CD workflows
├── src/                    # Angular application
├── public/                 # Static assets
├── angular.json            # Angular workspace configuration
└── package.json            # Dependencies and scripts
```

---

## 4. Local Development

### Requirements

- Node.js
- npm
- Angular CLI

Install dependencies:

```bash
npm ci
```

Run the application locally:

```bash
npm start
```
