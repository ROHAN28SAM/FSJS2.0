# Git & GitHub (Publish your First Code to GitHub)

![git_hub_result](./Assets/Cover%20Image%20(Git%20%26%20GitHub).png)

In this article we are going to understand about Git and GitHub and how you can use GitHub to maintain your code and easily accessible. In this article I will show step by step procedure to upload your code on GitHub

## Table of Contents
1. What is Git?
2. What is GitHub?
3. Step by Step procedure to upload code to GitHub

****
<br/>

**What is Git?**
<br/>

Suppose your team is working on the project and you are also part of that, the project is too big and that need to break down in small functionalities, and these functionalities are distributed among you. Then your team will start working on that, but in between you are facing an issue in some of the functionalities, and you asked your teammate to resolve it. How will you share your code with him? If you don’t know what git is you will definitely share your code in zip folder, but there is a most convenient way to do this.

<br/>

And here Git plays very important role, you can share your code with the help of Git. Git is Distributed Version Control system. It track track changes from files, it is usually used for coordinating work among programmers collaboratively developing the project.

****
<br/>

**What is GitHub?**
<br/>

GitHub is an internet hosting service for software development and version control using Git. Essentially, it makes it a lot easier for individuals and teams to use Git for version control and collaboration. Anyone can sign up and host a public code repository for free, which makes GitHub especially popular with open-source projects.

****
<br/>

**How to publish code on GitHub?**
<br/>

- Install _git_ from https://git-scm.com/ (Only for first time)

<br/>

- Create account on GitHub

<br/>

- After successfully installing the git, Create any folder and Right Click. Click on **Git Bash here**. This will open git bash console. In console enter following line and hit Enter. It will give the Git Version details.
```
git --version
```
- For using Git, it need to be configured. For that enter following commands and hit Enter
```
git config --global user.name "{username}"
(hit enter)
git config --global user.email "{email}"
(hit enter)
```
- If you want to see or edit the entered Username and Email use following command
```
git config --global --edit
(hit enter)
```
- After configuration, now open the GitHub Account and click on _Repositories_, it will navigate you to your repositories (Projects that you published on GitHub). Currently it is empty. Click on _New_ button and create a new repositories by entering name of Repo.

![create_new_repo](./Assets/Create%20New%20Repo.gif)

We have successfully created a repo in GitHub Account and now it’s time to push your code from local machine to newly created GitHub Repo.

<br/>

Open the folder which you want to publish, and right click on screen. Click on _Open Bash Here_ This will open Git Bash Terminal on screen. Now here we can enter the command and push code to repo.

- To check the version of Git installed in your system
```
git --version
```
- To initialize the process we use following command
```
git init
```
- We can check the status of the files and folder, using following command
```
git status
```
- Now we have to select which files and folder need to be pushed, so to add files and folder we use
```
//if you want to select all the files
git add .

//if you want to select specific file
git add <filename>, <filename>
```
- To push all the selected files
```
git commit -m "<message_you_want_to_enter>"
```
- This pushed files need to be store somewhere in repo, so for that we have branching. For initial commit we will push code to Main Branch
```
git branch -M main
```
- Now we have to give repo location where that files need to be get stored
```
git add remote origin <file path>

//file path - When you create a repo in GitHub account it generate a https link
```
- After doing all the setup, now it is ready to push
```
git push -u origin
```

You can now login to your GitHub account and check the latest pushed code.

<br/>

These are some basic git command you should now to use GitHub. There is lot more things in Git. If you find this article helpful, please like it and share it.