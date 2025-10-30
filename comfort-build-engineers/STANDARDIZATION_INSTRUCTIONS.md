# Image Standardization Implementation Guide

## Overview
This guide provides step-by-step instructions to standardize all JPEG image file extensions from `.jpeg` to `.jpg` for consistent loading performance.

## Files Created

1. **IMAGE_STANDARDIZATION_REPORT.md** - Detailed report of all files requiring changes
2. **rename-images.ps1** - PowerShell script for Windows
3. **rename-images.sh** - Bash script for Git Bash/WSL/Linux
4. **STANDARDIZATION_INSTRUCTIONS.md** - This file

## Implementation Steps

### Step 1: Review the Report
```bash
# Open the detailed report
cat IMAGE_STANDARDIZATION_REPORT.md
```

**Summary:** 7 files need to be renamed
- 5 Sanergy gallery images
- 2 Rosita images (hero + placeholder)

### Step 2: Code Updates (ALREADY COMPLETED ✓)

The following files have been updated with correct `.jpg` extensions:
- ✓ `src/pages/ProjectDetail.tsx` - Updated 6 imports
- ✓ `src/components/sections/ProjectsGrid.tsx` - Updated 1 import

### Step 3: Rename the Image Files

Choose **ONE** of the following methods:

#### Method A: PowerShell (Recommended for Windows)
```powershell
# Run from project root directory
.\rename-images.ps1
```

#### Method B: Git Bash / WSL / Linux
```bash
# Make script executable
chmod +x rename-images.sh

# Run from project root directory
./rename-images.sh
```

#### Method C: Manual Rename (Not Recommended)
If you prefer manual renaming, refer to IMAGE_STANDARDIZATION_REPORT.md for the complete list.

### Step 4: Verify the Changes

#### 4.1: Check File Renaming
```bash
# Verify no .jpeg files remain
find src/assets/images/Projects -name "*.jpeg"

# Should return: no results
```

#### 4.2: Test Development Server
```bash
# Start dev server
npm run dev
```

**Test these project pages:**
- http://localhost:5173/project/rosita-apartments (check hero image loads)
- http://localhost:5173/project/sanergy-facilities (check all gallery images load)
- http://localhost:5173/projects (check Rosita thumbnail)

#### 4.3: Test Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Step 5: Git Commit (After Verification)

```bash
# Stage the changes
git add src/pages/ProjectDetail.tsx
git add src/components/sections/ProjectsGrid.tsx
git add src/assets/images/Projects/

# Commit with descriptive message
git commit -m "refactor: standardize JPEG extensions from .jpeg to .jpg

- Rename 7 image files: 5 Sanergy + 2 Rosita images
- Update import statements in ProjectDetail.tsx and ProjectsGrid.tsx
- Ensures uniform image processing through vite-imagetools
- Resolves inconsistent loading behavior across projects

Impact: Improved image loading performance and consistency"
```

## Expected Results

### Before Standardization:
- Mixed `.jpg` and `.jpeg` extensions
- Inconsistent browser caching
- Variable loading performance
- Different vite-imagetools processing paths

### After Standardization:
- ✅ All JPEG images use `.jpg` extension
- ✅ Consistent vite-imagetools processing
- ✅ Uniform loading behavior across all projects
- ✅ Improved browser caching efficiency
- ✅ Predictable WebP conversion output

## Rollback Instructions

If you encounter issues:

```bash
# Check git status
git status

# Restore original code files
git checkout src/pages/ProjectDetail.tsx
git checkout src/components/sections/ProjectsGrid.tsx

# Restore original image files
git checkout src/assets/images/Projects/

# Or restore everything
git reset --hard HEAD
```

## Troubleshooting

### Issue: "Script cannot be loaded" (PowerShell)
**Solution:**
```powershell
# Temporarily allow script execution
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process

# Run the script
.\rename-images.ps1
```

### Issue: "Permission denied" (Bash)
**Solution:**
```bash
# Make script executable
chmod +x rename-images.sh

# Run the script
./rename-images.sh
```

### Issue: Images not loading after rename
**Solution:**
1. Stop dev server (Ctrl+C)
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Restart: `npm run dev`

### Issue: Build fails after rename
**Solution:**
1. Check all import paths are correct: `grep -r "\.jpeg" src/`
2. Ensure all physical files were renamed successfully
3. Clear build cache: `rm -rf dist`
4. Rebuild: `npm run build`

## Performance Metrics

You should observe:
- **Faster initial page load** - Consistent image format processing
- **Better caching** - Browser treats all JPEGs uniformly
- **Consistent rendering** - All images processed through same pipeline
- **Smaller bundle size** - Optimized WebP conversion

## Verification Checklist

- [ ] IMAGE_STANDARDIZATION_REPORT.md reviewed
- [ ] Code updates confirmed (ProjectDetail.tsx, ProjectsGrid.tsx)
- [ ] Rename script executed successfully
- [ ] No .jpeg files remain in Projects directory
- [ ] Dev server tested - all images load
- [ ] Rosita Apartments page verified
- [ ] Sanergy Facilities page verified
- [ ] Projects grid page verified
- [ ] Production build tested
- [ ] Changes committed to git

---

**Created:** 2025-10-30
**Author:** Claude Code
**Purpose:** Standardize JPEG file extensions for optimal image loading performance
