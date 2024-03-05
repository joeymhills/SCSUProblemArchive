import { NextResponse, NextRequest } from "next/server";



async function checkSolutions(testCases: Map<string, string>, code: string) {
  let correct = 0;
  
  const keys = Array.from(testCases.keys());
  const values = Array.from(testCases.values());
  
  for (let key in keys){
    
    try {  
      const {spawn} = require('child_process');
      
      let pythonProcess = spawn('python', ['-c', code]);
      
      //pipes test case into stdin
      pythonProcess.stdin.write(keys[key]);
      pythonProcess.stdin.end()
      /*
      pythonProcess.on('error', (error) => {
          console.error('Python process error:', error);
          return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
      }); 
        
      pythonProcess.stderr.on('data', (data) => {
          console.error('Python process error:', data.toString());
          return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
      });
      */
      for await (const data of pythonProcess.stdout){
        
        if (data.toString().replace(/\n/g, '') == values[key]) {
          correct += 1;
        }
      } 
      } catch(error) {
        return error;
      }
    }
    return correct + "/" + testCases.size;
}

export async function POST(request: NextRequest) {
  
    const pythonCode = await request.json();
    let solutionsMap = new Map<string, string>();
    solutionsMap.set(`4 4
1 3
4 3
2 1
1 4`,"not bipartite");

    solutionsMap.set(`3 3
1 3
4 3
1 4`,"not bipartite");

    solutionsMap.set(`2 1
1 2`,"bipartite");

    solutionsMap.set(`9 8
1 6
3 6
1 9
3 7
2 8
4 8
4 9
5 9`,"bipartite");

    solutionsMap.set(`9 8
1 6
3 6
1 9
3 7
2 8
4 8
4 9
5 9
11 12`,"bipartite");
    const solution = await checkSolutions(solutionsMap, pythonCode);
    return NextResponse.json({ result: solution }, { status: 200 });
}
