# JavaScript Essentials On the Job

## Project Description 📄

Welcome to JavaScript Essentials! In this ongoing assignment, you will learn the basics of JavaScript, one of the most important languages for web development. This project will guide you through understanding and practicing JavaScript's core concepts, including data types, variables, and basic syntax. The goal is to help you build a strong foundation in JavaScript, preparing you for more advanced topics like functions, conditionals, and loops in future lessons.

Through this assignment, you'll complete tasks that introduce the essential building blocks of JavaScript programming. Each section is designed to reinforce your understanding and give you hands-on experience with the basics of coding in JavaScript.

## Scenario 🌟

You have taken on a client who is a small but growing business. Your task is to build the JavaScript logic that powers everything behind the scenes for their products.

### Choose Your Client:
- Band
- Pet Store
- Bakery
- Gym
- Or your own idea!

## Key Stages of the Project 🚀

1. **Basic HTML Structure**: Set up the core structure of your website.
2. **CSS Styling**: Enhance your site using various CSS techniques.
3. **Advanced Design**: Utilize CSS frameworks to create a polished, responsive design.


## Resources 📦

Free stock images and videos can be downloaded at https://www.pexels.com.

Utilize documentation such as [W3 Schools](https://www.w3schools.com/) and [MDN](https://developer.mozilla.org/en-US/) for all things related to HTML and CSS.

Use AI tools such as ChatGPT and Claude to help you learn. As you integrate AI tools into your learning process, it's essential to use them responsibly. AI can be a powerful resource to assist you, but it’s important to ensure that you truly understand and engage with the content it generates. This will not only enhance your learning experience but also help you develop critical thinking and problem-solving skills.



---



## Checkpoint 1 ✋

## Getting Started 📄

In this activity, you will take your first steps in building a foundational project for your eCommerce store. This exercise will introduce you to the basics of creating and running JavaScript code, while also teaching you how to define variables that represent important elements of your store. The focus is on mastering the essentials: declaring variables, using different data types, and laying the groundwork for your JavaScript learning journey.

You'll start by creating a simple eCommerce store concept using basic JavaScript. This will involve defining variables for the store's name, type, a selection of products, their prices, and store hours, then displaying this information using console.log.


## Expected Project Structure 🏗️
Your folder name may vary based on your selection of the eCommerce store type.

```plaintext
PawsClawsPetStore/
│
├── index.js
├── README.md
```

## Deliverables ✅

## 1. **Create the Project Folder and Files**
  - [ ] Create a folder named `PawsClawsPetStore` to store all your project files.
  
  - [ ] Now `cd` into that new folder you created.
   
  - [ ] Inside the `PawsClawsPetStore` folder, create a file named `index.js`. This will be your main JavaScript file.
   
## 2. **Test your environment**
In this step, we will ensure that your Node.js environment is correctly set up and able to execute JavaScript files.

  - [ ] Add the following initial code to the index.js file.

```javascript
console.log('hello world');
```
  - [ ] Run the code to verify it.

```bash
node index.js
```

If you see "hello world" in the terminal, the setup is successful.

  - [ ] Once confirmed, delete the console.log('hello world') line.

  - [ ] Before continuing, make sure to determine what kind of eCommerce store you would like to build.


## 3. **Creating the eCommerce Store Variables**
In this step, you will define the key elements of your eCommerce store by using JavaScript variables. These variables will represent the basic structure of your store, such as the store name, type, available products, their prices, and business hours. By assigning values to these variables, you will create a clear representation of your store's inventory and operational details.

This is an important step in understanding how to work with simple data types and variable - assignment in JavaScript. 

You will define:

  - The store name and type (e.g., bakery, pet store, etc.).
  - Five to six products sold in your store.
  - The prices for each product.
  - The store’s business hours.

  #### Tips

  - Make sure you name your variables appropriately.
  - Ensure you are using the appropriate data type for each variable. The name of your store and products should be strings, while prices should be numbers.

### Let's Get Started

- [ ] Create a variable called `storeName` and assign the appropriate value.

*This is just an example below; be creative and come up with your own store name

```javascript
const storeName = "Paws & Claws";
```

- [ ] Create a variable to represent the type of eCommerce store: bakery, pet store, etc.

*Again, this is just an example below for reference

```javascript
const storeType = "Pet Store";
```

- [ ] Create 5-6 variables to represent various products related to your chosen store. Avoid using arrays or objects for now.

*Example for reference
```javascript
const product1 = "Dog Food";
const product2 = "Cat Litter";
const product3 = "Bird Seed";
const product4 = "Fish Tank";
const product5 = "Hamster Cage";
```

- [ ] Create variables to represent the price of each of those products.

*Example for reference
```javascript
const price1 = 29.99;
const price2 = 15.49;
const price3 = 12.99;
const price4 = 89.99;
const price5 = 34.50;
```

- [ ] Create a variable to represent the hours of your store. Do some research to see which data type works best for this.

*Example for reference 
```javascript
const storeHours = "Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed";

```

## 4. **Testing Your Work**
In this section, you will verify that the variables and data you created for your eCommerce store are correctly set up and functioning as expected. By running your index.js file, you'll check that each variable—such as the store name, store type, products, prices, and store hours—is outputting the correct information to the console.

- [ ] Add the following console.log statements to your index.js file to display all the variables in the console:

*Example for reference
```javascript
console.log(storeName, storeType);
console.log(product1, price1);
console.log(product2, price2);
console.log(product3, price3);
console.log(product4, price4);
console.log(product5, price5);
console.log(storeHours);
```

  - [ ] Run the `index.js` file again to see the output of all your variables.

```bash
node index.js
```

Here is the expected output, which may vary depending on the choices you made:


```bash
Paws & Claws Pet Store
Dog Food 29.99
Cat Litter 15.49
Bird Seed 12.99
Fish Tank 89.99
Hamster Cage 34.50
Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed

```


## 5. **Pushing Your Code to GitHub**
In this section, you will save your project to a GitHub repository, which allows you to store your code online, collaborate with others, and keep track of changes over time.

- [ ]  Initialize Git, add all files, and commit your work:

```bash
git init
git add .
git commit -m "Initial commit: Your commit message here"

```

- [ ]  Push your work to GitHub:

```bash
git remote add origin [your-repo-url]
git push -u origin main

```
## 

# Conclusion 📄
In this assignment, you successfully built the foundation of an eCommerce store by utilizing basic JavaScript concepts like variables, data types, and console.log for output. This gives you a fundamental understanding of how to represent and work with data in a JavaScript environment. Keep building on this to add more functionality and complexity as you advance.

---



## Grading Criteria 💯

| Criteria                                   | Exemplary Performance (Full Marks) | Proficient Performance (Partial Marks) | Developing Performance (Half Marks) | Needs Improvement (No Marks) |
|--------------------------------------------|------------------------------------|----------------------------------------|-------------------------------------|------------------------------|
| **Technical Acceptance Criteria (60 pts)** | 54-60                              | 42-53                                  | 30-41                               | 0-29                         |
| **Workflow Appropriacy (15 pts)**          | 14-15                              | 11-13                                  | 8-10                                | 0-7                          |
| **Documentation (15 pts)**                 | 14-15                              | 11-13                                  | 8-10                                | 0-7                          |
| **User Experience (10 pts)**               | 9-10                               | 7-8                                    | 5-6                                 | 0-4                          |

## ### Solution codebase 👀
🛑 **Only use this as a reference** 🛑

💾 **Not something to copy and paste** 💾

**Note:**  This lab references a solution file located [here](https://github.com/HackerUSA-CE/aisd-jse-on-the-job-1/tree/solution) (link not shown).


---
© All rights reserved to ThriveDX# aisd-jse-on-the-job-1
