# Automated Daily JSON Updates with GitHub Actions

## Overview
This guide demonstrates how to set up a GitHub Action that:
- Runs every weekday at 7 AM
- Updates a JSON file
- Creates a dated branch
- Opens a PR for review

## Workflow Configuration

```yaml
name: Update Guild Events

on:
  schedule:
    # Runs at 7 AM UTC on every weekday
    - cron: '0 7 * * 1-5'

jobs:
  update-json:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Get current date
        id: date
        run: echo "date=$(date +'%Y-%m-%d')" >> $GITHUB_OUTPUT
        
      - name: Update JSON file
        run: npx ts-node scripts/updateGuildEvents.tsx
          
      - name: Create new branch
        run: |
          git config --global user.name 'GitHub Action'
          git config --global user.email 'action@github.com'
          git checkout -b update/${{ steps.date.outputs.date }}
          
      - name: Commit changes
        run: |
          git add app/public/future_events.json
          git commit -m "Update data for ${{ steps.date.outputs.date }}"
          git push origin update/${{ steps.date.outputs.date }}
          
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v7.0.6
        with:
          title: "Data Update for ${{ steps.date.outputs.date }}"
          body: "Automated data update via GitHub Actions"
          branch: "update/${{ steps.date.outputs.date }}"
          base: "main"
          assignees: "jxtngx"
          commit-message: "Update data for ${{ steps.date.outputs.date }}"
```

```typescript
const fs = require('fs');

async function updateJson() {
  const filePath = './data.json';
  const data = JSON.parse(fs.readFileSync(filePath));
  
  // Add your update logic here
  data.lastUpdated = new Date().toISOString();
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

updateJson();

```

## Usage Notes

1. The workflow runs automatically at 7 AM UTC on weekdays
2. Creates a branch named `update/YYYY-MM-DD`
3. Updates specified JSON file
4. Creates PR and assigns to @jxtngx
5. PR includes date-stamped changes

## Requirements

- GitHub repository with Actions enabled
- JSON file to update
- Update script (Node.js example provided)
- Reviewer (@jxtngx) with repository access

## Troubleshooting

- Verify Actions are enabled in repository settings
- Check Action logs for execution details
- Ensure proper permissions for PR creation