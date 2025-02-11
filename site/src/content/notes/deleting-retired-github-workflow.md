---
isDraft: false
title: Deleting Retired Github Workflow
publishDate: 02/10/2025
updatedDate: 02/10/2025
tags: []
---

1. Cancel any currently running workflows that you want to delete. [Link](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/canceling-a-workflow)
2. In your repo, go to `.github/workflows/` and delete the ones you no longer want to run.
3. If, at any point of your repo's lifetime, you have enabled GitHub pages, visit the repo in your browser. If the Source is `GitHub Actions`, disconnect the relevant Actions and delete/disable them. If your Source is `Deploy from a branch`, click on the dropdown and change it to `GitHub Actions`. This should automatically save. Do nothing else. Hopefully this works. GitHub pages has these weird issues ([see here](https://github.blog/changelog/2021-12-16-github-pages-using-github-actions-for-builds-and-deployments-for-public-repositories/)). Some have fixed it by renaming their repository ([see here](https://github.com/orgs/community/discussions/72826)).
4. If you only want to temporarily disable your workflows, [read how here](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/disabling-and-enabling-a-workflow).
