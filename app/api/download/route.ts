import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const file = searchParams.get('file');

  if (!file) {
    return NextResponse.json(
      { error: 'File parameter is required' },
      { status: 400 }
    );
  }

  // Only allow downloading specific files for security
  const allowedFiles = ['SteganographyApp_Installer.zip'];
  if (!allowedFiles.includes(file)) {
    return NextResponse.json(
      { error: 'Invalid file' },
      { status: 403 }
    );
  }

  try {
    const filePath = join(
      process.cwd(),
      'public/source/windows',
      file
    );

    // Security: prevent directory traversal
    if (!filePath.includes('windows')) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 403 }
      );
    }

    const fileBuffer = readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': `attachment; filename="${file}"`,
        'Content-Type': 'application/zip',
      },
    });
  } catch (error) {
    console.log('[v0] Download error:', error);
    return NextResponse.json(
      { error: 'File not found' },
      { status: 404 }
    );
  }
}
