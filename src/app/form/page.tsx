"use client"

import Link from "next/link"

import { siteConfig } from "../../config/site"
import {useState} from 'react'
import { cn } from "../../lib/utils"
import { buttonVariants } from "../../components/ui/button"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Combobox } from "../../components/ui/combobox"
import { Icons } from "../../components/icons"
import { NextResponse } from "next/server"

const images: Option[] = [
  {
    value: "Alpine",
    label: "Alpine",
  },
  {
    value: "nginx",
    label: "nginx",
  },
  {
    value: "busybox",
    label: "busybox",
  },
  {
    value: "ubuntu",
    label: "ubuntu",
  },
  {
    value: "redis",
    label: "redis",
  },
  {
    value: "postgres",
    label: "postgres",
  },
  {
    value: "python",
    label: "python",
  },
  {
    value: "node",
    label: "node",
  },
  {
    value: "mysql",
    label: "mysql",
  },
  {
    value: "httpd",
    label: "httpd",
  },
  {
    value: "mongo",
    label: "mongo",
  },
  {
    value: "golang",
    label: "golang",
  },
  {
    value: "centos",
    label: "centos",
  },
  {
    value: "debian",
    label: "debian",
  },
  {
    value: "wordpress",
    label: "wordpress",
  },
]

export default function Submit() {
  
  const code2: string = `print("success")`
  const code: string = `V, E = map(int, input().split())

  graph = {

  }

  connected = set()

  for _ in range(E):

      node, conn = map(int, input().split())

      if node not in graph:

          graph[node] = []

      if conn not in graph:

          graph[conn] = []

      graph[node].append(conn)

      graph[conn].append(node)

  print(graph)

  def solve(root):

      stack = [root]

      visited = {root}

      groupA = {root}

      groupB = set()

      while stack:

          node = stack.pop()

          for neighbor in graph.get(node, []):

              if node in groupA:

                  groupB.add(neighbor)

              elif node in groupB:

                  groupA.add(neighbor)

              if (neighbor in groupA) and (neighbor in groupB):

                  return False

              if neighbor not in visited:

                  visited.add(neighbor)

                  connected.add(neighbor)

                  stack.append(neighbor)

      return True

  allNodes = graph.keys()

  for node in allNodes:

      if node not in connected:

          res = solve(node)

          if res == False:

              break

  print(res)`

  const [data, setData] = useState<string | Response>();
  const [submission, setSubmission] = useState();
  
  const handleSubmissionChange = (event) => {
      setSubmission(event.target.value);
  };

  function submitCode(data: string) {
  try { 
    fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then((res) => { setData(res); console.log(res)});
    } catch(error) {
      console.log("error in submitting code: ", error) 
    }
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.container className="h-32 w-32" />
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <h2 className="text-4xl font-bold">Bipartite Graph Detection</h2>
        <p className="max-w-[38rem] leading-normal text-muted-foreground sm:text-3xl sm:leading-8">
          A bipartite graph is a graph where the vertices can be partitioned in two sets where any edge has an vert in A and a vert in B. Saying it another way, if two verts are in A there cannot be an edge between them and the same is true for B.
          Give a graph with the following inpuit, determine if it is bipartite:

          Input:

          The first line of input contains two integers 
          V E, where 
           V is the number of vertices and 
           E is the number of edges. 

          The following E lines, each containing a pair of vertices meaning there is an edge between those verts.

          Example

          4 3
          1 2 
          2 4
          3 4

          means a graph that looks like (see below)

          Output:

          Write "bipartite" if the given graph is bipartite, "not bipartite" if not
        </p>

        <div className="flex flex-col items-center justify-center gap-2">
          
          <Textarea placeholder="Enter solution here"
            value={submission}
            onChange={handleSubmissionChange}
            rows={25} // Adjust this as needed
            cols={50} // Adjust this as needed
          ></Textarea>
          <Button onClick= {() => submitCode(submission)} >Submit</Button>
          
          {//example for combobox 
          /*
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Choose a disk image for your docker container
          </p>
          <Combobox 
            options = {images}
            subject = "images"/> 
        */}
        </div>
      </div>
    </main>
  )
}
