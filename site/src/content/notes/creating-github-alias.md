---
title: Creating Github Alias
publishDate: 02/10/2025
updatedDate: 02/10/2025
tags:
  - git
---

List all existing alias:  
`git config --list | grep "alias"`  
  
Adding a simple alias:  
`git config --global alias.aa 'add --all'`  

Windows machines will require double quotes instead of single quotes, which are accepted on Unix machines.  

Adding chain commands and functions:  
`git config --global alias.gud '!f() { git add . && git commit -m "$@" && git push origin HEAD; }; f'`

Remove an alias:
`git config --global --unset alias.aa`  

Note:  
We add the --global tag to make sure this works across our entire machine, otherwise it will be on a per-repo basis.

Some simple aliases I prefer to use: 
```
[alias]
	st = status -sb
	alias = config --global -l
	l1 = log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short
	gud = "!f() { git add . && git commit -m \"$@\" && git push origin HEAD; }; f"
	fukt = revert HEAD
	undo = reset --soft HEAD~1
```
