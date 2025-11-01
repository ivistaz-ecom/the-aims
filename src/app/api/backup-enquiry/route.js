import { writeFile, readFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

export async function POST(request) {
  try {
    const data = await request.json()

    // Create backup directory if it doesn't exist
    const backupDir = join(process.cwd(), "data", "backups")

    if (!existsSync(backupDir)) {
      await mkdir(backupDir, { recursive: true })
    }

    // Read existing backup file or create new array
    const backupFilePath = join(backupDir, "enquiry_backup.json")
    let backupData = []

    try {
      if (existsSync(backupFilePath)) {
        const existingData = await readFile(backupFilePath, "utf-8")
        backupData = JSON.parse(existingData)
      }
    } catch (readError) {
      console.error("Error reading existing backup:", readError)
      backupData = []
    }

    // Add new entry with timestamp
    const backupEntry = {
      ...data,
      timestamp: new Date().toISOString(),
      savedAt: new Date().toLocaleString(),
    }

    backupData.push(backupEntry)

    // Keep last 10000 entries to avoid file size issues
    if (backupData.length > 10000) {
      backupData = backupData.slice(-10000)
    }

    // Write to file
    await writeFile(
      backupFilePath,
      JSON.stringify(backupData, null, 2),
      "utf-8"
    )

    return Response.json(
      {
        success: true,
        message: "Backup saved successfully",
        entriesCount: backupData.length,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error saving backup:", error)
    return Response.json(
      {
        success: false,
        message: "Failed to save backup",
        error: error.message,
      },
      { status: 500 }
    )
  }
}

// GET endpoint removed - users should not access backup data
// Backup files are for admin/server use only
