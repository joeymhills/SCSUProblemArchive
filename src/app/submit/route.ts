// app/api/route.js 👈🏽

import { NextResponse, NextRequest } from "next/server";

// To handle a POST request to /api
export async function POST(request: NextRequest) {
  try {  
  const {spawn} = require('child_process');
  
  const pythonCode = await request.json();

  let pythonProcess = spawn('python', ['-c', pythonCode]);
  let dataToSend = '';
  
  pythonProcess.stdin.write(`4 4
1 3
4 3
2 1
1 4`);
  pythonProcess.stdin.end()
  pythonProcess.on('error', (error) => {
      console.error('Python process error:', error);
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }); 
    
  pythonProcess.stderr.on('data', (data) => {
      console.error('Python process error:', data.toString());
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  });

  for await (const data of pythonProcess.stdout){
    console.log(data.toString());
    dataToSend += data.toString()
  }
  return NextResponse.json({ message: dataToSend }, { status: 200 });
  
  } catch(error) {
   
    return NextResponse.json({ message: error}, { status: 500 });

  }
}
