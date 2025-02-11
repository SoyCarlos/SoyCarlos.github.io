---
isDraft: false
title: Deleting Retired Github Workflow
publishDate: 02/10/2025
updatedDate: 02/10/2025
tags: []
---

1. Cancel any currently running workflows that you want to delete. [Link](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/canceling-a-workflow)
2. In your repo, go to `.github/workflows/` and delete the ones you no longer want to run.
3. If, at any point of your repo's lifetime, you have enabled GitHub pages, visit the repo in your browser. Go to Settings > Pages. If the Source is `Deploy from a branch`, under branch, click on the dropdown and click None. If the Source is `GitHub Actions`, disconnect the relevant Actions and delete/disable them. Click Save.
4. If you only want to temporarily disable your workflows, [read how here](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/disabling-and-enabling-a-workflow).
