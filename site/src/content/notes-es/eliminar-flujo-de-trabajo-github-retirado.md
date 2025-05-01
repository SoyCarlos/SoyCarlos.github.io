---
title: Eliminar Flujo de Trabajo de GitHub Retirado
publishDate: 02/10/2025
updatedDate: 02/10/2025
tags:
  - git-es
---

1. Cancela cualquier flujo de trabajo en ejecución que desees eliminar. [Enlace](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/canceling-a-workflow)
2. En tu repositorio, ve a `.github/workflows/` y elimina los que ya no quieras que se ejecuten.
3. Si, en algún momento de la vida de tu repositorio, has habilitado GitHub Pages, visita el repositorio en tu navegador. Si la Fuente es `GitHub Actions`, desconecta las Actions relevantes y elimínalas/desactívalas. Si tu Fuente es `Desplegar desde una rama`, haz clic en el menú desplegable y cámbialo a `GitHub Actions`. Esto debería guardarse automáticamente. No hagas nada más. Con suerte, esto funcionará. GitHub Pages tiene estos problemas extraños ([ver aquí](https://github.blog/changelog/2021-12-16-github-pages-using-github-actions-for-builds-and-deployments-for-public-repositories/)). Algunos lo han solucionado renombrando su repositorio ([ver aquí](https://github.com/orgs/community/discussions/72826)).
4. Si solo quieres deshabilitar temporalmente tus flujos de trabajo, [lee cómo hacerlo aquí](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/disabling-and-enabling-a-workflow). 