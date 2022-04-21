# [Dont Panic Just Cook](https://paloaltodiet.com/)

**[Dont Panic Just Cook](https://paloaltodiet.com/)** is a beautiful resource built for Material Design. It was made over the powerful Material-UI. Have redesigned all components to make it look flat, minimalist and easy to use.

Using it is very simple and it will enable you to refresh you classic looking application. To get the desired effect you will also need to integrate ReactJS plugins that take a little bit more effort. In the end the result will be worth it.


## Table of Contents


* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)




## Demo

- [Index Page](https://paloaltodiet.com/)
- [Events Section](https://paloaltodiet.com/events)
- [Cards Section](https://paloaltodiet.com/events#cards)


## Quick start

## File Structure
Within the download you'll find the following directories and files:

```
material-kit-pro
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── README.md
├── gulpfile.js
├── jsconfig.json
├── package.json
├── Documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   │   ├── material-kit-pro-react.css
    │   │   ├── material-kit-pro-react.css.map
    │   │   └── material-kit-pro-react.min.css
    │   ├── img
    │   │   ├── arrow-left.cur
    │   │   ├── arrow-right.cur
    │   │   ├── assets-for-demo
    │   │   │   ├── example-pages
    │   │   │   ├── ourClients
    │   │   │   ├── presentationViewSectionComponent
    │   │   │   └── sections
    │   │   │       └── imgs.js
    │   │   ├── examples
    │   │   ├── faces
    │   │   ├── flags
    │   │   ├── loading-bubbles.svg
    │   │   └── sections
    │   ├── jss
    │   │   ├── material-kit-pro-react
    │   │   │   ├── components
    │   │   │   └── views
    │   │   │       ├── aboutUsSections
    │   │   │       ├── blogPostSections
    │   │   │       ├── blogPostsSections
    │   │   │       ├── componentsSections
    │   │   │       ├── ecommerceSections
    │   │   │       ├── landingPageSections
    │   │   │       ├── presentationSections
    │   │   │       ├── pricingSections
    │   │   │       ├── sectionsSections
    │   │   └── material-kit-pro-react.js
    │   └── scss
    │       ├── core
    │       │   ├── mixins
    │       │   └── variables
    │       ├── plugins
    │       └── material-kit-pro-react.scss
    ├── components
    │   ├── Accordion
    │   │   └── Accordion.js
    │   ├── Badge
    │   │   └── Badge.js
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardAvatar.js
    │   │   ├── CardBody.js
    │   │   ├── CardFooter.js
    │   │   └── CardHeader.js
    │   ├── Clearfix
    │   │   └── Clearfix.js
    │   ├── CustomButtons
    │   │   └── Button.js
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.js
    │   ├── CustomFileInput
    │   │   └── CustomFileInput.js
    │   ├── CustomInput
    │   │   └── CustomInput.js
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.js
    │   ├── CustomTabs
    │   │   └── CustomTabs.js
    │   ├── CustomUpload
    │   │   └── ImageUpload.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Header
    │   │   ├── Header.js
    │   │   └── HeaderLinks.js
    │   ├── InfoArea
    │   │   └── InfoArea.js
    │   ├── Instruction
    │   │   └── Instruction.js
    │   ├── Media
    │   │   └── Media.js
    │   ├── NavPills
    │   │   └── NavPills.js
    │   ├── Pagination
    │   │   └── Pagination.js
    │   ├── Parallax
    │   │   └── Parallax.js
    │   ├── Snackbar
    │   │   └── SnackbarContent.js
    │   ├── Table
    │   │   └── Table.js
    │   └── Typography
    │       ├── Danger.js
    │       ├── Info.js
    │       ├── Muted.js
    │       ├── Primary.js
    │       ├── Quote.js
    │       ├── Rose.js
    │       ├── Small.js
    │       ├── Success.js
    │       └── Warning.js
    ├── index.js
    ├── logo.svg
    └── views
        ├── AboutUsPage
        │   ├── AboutUsPage.js
        │   └── Sections
        │       ├── SectionContact.js
        │       ├── SectionDescription.js
        │       ├── SectionOffice.js
        │       ├── SectionServices.js
        │       └── SectionTeam.js
        ├── BlogPostPage
        │   ├── BlogPostPage.js
        │   └── Sections
        │       ├── SectionBlogInfo.js
        │       ├── SectionComments.js
        │       ├── SectionSimilarStories.js
        │       └── SectionText.js
        ├── BlogPostsPage
        │   ├── BlogPostsPage.js
        │   └── Sections
        │       ├── SectionImage.js
        │       ├── SectionInterested.js
        │       ├── SectionPills.js
        │       └── SubscribeLine.js
        ├── ComponentsPage
        │   ├── ComponentsPage.js
        │   └── Sections
        │       ├── SectionBasics.js
        │       ├── SectionCards.js
        │       ├── SectionCarousel.js
        │       ├── SectionContentAreas.js
        │       ├── SectionFooter.js
        │       ├── SectionJavascript.js
        │       ├── SectionNavbars.js
        │       ├── SectionNotifications.js
        │       ├── SectionPills.js
        │       ├── SectionPreFooter.js
        │       ├── SectionTabs.js
        │       └── SectionTypography.js
        ├── ContactUsPage
        │   └── ContactUsPage.js
        ├── EcommercePage
        │   ├── EcommercePage.js
        │   └── Sections
        │       ├── SectionBlog.js
        │       ├── SectionLatestOffers.js
        │       └── SectionProducts.js
        ├── ErrorPage
        │   └── ErrorPage.js
        ├── LandingPage
        │   ├── LandingPage.js
        │   └── Sections
        │       ├── SectionProduct.js
        │       ├── SectionTeam.js
        │       └── SectionWork.js
        ├── LoginPage
        │   └── LoginPage.js
        ├── PresentationPage
        │   ├── PresentationPage.js
        │   └── Sections
        │       ├── SectionCards.js
        │       ├── SectionComponents.js
        │       ├── SectionContent.js
        │       ├── SectionDescription.js
        │       ├── SectionExamples.js
        │       ├── SectionFreeDemo.js
        │       ├── SectionOverview.js
        │       ├── SectionPricing.js
        │       └── SectionSections.js
        ├── PricingPage
        │   ├── PricingPage.js
        │   └── Sections
        │       ├── SectionFeatures.js
        │       └── SectionPricing.js
        ├── ProductPage
        │   └── ProductPage.js
        ├── ProfilePage
        │   └── ProfilePage.js
        ├── SectionsPage
        │   ├── Sections
        │   │   ├── SectionBlogs.js
        │   │   ├── SectionContacts.js
        │   │   ├── SectionFeatures.js
        │   │   ├── SectionHeaders.js
        │   │   ├── SectionPricing.js
        │   │   ├── SectionProjects.js
        │   │   ├── SectionTeams.js
        │   │   └── SectionTestimonials.js
        │   └── SectionsPage.js
        ├── ShoppingCartPage
        │   └── ShoppingCartPage.js
        └── SignupPage
            └── SignupPage.js
```


