---
title: Creando Alias de Github
publishDate: 02/10/2025
updatedDate: 02/10/2025
tags:
  - git
---

Listar todos los alias existentes:  
`git config --list | grep "alias"`  
  
Agregar un alias simple:  
`git config --global alias.aa 'add --all'`  

Las máquinas con Windows requerirán comillas dobles en lugar de comillas simples, que son aceptadas en máquinas Unix.  

Agregar comandos encadenados y funciones:  
`git config --global alias.gud '!f() { git add . && git commit -m "$@" && git push origin HEAD; }; f'`

Eliminar un alias:
`git config --global --unset alias.aa`  

Nota:  
Agregamos la etiqueta --global para asegurarnos de que esto funcione en toda nuestra máquina, de lo contrario será por repositorio.

Algunos alias simples que prefiero usar: 
```
[alias]
	st = status -sb
	alias = config --global -l
	l1 = log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short
	gud = "!f() { git add . && git commit -m \"$@\" && git push origin HEAD; }; f"
	fukt = revert HEAD
	undo = reset --soft HEAD~1
```
