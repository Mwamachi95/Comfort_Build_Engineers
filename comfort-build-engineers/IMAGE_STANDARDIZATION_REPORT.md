# Image File Extension Standardization Report

## Overview
This report identifies all JPEG image files using the `.jpeg` extension that need to be standardized to `.jpg` for consistent image loading performance across the website.

## Issue Description
Mixed file extensions (.jpg vs .jpeg) cause:
- Browser caching inconsistencies
- Processing pipeline differences in vite-imagetools
- Non-uniform loading behavior
- Potential build output variations

## Files Requiring Rename

### Total Files: 7

### Sanergy Project Images (5 files)
Located in: `src/assets/images/Projects/per-project/sanergy/`

1. `sanergy-3.jpeg` → `sanergy-3.jpg`
2. `sanergy-4.jpeg` → `sanergy-4.jpg`
3. `sanergy-5.jpeg` → `sanergy-5.jpg`
4. `sanergy-6.jpeg` → `sanergy-6.jpg`
5. `sanergy-7.jpeg` → `sanergy-7.jpg`

### Rosita Project Images (2 files)

1. **Hero Image**
   - Location: `src/assets/images/Projects/per-project/rosita/`
   - File: `hero.jpeg` → `hero.jpg`

2. **Placeholder Image**
   - Location: `src/assets/images/Projects/placeholder-images/`
   - File: `rosita-placeholder.jpeg` → `rosita-placeholder.jpg`

## Code Files Requiring Updates

### 1. src/pages/ProjectDetail.tsx
**Lines to Update:**
- Line 121: `rositaHero` import (currently uses hero.jpeg)
- Line 147: `sanergy3` import (currently uses sanergy-3.jpeg)
- Line 149: `sanergy4` import (currently uses sanergy-4.jpeg)
- Line 151: `sanergy5` import (currently uses sanergy-5.jpeg)
- Line 153: `sanergy6` import (currently uses sanergy-6.jpeg)
- Line 155: `sanergy7` import (currently uses sanergy-7.jpeg)

### 2. src/components/sections/ProjectsGrid.tsx
**Lines to Update:**
- Line 19: `rositaImg` import (currently uses rosita-placeholder.jpeg)

## Implementation Steps

### Step 1: Backup (Recommended)
```bash
# Create a backup of the images directory
cp -r src/assets/images/Projects src/assets/images/Projects_backup_$(date +%Y%m%d)
```

### Step 2: Run the Rename Script
Execute the provided PowerShell script: `rename-images.ps1`

### Step 3: Verify File Renames
Check that all 7 files have been renamed successfully

### Step 4: Code Updates
The import statements will be automatically updated in:
- ProjectDetail.tsx
- ProjectsGrid.tsx

### Step 5: Test Build
```bash
npm run build
```

### Step 6: Test in Development
```bash
npm run dev
```
Visit all project pages to verify images load correctly

## Expected Outcome

After standardization:
- All JPEG images will use `.jpg` extension
- Consistent vite-imagetools processing
- Uniform loading behavior across all projects
- Improved browser caching efficiency
- Predictable WebP conversion output

## Rollback Plan

If issues occur:
1. Stop the dev server
2. Restore from backup: `mv src/assets/images/Projects_backup_YYYYMMDD src/assets/images/Projects`
3. Revert code changes using git: `git checkout src/pages/ProjectDetail.tsx src/components/sections/ProjectsGrid.tsx`

---

**Generated:** 2025-10-30
**Author:** Claude Code
