# Git Day 1 Pt. 2

## Reminder

How to open the terminal - `cmd-shift-s`
How to run the tests `npm test`

## Git init

After git is installed on a machine the very first thing you need to do to get started with git for your project is to initialize an empty git repository locally(meaning on your computer).

Go ahead and do this by typing git init then press the enter key. You will see the following:

`Initialized empty Git repository in /home/runner/Git-Day-1-Pt-2/.git/`

This is good! This means it worked!

For each project you make you will need to use this command to get git started.

_Note: when you are running this command on your computer(not in repl.it) you should always change your directory into a project folder that will hold ONLY the files you want to be pushed up to a SINGLE repository on github._

## Git Config

Git wants us to tell it who we are that way it can display who is pushing the code up onto GitHub. This is usually a couple commands that you only have to run once on your machine and then git will remember who you are. Since we are on repl.it the data does not get saved from project to project. This means we will be using the git config command a lot for these assignments. It will be great practice!

There are two configurations we have to run:

```
git config --global user.email "you@example.com"
git config --global user.name "Your name"
```

In the first command you need to put the email you use to sign into GitHub inside the quotes. For the second command put your name inside the quotes. If you haven't already run each of these commands individually.

## Basic Git Flow

The basic git flow after you have initialized a git repository through a git init works like so:

After new files have been created or changes have been made to files you must add those files to the staging area.
This is simply done by typing:

```
git add .
```

The first word in the command is git telling the computer you are going to type a git command. The git command you type is add this tells git its time to add files to the staging area. The files you tell it to add is a dot `.` which tells git to add all files. If you just wanted to add a single file you could put the file name in replace of the dot.

Now that our changes have been added to the staging area we can make a commit like so:

```
git commit -m "Some message"
```

The command we use is the commit keyword.
The -m is a flag saying that we are going to add a message. If you did not add this flag and a message you will be given a prompt to write a message.
Inside the double quotes is the message we want to be attached to this commit. This message is an explanation of what changes have been made.
After making a commit everything is packaged and ready to be pushed up to GitHub.
If you haven’t pushed up to your GitHub repository yet you will have to tell git where to push all your code too.
GitHub makes this easy by giving us a link to copy when we make a new repository on GitHub

Then all we have to do is add our origin like so:

```
git remote add origin https://somelinkhere.com/myrepo
```

This is a line that only needs to be ran once per project you have. The only thing that will need to be changed is the link.
After you run this line once git will remember for you where its pushing up your code.
Now that git knows where to push our code we can run the push command.
The first time we run the push command it will be like so:

```
git push -u origin master
```

The -u flag is telling git to remember we are always going to push from origin to master.
Every time afterwards we will run:

```
git push
```

## Exercise

If you havn't already make sure you initialize a git repository and run the config commands before moving on.

In the terminal type:

```
git status
```

This will give you a list of untracked files. Lets go ahead and add them to the staging area by typing:

```
git add .
```

Once you run that go ahead and run git status again.
Here you will see the files are now being tracked and are ready to be committed.
Lets commit our files:

```
git commit -m "initial commit"
```

After the commit run git status again.

Notice how all of our files are not being listed now. Thats cause all of our changes have been recorded into our commit and just need to be pushed up to GitHub.

Run:

```
git push
```

You will get an error saying:

```
fatal: No configured push destination.
Either specify the URL from the command-line or configure a remote repository using

    git remote add <name> <url>

and then push using the remote name

    git push <name>
```

Thats okay! We never told git where to push these files so its telling us that it is confused. We are not going to add this configuration in this exercise. If you don't remember how to add it look back up to the line where I explain `git remote add origin someurlhere`

## Conclusion

This is the basic git flow. First you add the files to the staging area then commit those changes with a message. When you are ready to push those changes you run the git push command. You will go through this process over and over again as you are working on projects.


## Submission

If you followed the steps in the exercise the tests will pass.