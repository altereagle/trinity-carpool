# Strategies Document

## How do I push changes to github?
* Click Here: [Story](https://www.pivotaltracker.com/story/show/153708395)

## How do I make a pull request?
* Step 1: Go to github
* Step 2: Click the "pull requests" tab in top left corner [Click here](https://github.com/altereagle/trinity-carpool/pulls)
* Step 3: Click the green "new pull request" button
* Step 4: Change the "base" and "compare" sections to what is needed
NOTE!!! DONT MERGE THE PULL REQUEST BEFORE ALL REVIEWS ARE COMPLETED! 
NOTE!!! Don't have more than one person do it, It could potentially mess up the code!

## How do I Git Push?
Create a new branch, or it will skip reviewer step.
* Step 1:  `git status`
* Step 2:  `git add` first letter (Case sensitive) and hit tab
* Step 2:   Goes from red to green
* Step 3:  `git commit -m "Your message about updating"`
* Step 4:  `git push` 
* Step 5:   reviewers take another look
* Step 6:   review and approve
* Step 7:  `git checkout master` to
* look at what changes have been made
* Step 8:  `git pull` to pull everything from github
* Step 9:  `git branch` (hit tab a couple of times) to see if your branch is there
* Step 10: `get remote prune origin` will say what branches are being deleted
* Step 11: `git branch -d [name of branch]`
* Step 12: `git branch` (hit tab a couple of times) to check if all is deleted

To make a new branch: 
* Step 1: `git branch "[name]"`
* Step 2: `git checkout "[name]"`
* Step 3: You're done! 

# :) Thanks for reading! Happy Coding!!
