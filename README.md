# Fool Project

<!-- TOC -->

- [Fool Navigation](#fool-project)
    - [Prerequisites](#prerequisites)
    - [Setup Project](#setup-project)
    - [Requirements](#requirements)
    - [WCAG AA 2.0](#wcag)
    - [SEO](#seo)
    - [Business Requirements](#business-requirements)
    - [Technical Requirements](technical-requirements)
<!-- /TOC -->

# Prerequisites

Before getting started you should have the following installed and running:

- [X] Yarn - [instructions](https://yarnpkg.com/en/docs/install)
- [X] Vue CLI 3 - [instructions](https://cli.vuejs.org/guide/installation.html)
- [X] Python 3 - [instructions](https://wiki.python.org/moin/BeginnersGuide)
- [X] Pipenv - [instructions](https://pipenv.readthedocs.io/en/latest/install/#installing-pipenv)

# Setup Project

```
$ git clone https://github.com/AlexanderCarlston/fool-project.git
$ cd fool-project
```

Setup
```
$ yarn install
$ pipenv install --dev && pipenv shell
$ python manage.py migrate
```
## Running Development Servers

```
$ python manage.py runserver
```

From another tab in the same directory:

```
$ yarn serve
```

The Vue application will be served from [`localhost:8080`](http://localhost:8080/) and the Django API
and static files will be served from [`localhost:8000`](http://localhost:8000/).

The dual dev server setup allows you to take advantage of
webpack's development server with hot module replacement.
Proxy config in [`vue.config.js`](/vue.config.js) is used to route the requests
back to django's API on port 8000.

If you would rather run a single dev server, you can run Django's
development server only on `:8000`, but you have to build build the Vue app first
and the page will not reload on changes.

# Requirements

Hello potential Fool!  We’d love to give you the chance to show off your skills!  We want to see how you would create and design a keyword "hub page" for Fool.com.
Along with your technical skills we're hoping to gain better insight into how you communicate with team members, ask for help when necessary, take instruction, and solve problems.
This is your chance to demonstrate skills beyond what we can see from your resume and from a talking-only interview.

If you are familiar with all the technologies we are requesting that you use for this challenge, we estimate it will take around **10-15 hours to complete**.
If you are learning some of these particular tools for the first time, it may take you longer, and that’s OK!
Just keep us in the loop as to how things are going.  Feel free to spend more time on it if you are on a roll and can’t stop the awesome!



## What are we looking for:
* Professional development work (clean code, well-organized, appropriate comments, integration tests where necessary, no loose ends, no sloppy spelling, no browser console errors).
* Creative problem solving on the technical side and for user enjoyment
* Solid analytical approach - are you solving the business problem, or just writing code?
* Good communication with us as you are working on the project, so we can get a feel for what it would be like to work with you!
* Please change anything you would like including entire layout, fonts, image/text sizing, or anything else you feel will make this page attractive to our target market.
  - Styles and Scripts can go in `/static/` directory



## The Challenge
One of our stakeholders would like to create a new webpage on our site. The business goal is to have keyword hub pages on our website that are associated with commonly searched keywords from organic traffic.
The stakeholder would like to create these pages so that users can easily find our great articles via organic search and once on the hub page, convert into our email marketing campaigns to receive more Foolish articles.

The first keyword they want to try creating a page for is "Sock Market News".
They have provided a basic HTML page with the copy they would like displayed (/templates/news_hub.html) along with the business requirements below.

Your technical team lead has provided the technical requirements below.
Your team and the stakeholder is expecting you to use your skills and creativity to implement the pieces of this page in a way that you think will best achieve the story goals and details.



### Business Requirements
* The page should clearly display information the user might be seeking when searching the term in a search engine.
* A clear design to highlight information so users know the topic of the articles on the page along with any other relevant information on the topic
* Displays the top 5 most recent articles on the topic (http://127.0.0.1:8000/api/articles)
* Users should be able filter articles by article bureau or by article instruments
  - If you would like to display any instrument data you can access API data at (http://127.0.0.1:8000/api/instruments)
* Display "join stock advisor" call to action (/templates/join_sa_cta.html) so users are encouraged to sign up for our flagship service, Stock Advisor



### Technical Requirements
* Needs to perform quickly on desktop and mobile.
* Feel free to use any front-end frameworks or tools you would like to enhance the experience to design. (Bootstrap, tailwind, vue, etc)
* Responsive for desktop (including large monitors) and mobile
* Ideally works in IE11, as well as the latest Safari, Edge, Firefox, and Chrome
* Code considers non-happy-paths


### Bonus Requirements
* Include any relevant meta tags, schema, or information for Search Engine Optimization of the page


## Project Guidelines and Setup
1. Host the project code on github
1. This is based on Django 2.x series, you'll need to be running python3
1. You'll need to get python/django running on your computer. If you do not already have an environment the Django website outlines how to get up and running.
    * If you're comfortable doing this yourself great! If not here are some guides.
    * Windows: https://docs.djangoproject.com/en/2.2/howto/windows/
    * Mac: https://gist.github.com/hakjoon/216be7abdb5746eb579656102b91d6e3 or https://medium.com/riow/how-to-setup-a-django-development-environment-on-mac-968d129bc661
1. Install Django 2.x packages via:

   ```pip install -r requirements.txt```

    (`pip` may be `pip3` depending on how you install everything)

Once that completes you can run:

```
python minimal.py runserver
```

Open the project via http://127.0.0.1:8000/stock-market-news in your web browser.



# WCAG

> Can you explain WCAG’s principles in plain English?

### Your content is perceivable. <br>
Everything can be perceived in more than one way. If someone cannot see, written content can be read by a screen reader. If someone cannot hear, audio content has captions.

### Your content is operable. <br>
Everything can be operated in more than one way. If someone cannot use a mouse or touchpad, they can navigate by keyboard or by voice command software. If someone moves or reads slowly, they can request additional time to complete a task.

### Your content is understandable. <br>
Everything can be understood. If someone clicks on a navigation menu, it behaves like a navigation menu. If a button says, “Read More” it does what you expect it to do. If an error is made on a form, an error message points out the location of the error and suggests how to fix it.

### Your content is robust. <br>
Everything can roll up to the newest and shiniest hardware and not break.

# SEO

> I think search engine optomization is a big essential of the business need. So these are some basics I'm going to try to adhere to.

* Using the keyword in the title of the page<br>

* Using the keyword in the URL (e.g., online-petstore.com/parakeets/snacks/gourmet)<br>

* Using the keyword, and variations (e.g., "gourmet parakeet snacks"), throughout the page copy<br>

* Using the keyword in the meta tags, especially the meta description<br>

* Using the keyword in any image file paths and in the images' alt text<br>

* Using the keyword as the anchor text in links back to the page from elsewhere on the site<br>

# Business Requirements
- [ ] The page should clearly display information the user might be seeking when searching the term in a search engine.
- [ ] A clear design to highlight information so users know the topic of the articles on the page along with any other relevant information on the topic
- [ ] Displays the top 5 most recent articles on the topic (http://127.0.0.1:8000/api/articles)
- [ ] Users should be able filter articles by article bureau or by article instruments
  - If you would like to display any instrument data you can access API data at (http://127.0.0.1:8000/api/instruments)
- [ ] Display "join stock advisor" call to action (/templates/join_sa_cta.html) so users are encouraged to sign up for our flagship service, Stock Advisor



# Technical Requirements
- [ ] Needs to perform quickly on desktop and mobile.
- [ ] Feel free to use any front-end frameworks or tools you would like to enhance the experience to design. (Bootstrap, tailwind, vue, etc)
- [ ] Responsive for desktop (including large monitors) and mobile
- [ ] Ideally works in IE11, as well as the latest Safari, Edge, Firefox, and Chrome
- [ ] Code considers non-happy-paths
