# Roadmap

## Project overview

This roadmap defines the main development phases of the expertise website.

The objective is to build a professional, maintainable and evolutive showcase website for a software engineering freelance activity.

The project follows an incremental approach:

1. Define the vision and foundations.
2. Build a clean static prototype.
3. Industrialize the project.
4. Deploy and maintain the website.

# Current status

## Current phase

**Sprint 0 — Project definition**

Objectives:

* Define project scope.
* Define positioning.
* Define website structure.
* Define technical direction.
* Establish repository organization.

# Sprint 0 — Documentation

## Objective

Create the foundations required before implementation.

## Deliverables

Completed:

* Project charter.
* Website vision.
* Website architecture.
* Brand identity.
* Repository structure.
* Project README.

## Validation criteria

Sprint completed when:

* Project direction is clear.
* Website sections are validated.
* Technical constraints are defined.
* Repository structure is ready for development.

Status:

✅ Completed

# Sprint 1 — HTML/CSS Prototype

## Objective

Create the first complete version of the website using native web technologies.

The goal is not final visual perfection but to validate:

* content structure;
* user experience;
* design direction;
* technical approach.

## Deliverables

### Project structure

Create:

```
src/

index.html

css/
    reset.css
    variables.css
    typography.css
    layout.css
    components.css
    style.css

js/
    main.js

assets/
    fonts/
    images/
    icons/
```

### Website implementation

Create all main sections:

1. Hero
2. About
3. Approach
4. Areas of intervention
5. Professional experience
6. Personal projects & case studies
7. Technical expertise
8. Contact

### Initial design implementation

Apply:

* dark theme;
* typography system;
* spacing rules;
* reusable components;
* responsive foundations.

## Validation criteria

Sprint completed when:

* All sections exist.
* Navigation works.
* Mobile layout is usable.
* HTML is semantic.
* CSS structure is clean.
* Design direction is validated.

# Sprint 2 — Design refinement

## Objective

Transform the prototype into a polished professional website.

## Deliverables

* Refined visual identity.
* Improved typography.
* Better spacing and hierarchy.
* Improved responsive behavior.
* Optimized animations.
* Better accessibility.

## Validation criteria

Sprint completed when:

* Website visually matches the intended positioning.
* User experience is consistent on desktop and mobile.
* Accessibility requirements are respected.

# Sprint 3 — Technical industrialization

## Objective

Prepare the website for long-term maintenance and deployment.

## Topics to evaluate

### Framework

Evaluate whether moving from native HTML/CSS/JS to Astro brings value.

Criteria:

* simplicity;
* maintainability;
* performance;
* developer experience.

No framework migration unless justified.

### Development workflow

Define:

* build process;
* dependency management;
* environment setup;
* code organization.

### Versioning

Define:

* release strategy;
* tags;
* update process.

## Validation criteria

Sprint completed when:

* Final technical stack is chosen.
* Build process is reproducible.
* Repository is ready for continuous updates.

# Sprint 4 — Deployment and operations

## Objective

Deploy the website using a professional but simple workflow.

## Topics to define

### Hosting

Evaluate:

* GitHub Pages;
* Cloudflare Pages;
* Netlify;
* other suitable solutions.

### Domain management

Define:

* domain provider;
* DNS configuration;
* HTTPS.

### CI/CD

Implement:

* automatic build;
* deployment pipeline;
* production validation.

### Maintenance

Define:

* update process;
* dependency updates;
* security considerations;
* backup strategy.

## Validation criteria

Sprint completed when:

* Website is publicly accessible.
* Deployment is automated.
* Update process is documented.

# Sprint 5 — Content finalization and release

## Objective

Prepare the production version.

## Deliverables

* Final texts FR/EN.
* Professional review.
* SEO basics.
* Metadata.
* Open Graph preview.
* Final accessibility checks.
* Performance optimization.

## Validation criteria

Release candidate ready.

# Version milestones

| Version | Objective                                 |
| - | -- |
| v0.1    | Documentation and project foundation      |
| v0.2    | Complete HTML/CSS prototype               |
| v0.3    | Visual refinement                         |
| v0.4    | Responsive and accessibility improvements |
| v0.5    | Technical stack finalized                 |
| v0.8    | Deployment ready                          |
| v0.9    | Release candidate                         |
| v1.0    | Production release                        |

# Key decisions

## Website

* Static website.
* One-page architecture.
* Bilingual FR/EN.
* No CMS.
* No blog.
* No database.

## Development

* Start with native HTML/CSS/JS.
* Avoid unnecessary dependencies.
* Prefer simplicity and maintainability.
* Evaluate frameworks only when needed.

## Design

* Dark, technical and professional identity.
* Minimal animations.
* Focus on clarity and expertise.

## Content

* Sell solutions, not technologies.
* Highlight problems solved.
* Separate professional experience and personal projects.

# Future considerations

Possible future evolutions:

* Additional case studies.
* Dedicated project pages.
* Improved contact workflow.
* More advanced analytics.
* Additional technical content.

These evolutions should not compromise the initial principles of simplicity and maintainability.
