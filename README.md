# Zesty Recipes

Zesty is a website for the spice loving community where users will be able to view all kind of chilli-infused 
recipes added by users as well as creating an account and showing off their own.

[>> View the live site here <<](http://zesty-recipes-project-ms3.herokuapp.com/)

![](assets/images/readme-images/responsive-view-on-all-devices.png)

## UX

Zesty has a minimal, clean design with the main focus being on the recipes and adding new ones.  
Users will be able to view current recipes displayed on the website but if they wish to add their own they are required to create an account.

The Design of the website is mainly off white with a bold, vibrant red to emphasize all the main focal points throughout the website.

### User's goal

* Create an account.
* Create, Update and Delete Recipes.
* Search for specific recipes.
* Visually Pleasing.
* Spice level displayed in each recipe.
* Recipe servings displayed.

### Site owner's goal

* Easy to sign up for the website.
* Add Recipes with no problems.
* Navigate through the site easily.

### Development goals

* Minimal Design with the recipes being the main focus.
* Responsive on all devices.
* Insuring C.R.U.D is implemented.
* Effective search bar.

### User's Stories

**As a User on the website I want:** 

* To be able to view all recipes added by users.
* Easily add and edit my recipes.
* Delete my recipe if I dont wish to display it anymore.
* Search for a specific recipe.
* View my profile.
* Log Out when im not using the website.

**As the Site Owner on the website I want:** 

* An admin account where I can edit and delete all recipe added.
* Edit the add recipe options if I need to do so.
* View all users in the data base.

**As a Developer Developing the website I want:** 

* The design to be clean and minimal.
* Deployed to heroku.
* All users and recipe stored via MonogDB
* Fully responsive on all devices

### WireFrames

* [Zesty - Home](static/images/wireframes/zesty-home-page.png)
* [Zesty - Sign Up](static/images/wireframes/zesty-sign-up-page.png)
* [Zesty - Recipes](static/images/wireframes/zesty-recipe-page.png)
* [Zesty - Add Recipes](static/images/wireframes/zesty-recipe-add-page.png)
* [Zesty - Full Recipe](static/images/wireframes/zesty-recipe-full-page.png)
* [Zesty - Log In](static/images/wireframes/zesty-login-page.png)
* [Zesty - Profile](static/images/wireframes/zesty-profile-page.png)

###  Design Choices

**Fonts** 

* All Header will be using the font Prompt size 600
* All paragraphs and button text will be using Monsterrat size 400

**Colour** 

* To implement the clean minmal design the background and menu will be white - #fafafa
* All Headers will be #000000
* Paragraph text will be a light grey - #7F7F7F
* All buttons and focus point text will be a vibrant red from the logo - #FC2929

You can view the final homepage mockup design below:

[Zesty Home Page Mockup](static/images/wireframes/Desktop-Home-Zesty-recipes-mockup.png)

## Features

### Existing Features

* Feature1 - A Sign-Up form where users can create an account.
* Feature2 - A Login page for users who have already created an account.
* Feature3 - A recipe page full of paginated recipe cards.
* Feature4 - All recipes when clicked will have a full page with more info on it.
* Feature5 - Logged in Users will be able to add their recipes and view their profile page.
* Feature 6 - A recipe created by the user can be edited and deleted.
* Feature 7 - Search for a specific recipe in the search bar.
* Feature 8 - Logout with ease.
* Feature 9 - The narbar changes dpending on if your are logged in or out.
* Feature 10 - All data is stored within MongoDB.

### Features Left to Implement

* I would like to apply email verification before users can add recipes.
* I would like an add to favourites section.
* I would like the admin to approve recipes before it goes live on the site.

## Technologies Used


## Testing

### User's Stories

### Manual Testing

### Testing Code

### Bugs Discovered

* Before: <a href="{{ url_for('index') }}" class="logo"><img src="static/images/zesty-logo.svg"  height="55" alt="Zesty Logo"></a>

* After: <a href="{{ url_for('index') }}" class="logo"><img src="/static/images/zesty-logo.svg"  height="55" alt="Zesty Logo"></a>


## Deployment


## Credits


### Content

* https://stackoverflow.com/questions/26025057/add-custom-text-to-ordered-list-li

* https://www.codegrepper.com/code-examples/css/delete+confirmation+message+on+click

* https://www.youtube.com/watch?v=Lnt6JqtzM7I&ab_channel=PrettyPrinted

* https://gist.github.com/mozillazg/69fb40067ae6d80386e10e105e6803c9

### Media

* https://www.pexels.com/photo/food-plate-healthy-nature-7215171/


### Acknowledgements

