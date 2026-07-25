# Architecture du site

## Format

Le site sera :

* une page unique ;
* statique ;
* bilingue ;
* navigable par ancres.

## Choix techniques

Décisions actuelles :

* Prototype : HTML / CSS / JavaScript natif.
* CSS natif avec variables.
* Icônes : Lucide.
* Fonts locales.
* Gestion de version : Git.

Framework final :
à confirmer après prototype.

Astro est envisagé mais aucune dépendance n'est imposée tant que le besoin n'est pas démontré.

## Architecture cible

```
src/

    components/
    styles/
    scripts/
    assets/

public/

docs/

```

## Principes techniques

* HTML sémantique.
* CSS modulaire.
* Design tokens.
* Mobile first.
* Accessibilité WCAG AA.
* Performance élevée.
* Code maintenable.

## Déploiement (à définir)

Un chapitre spécifique sera ajouté concernant :

* choix hébergement ;
* gestion du domaine ;
* HTTPS ;
* pipeline CI/CD ;
* déploiement automatique ;
* sécurité ;
* maintenance.

Objectif :
mettre en place une chaîne de publication simple et professionnelle.
