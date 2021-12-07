---
createdDate: 2021-11-29
timeRequired: 1 Hour
labels: workshop,javascript,template
topics: instruction,workshop
---

# Workshop Example Template

## Getting Started

This template is designed to be used as a starting place for the creation of basic JavaScript workshops led by an instructor. Please read the steps below to ensure that your workshop follows the pattern that the instructional team has found to work and have used in prior events.

### New Workshop Setup Steps

To base your new workshop repository on this one, follow the steps below.

#### Copy this Workshop Repository

Run the following commands to copy the repository from Github to your local filesystem, without any of the Git history or references to this repository as an upstream.

```sh
# install degit if you do not have it
npm install -g degit

# create the directory to contain your workshop code
mkdir my-awesome-workshop
cd my-awesome-workshop

# copy repository as if git were performing a clone
degit github:BurlingtonCodeAcademy/workshop-example-template --mode=git
```

> Degit is a tool to download the source-code of a repository without the Git history, or repository references. [Degit Project Documentation](https://github.com/Rich-Harris/degit)

#### Include Starter Code

Rename the `main.js` file to a new filename that matches your workshop, and make sure that you mention the name of the starting file in the [instructions](#instructions) to find the which is the starting point for the students.

If there is any boilerplate code that the students need to begin their work, make sure that it is available, or imported, within whatever file the students will be editing.

In addition to boiler plate code, it can also be helpful to also include empty functions or variable names that help the student to get started. See the example below.

```js
// main.js

let myFirstName = 'Ada';
let myLastName = 'Lovelace';

function sayFullName(first, last) {
  // make this function combine the names first and last
  // ... and then print the new combined name to the console
}

// do not forget to call the function
sayFullName(myFirstName, myLastName);
```

#### Rewrite the Subsections

Update the README.md file to include subsections specific to your workshop content. All the following sub-sections should be edited.

**These sections should be written with a student audience in mind.**

- [ ] Overview: a short explanation of the workshop
- [ ] Objective: what the student should achieve by the end
- [ ] Topics: a list of the high-level topics
- [ ] Prior Knowledge: any subjects the student is assumed to know
- [ ] Instructions: a list of the steps to follow to complete the objective

#### Remove the Getting Started Section

The [Getting Started](#getting-started) section is for instructors to know how to adapt this template to their own workshops, and is not meant for students to follow. Remove it from the copy of the workshop that you distribute to students.

#### Create a Initialize a New Git Repository

```sh
git init
git add .
git commit -m "Initial commit"
```

#### Push the Repository to Github

Create a new repository for your workshop under the `BurlingtonCodeAcademy` parent organization. You can use the `gh` command-line tool from Github to do this without leaving your terminal.

> The `gh` command-line tool can be used to create a new repository and push it to Github under the BurlingtonCodeAcademy organization. [Github CLI Installation](https://cli.github.com/manual/installation)

The format of the workshop should match the example below:

```
[OrganizationName]/[lower-case-workshop-template-name]
BurlingtonCodeAcademy/my-amazing-workshop
```

**Example command:**

```sh
# run from within the repository directory
gh auth login
gh repo create BurlingtonCodeAcademy/my-amazing-workshop
```

#### Edit the package.json

Change the contents of the `package.json` to reflect:

- Yourself as the author
- The workshop name as the package name
- The Github repository as the `homepage`
- The Github repository as the `bugs` URL
- The Github repository as the `repository` URL
- The description to be accurate to you workshop
- The `main` file that is the primary file to run
- Any keywords as appropriate for the subject and content

#### Update the LICENSE file

Add your name to the `LICENSE.md` file within the repository, keeping the Copywrite information the same.

#### Add a Complete Branch

After commiting the changes to your `main` branch, you should add the code necessary for the completion of the workshop.

Within the code for the complete solution, add comments exaplaining what each section does.

Then create the branch `complete` with your changes.

```sh
git checkout -b complete

# edit your source code so there is a solution

git commit -m "Completed workshop solution"

git push -u origin complete
```

## Student Section

> NOTE: Update the following sections to be specific for your workshop

### Overview

A short description of your workshop, 1-2 paragraphs, that explains at a high level what the students will be expected to do and how.

Example:

> "In this workshop you will learn how to create a function that accepts two or more arguments, and then combines them into a single message, which is finally printed as output to the console."

### Objective

A description of what will be achieved by the end of the workshop.

Example:

> "Create a function that combines two or more parts of a person's name, and prints it to the console"

### Topics

A list of the concepts that this workshop will cover, in descending order of importance.

Example:

> - JavaScript
> - Functions
> - Arguments

### Prior Knowledge

Any high level concepts that the student would be expected to understand going before commencing on this workshop.

Examples:

> - Variables
> - Values
> - Basic Syntax
> - Terminal Usage

### Instructions

A detailed list of steps that the student should follow, in narrative form, or combined code and narrative form.

Avoid providing direct answers in the steps, but do hint at the answer and provide empty code or comments for the students to fill in.

These steps should be more prescriptive at the start, and become less prescriptive as the student progresses through the workshop towards more the more advanced challenges.

Leave a challenge or two at the end with zero hints or guidance to see if the students can go beyond the workshop, and achieve something advanced on their own. Keep these challenges optional, and keep their difficulty within the confines of a competent student's abilities.

### Additional Resources

Link to any third-party resources that are related to the subject matter and would expand the students understanding beyond the scope of this workshop.

Make sure that your link has the following qualities:

- Topical: Keep the link focused on the workshop content.
- Enjoyable: Is this resource fun to learn from?
- Authoritative: Ensure that the author of the content is considered an authority on the subject.
- Reliable: Consider whether the link will still be valid in 5 years, how about 10 years?
- Open: Confirm that there is no paywall required to access the resource.
