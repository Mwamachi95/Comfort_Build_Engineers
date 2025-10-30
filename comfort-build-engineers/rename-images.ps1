# Image File Extension Standardization Script
# Renames all .jpeg files to .jpg for consistent image processing
# Generated: 2025-10-30

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Image Standardization Script" -ForegroundColor Cyan
Write-Host "Converting .jpeg files to .jpg" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Define the base path
$basePath = "src\assets\images\Projects"

# Check if path exists
if (-not (Test-Path $basePath)) {
    Write-Host "ERROR: Path not found: $basePath" -ForegroundColor Red
    Write-Host "Please run this script from the project root directory." -ForegroundColor Yellow
    exit 1
}

# Find all .jpeg files
$jpegFiles = Get-ChildItem -Path $basePath -Filter "*.jpeg" -Recurse

if ($jpegFiles.Count -eq 0) {
    Write-Host "No .jpeg files found. All images are already standardized!" -ForegroundColor Green
    exit 0
}

Write-Host "Found $($jpegFiles.Count) .jpeg file(s) to rename:" -ForegroundColor Yellow
Write-Host ""

# Display files that will be renamed
foreach ($file in $jpegFiles) {
    $relativePath = $file.FullName.Replace((Get-Location).Path + "\", "")
    Write-Host "  - $relativePath" -ForegroundColor White
}

Write-Host ""
Write-Host "Proceeding with rename operation..." -ForegroundColor Yellow
Write-Host ""

# Rename counter
$successCount = 0
$errorCount = 0

# Rename each file
foreach ($file in $jpegFiles) {
    $newName = [System.IO.Path]::ChangeExtension($file.Name, ".jpg")
    $newPath = Join-Path $file.DirectoryName $newName

    try {
        # Check if target file already exists
        if (Test-Path $newPath) {
            Write-Host "  [SKIP] $($file.Name) - Target file already exists" -ForegroundColor Yellow
            continue
        }

        # Rename the file
        Rename-Item -Path $file.FullName -NewName $newName -ErrorAction Stop
        Write-Host "  [OK] $($file.Name) -> $newName" -ForegroundColor Green
        $successCount++
    }
    catch {
        Write-Host "  [ERROR] Failed to rename $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        $errorCount++
    }
}

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Rename Operation Complete" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Successfully renamed: $successCount file(s)" -ForegroundColor Green
if ($errorCount -gt 0) {
    Write-Host "Errors encountered: $errorCount file(s)" -ForegroundColor Red
}
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Run 'npm run dev' to start development server" -ForegroundColor White
Write-Host "  2. Visit project pages to verify images load correctly" -ForegroundColor White
Write-Host "  3. Run 'npm run build' to test production build" -ForegroundColor White
Write-Host ""
