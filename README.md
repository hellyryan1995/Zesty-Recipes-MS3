# Zesty Recipes

Zesty is a website for the spice loving community where users will be able to view all kind of chilli-infused 
recipes added by users as well as creating an account and showing off their own.

[>> View the live site here <<](https://zesty-recipes-project-ms3.herokuapp.com/)

![](static/images/readme-images/responsive-view-on-all-devices.png)

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

* A vibrant red button is diplsayed within the navbar to intise users to create an account.
* All users logged in can create, update and delete their recipe.
* A Search bar is displayed within the Recipe page so users can search for a specific recipe.
* The website is clean and minimal with the main focus being on the recipes.
* A Spice level is displayed within the full recipe page.
* Recipe Servings are also displayed on the full recipe page.

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
* Feature 9 - The navbar changes dpending on if your are logged in or out.
* Feature 10 - All data is stored within MongoDB.

### Features Left to Implement

* I would like to apply email verification before users can add recipes.
* I would like an add to favourites section.
* I would like the admin to approve recipes before it goes live on the site.

## Technologies Used

* [HTML](https://en.wikipedia.org/wiki/HTML)
    * For Structuring the site.

* [CSS](https://en.wikipedia.org/wiki/CSS)
    * For Styling the Site.

* [Python](https://www.python.org/)
    * For programming the site.

* [Materialize](https://materializecss.com/)
    * For Grid Layout & Components.

* [Google Font](https://fonts.google.com/)
    * For selected font.

* [JQuery](https://jquery.com/)
    * Used for certain sections within the script.js file

* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
    * Rendering Templates.

* [Github](https://github.com/)
    * Storing project on.

* [Heroku](https://id.heroku.com/login)
    * Deploying the website.

* [Font Awesome](https://fontawesome.com/)
    * Deploying the website.

* [MongoDB](https://www.mongodb.com/)
    * Storing Data.

* [Gitpod](https://www.gitpod.io/)
    * For Developing the Website.

* [Balsamiq](https://balsamiq.com/wireframes/?gclid=Cj0KCQiA3smABhCjARIsAKtrg6JfbE3I-05NWUBL17jlkE6uDkROXDoD5vXo7UJxVKIjsLVwujyaus0aAhAiEALw_wcB)
    * Creating wireframes on.

* [Google Chrome Developer Tool](https://developers.google.com/web/tools/chrome-devtools)
    * Checking the website is responsive on multiple different devices.

* [Affinity Designer](https://affinity.serif.com/en-gb/designer/)
    * Creating Zesty Logo.

* [Affinity Designer](https://affinity.serif.com/en-gb/designer/)
    * Editing Photos.

## Testing

* Devices tested on:
    * Macbook Pro 13"
    * Lg 27" Monitor
    * iPhone 11
    * All devices in inspector tool.

* Browsers Tested on:
    * Google Chrome
    * Safari
    * Firefox

### User's Stories

* All users logged in can create, update and delete their recipe.
* A Search bar is displayed within the Recipe page so users can search for a specific recipe.
* The website is clean and minimal with the main focus being on the recipes.
* A Spice level is displayed within the full recipe page.
* Recipe Servings are also displayed on the full recipe page.

### Manual Testing

1. Sign Up Form
    * When Clicked on the signup button you are directed to the signup Page.
    * When details are typed in correctly you are validated with a green underline.

    ![](static/images/readme-images/sign-up-validate-correct.png)

    * If your details dont match the requirements the validation will be in red.
    * When I click submit with incorrect requirements I will not be able to proceed.

    ![](static/images/readme-images/please-match-the-requirements.png)

    * When all details are correct and I click Sign Up I am sent to my profile page.

    ![](static/images/readme-images/profile-success.png)

2. Login Form
    * When I click login I am directed to the login page.
    * If I click login whilst form is blank I am promted to fill the fields.

    ![](static/images/readme-images/fill-in-fields.png)

    * If username or password is incorrect you are prompted with a message.

    ![](static/images/readme-images/user-pass-incorrect.png)

    * If all is correct you are directed to my profile page.

3. Recipe page
    * When recipe is clicked you are directed to the recipe page.
    * All cards are diplayed in columns of 3,2,1 depending on device.
    * At the bottom of the page after 9 recipe cards the page is paginated with next and previous.

    ![](static/images/readme-images/previous-next.png)

4. Full Recipe
    * When you hover over a recipe cards text a hover effect will happen so you are aware its clickable.
    * When text or image is Clicked you will be directed to the full recipe.
    * Text is displaed at the top to direct you back to all recipes.

    ![](static/images/readme-images/full-recipe.png)

5. Add a Recipe
    * When logged in the add recipe option will apear in the navbar.
    * Click the add recipe text and you are directed to the page.
    * When adding a new recipe all fields require validation.

    ![](static/images/readme-images/add-recipe-valid.png)

    * To add multiple ingredients/instructions clicking on the add green button will add a new line.

    ![](static/images/readme-images/ingredients-before-add.png)
    ![](static/images/readme-images/ingredients-after-add.png)

    * Paste you image address.
    * Once you click add recipe you are directed to the recipe page where your recipe will be displayed.

    ![](static/images/readme-images/recipe-added.png)
    ![](static/images/readme-images/Recipe-displayed.png)

6. Edit and Delete Recipe
    * Only the Recipe you created can you edit and delete.
    * Recipes you created will display your username along with an edit and delete button.

    ![](static/images/readme-images/edit-delete.png)

    * Click the edit button will direct you to edit recipe page.
    * All details you previously entered will be displayed.

    ![](static/images/readme-images/edit-recipe.png)

    * Any changes made and saved will updated into the recipe.
    * If you click the delete button you will be prompted with an are you sure message.

    ![](static/images/readme-images/are-you-sure.png)

    * Once you confirm your recipe will be removed completely.

7. Search for Recipe
    * Search for a specific dish through a key word .eg - "Chicken"

    ![](static/images/readme-images/chicken-search.png)

    * Clicking reset will revert back to the full recipe page.
    * If there is no results for what you search for then no results will appear.

    ![](static/images/readme-images/no-results.png)

8. Logout with ease
    * When you wish to logout just click the large logout button in red.
    * You will be directed back to the login page.

    ![](static/images/readme-images/logged-out.png)

9. Navbar
    * The navar is displayed on both desktop and tablet
    * A burger menu is displayed within mobile.

    ![](static/images/readme-images/mobile-menu.png)

    * Users logged out will see this menu.

    ![](static/images/readme-images/menu-logged-out.png)

    * Users logged in will see this menu.

    ![](static/images/readme-images/logged-in-menu.png)

10. MongoDB
    * All data is stored on MongoDB under the collection of recipe_manager.

    ![](static/images/readme-images/mongodb-recipes.png)

11. Admin
    * The admin user has the ability to edit and delete all users recipes.

    ![](static/images/readme-images/admin-login.png)

### Testing Code

* W3C Markup Validator
    * [Home](https://validator.w3.org/nu/?doc=http%3A%2F%2Fzesty-recipes-project-ms3.herokuapp.com%2F)
    * [Recipes](https://validator.w3.org/nu/?doc=http%3A%2F%2Fzesty-recipes-project-ms3.herokuapp.com%2Fview_recipes)
    * [Login](https://validator.w3.org/nu/?doc=http%3A%2F%2Fzesty-recipes-project-ms3.herokuapp.com%2Flogin)
    * [Signup](https://validator.w3.org/nu/?doc=http%3A%2F%2Fzesty-recipes-project-ms3.herokuapp.com%2Fsignup)

    All Other pages where unable to be validated

* W3C CSS Validator

![CSS Validator Results](static/images/readme-images/w3c-css-validator.png)

* PEP8 Online Validator

![PEP8 Online Results](static/images/readme-images/pep8-validator.png)

* Sites Performance

**Home**
![Desktop](static/images/readme-images/home-performance-desktop.png) | ![Mobile](static/images/readme-images/home-performance-mobile.png)
Desktop | Mobile

**Recipes**
![Desktop](static/images/readme-images/recipes-performance-decktop.png) | ![Mobile](static/images/readme-images/recipes-performance-mobile.png)
Desktop | Mobile

**Login**
![Desktop](static/images/readme-images/login-performance-dektop.png) | ![Mobile](static/images/readme-images/login-performance-mobile.png)
Desktop | Mobile

**Sign Up**
![Desktop](static/images/readme-images/signup-performance-desktop.png) | ![Mobile](static/images/readme-images/signup-performance-mobile.png)
Desktop | Mobile

### Bugs Discovered

* Problem 1 - Using this logo href would not show on any page that was retrieving data from MongoDB.

```
<a href="{{ url_for('index') }}" class="logo"><img src="static/images/zesty-logo.svg"  height="55" alt="Zesty Logo"></a>
```

* Problem 1 SOLVED - By add a forward slash at the start of the img src worked perfectly.

```
<a href="{{ url_for('index') }}" class="logo"><img src="/static/images/zesty-logo.svg"  height="55" alt="Zesty Logo"></a>
```

* Problem 2 - When I added pagination to the recipe page, any time I searched for a recipe the page would crash.

```
def get_recipes(offset=0, per_page=9):
    recipes = list(mongo.db.recipes.find())
    return recipes[offset: offset + per_page]


# All Recipes
@app.route("/view_recipes")
def view_recipes():
    recipes = list(mongo.db.recipes.find().sort("recipe_name", 1))

    # Pagination
    page = int(request.args.get('page', 1))
    per_page = 9
    offset = (page - 1) * per_page

    total = len(recipes)
    pagination_recipes = get_recipes(offset=offset, per_page=per_page)
    pagination = Pagination(page=page, per_page=per_page, total=total,)

    return render_template(
        "recipes.html", recipes=pagination_recipes,
        page=page, per_page=per_page, pagination=pagination)
```

* Problem 2 SOLVED - In order to fix that I routed the search results to a sepreate template.

```
# Search Recipes
@app.route("/search_recipe", methods=["GET", "POST"])
def search_recipe():
    search = request.form.get("search")
    recipes = list(mongo.db.recipes.find({"$text": {"$search": search}}))
    return render_template("search.html", recipes=recipes)
```

* Problem 3 - I was uploading local images into MongoDB so my recipe images wasnt showing.
* Problem 3 SOLVED - I changed the recipe image field to a text input so you can paste in your image address.

## Deployment

This project was developed using GitPod and commits where made throught git, pushed to github as my version control and deployed with heroku.


### Requirements

1. In order for Heroku to know how to run the app you need to create a requirments.txt by using this command.
```
pip freeze > requirements.txt
```

### Procfile

2. Create a Procfile which can run using the command python3 app.py
```
echo web: python app.py > Procfile
```

### Set Up MongoBD

1. Log in to [MongoDB](https://www.mongodb.com/)
2. Once logged in on the MongoDB dashboard go to clusters and then connect.
3. From the pop-up, select 'Connect your application'
4. On the following menu, select python under driver and version 3.6 or later, and the URI will be presented to you. As per the instructions below the URI, 
replace password and username with your own.
5. The URI should be kept in an env.py files which is placed inside a .gitignore file as it contains personal information.

### Deploy to Heroku

1. Log in to [Heroku](https://id.heroku.com/login)
2. Once Signed in, Click on 'New' > 'Create new app'.
3. name the app and select your local region and then click 'Create App'.
4. In the top menu, select 'Deploy', and in the deployment method click 'Connect to GitHub'.
5. Connect your github account to Heroku.
6. Search for the GitHub repository which contains the app you wish to deploy.
7. Once connected you can choose to automatically deploy any updates made in the GitHub repository or to do so manually or 
by selecting the branch you wish to deploy and clicking on the appropiate button.
8. Back in the top menu, select 'Settings' and then click 'Reveal Config Vars'.
9. Within the 'Reveal Config Vars' section, add the variables which would be found in your local 'env.py' file. 
These variables are saved here as they contain sensitive data such as the password to the MongoDB database and 
the secret key required to use some of Flask's functionality.
10. With all of the previous steps complete, as well as the prerequisites, the app will now run by clicking the 'Open app' button.

### How to run this project locally

1. Create and account with [GitHub](https://github.com/)
2. Use Chrome browser.
3. Install the [GitPod](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki) browser extension.
4. Login to your GitPod account or sign up [here](https://www.gitpod.io/)
5. Go into the GitHub repository called ["Zesty-Recipes-MS3"](https://github.com/hellyryan1995/Zesty-Recipes-MS3)
6. Select the green button named "GitPod"
8. This will open a new Gitpod workspace containing the code so you can work localy.

Here are the steps to take to clone the project:

1. From GitHub, venture over to "Repositories" from the second menu down.
2. selected respitory project called ["Zesty-Recipes-MS3"](https://github.com/hellyryan1995/Zesty-Recipes-MS3)
3. To the left of the green GitPod button select the button name "code".
4. you will be given the option to clone or download the project.
5. Under clone there is a HTTPS which you should copy.
6. In your Local IDE on your terminal.
7. Change your current working directory to the location where you want the clone to be made.
8. Enter "git clone" and paste in the code you copied in step 5
```
git clone https://github.com/hellyryan1995/Zesty-Recipes-MS3.git

```
9. Press enter and your local clone will be created.

## Credits


### Content

* [This](https://stackoverflow.com/questions/26025057/add-custom-text-to-ordered-list-li) was used to add custom ordered list text.

* [This](https://www.codegrepper.com/code-examples/css/delete+confirmation+message+on+click) was used to confirm to delete the recipe.

* [This](https://www.youtube.com/watch?v=Lnt6JqtzM7I&ab_channel=PrettyPrinted) was used to limit the recipes displayed on the home page.

* [This](https://gist.github.com/mozillazg/69fb40067ae6d80386e10e105e6803c9) was used to help add pagination to my recipe page.

### Media

* Photo from - [Pexels](https://www.pexels.com/photo/food-plate-healthy-nature-7215168/)

### Acknowledgements

* All Recipes where taken from Delish, BBC, SlowCooker and Kinkskitchen

* Help from students in the slack chat.

* I recieved help from my mentor.

* Code Institute mini project tutorials helped me understand certain parts.

