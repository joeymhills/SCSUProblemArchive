"use client"

import {useState} from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Submit() {
  
  const [data, setData] = useState<string | Response>();
  const [result, setResult] = useState<string>();
  
  //handles submission text state and the functino for modifying it
  const [submission, setSubmission] = useState('');
  const handleSubmissionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSubmission(event.target.value);
  };
  
  //API call to submit code and await the results
  async function submitCode(data: string) {
  try { 
    
    const response = await fetch('/submit', { method: 'POST', headers: {'Content-Type': 'application/json',}, body: JSON.stringify(data)})
    const body = await response.json(); 
    setResult(body.result);
    } catch(error) {
      console.log("error in submitting code: ", error) 
    }
  }

  return (
    <main className="flex h-screen justify-center">
      <div className="container flex pt-10 max-w-[64rem] flex-col items-center gap-10 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          Bipartite Graph Detection
        </h1>
        {/* problem description */}
        <p className="max-w-[38rem] leading-normal text-muted-foreground sm:text-3xl sm:leading-8">
          A bipartite graph is a graph where the vertices can be partitioned in two sets where any edge has an vert in A and a vert in B. Saying it another way, if two verts are in A there cannot be an edge between them and the same is true for B.
          Give a graph with the following input, determine if it is bipartite:

        </p>
        
        {/* sample input */}

        <p className="max-w-[38rem] leading-normal text-muted-foreground sm:text-3xl sm:leading-8">
          Input:<br/>

          The first line of input contains two integers 
          V E, where V is the number of vertices and E is the number of edges.<br/>

          The following E lines, each containing a pair of vertices meaning there is an edge between those verts.<br/>

          Example<br/>

          4 3<br/>
          1 2<br/>
          2 4<br/>
          3 4<br/>

          means a graph that looks like (see below)
          </p>
        {/*Sample output*/}
        <p className="max-w-[38rem] leading-normal text-muted-foreground sm:text-3xl sm:leading-8">
          Output:<br/>

          Write 'bipartite' if the given graph is bipartite, 'not bipartite' if not
        </p>

        <p className="max-w-[38rem] leading-normal text-muted-foreground sm:text-3xl sm:leading-8">
          {result ? (
          <p>{result} test cases passed</p>) :
          (<p> </p>)
          }
        </p>

        <div className="flex flex-col items-center justify-center gap-2">
          
          <Textarea placeholder="Enter solution here"
            value={submission}
            onChange={handleSubmissionChange}
            rows={25} // Adjust this as needed
            cols={50} // Adjust this as needed
          ></Textarea>
          <Button className = "my-2 mb-16" onClick= {() => submitCode(submission)} >Submit</Button>

        </div>
      </div>
    </main>
  )
}
