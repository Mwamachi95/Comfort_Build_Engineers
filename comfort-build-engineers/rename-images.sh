#!/bin/bash
# Image File Extension Standardization Script
# Renames all .jpeg files to .jpg for consistent image processing
# Generated: 2025-10-30

echo "=========================================="
echo "Image Standardization Script"
echo "Converting .jpeg files to .jpg"
echo "=========================================="
echo ""

# Define the base path
BASE_PATH="src/assets/images/Projects"

# Check if path exists
if [ ! -d "$BASE_PATH" ]; then
    echo "ERROR: Path not found: $BASE_PATH"
    echo "Please run this script from the project root directory."
    exit 1
fi

# Find all .jpeg files
mapfile -t JPEG_FILES < <(find "$BASE_PATH" -type f -name "*.jpeg")

if [ ${#JPEG_FILES[@]} -eq 0 ]; then
    echo "No .jpeg files found. All images are already standardized!"
    exit 0
fi

echo "Found ${#JPEG_FILES[@]} .jpeg file(s) to rename:"
echo ""

# Display files that will be renamed
for file in "${JPEG_FILES[@]}"; do
    echo "  - $file"
done

echo ""
echo "Proceeding with rename operation..."
echo ""

# Rename counter
SUCCESS_COUNT=0
ERROR_COUNT=0

# Rename each file
for file in "${JPEG_FILES[@]}"; do
    # Get the new filename with .jpg extension
    new_file="${file%.jpeg}.jpg"

    # Check if target file already exists
    if [ -f "$new_file" ]; then
        echo "  [SKIP] $(basename "$file") - Target file already exists"
        continue
    fi

    # Rename the file
    if mv "$file" "$new_file" 2>/dev/null; then
        echo "  [OK] $(basename "$file") -> $(basename "$new_file")"
        ((SUCCESS_COUNT++))
    else
        echo "  [ERROR] Failed to rename $(basename "$file")"
        ((ERROR_COUNT++))
    fi
done

echo ""
echo "=========================================="
echo "Rename Operation Complete"
echo "=========================================="
echo "Successfully renamed: $SUCCESS_COUNT file(s)"
if [ $ERROR_COUNT -gt 0 ]; then
    echo "Errors encountered: $ERROR_COUNT file(s)"
fi
echo ""
echo "Next steps:"
echo "  1. Run 'npm run dev' to start development server"
echo "  2. Visit project pages to verify images load correctly"
echo "  3. Run 'npm run build' to test production build"
echo ""
