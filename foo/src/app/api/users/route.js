import { NextResponse } from "next/server"

export function GET () {
    const users  = [
        {
            name: "sheikh abdullah",
            phone: "12222",
            subject: "math"
          },
          {
          
            name: "sheikh ",
            phone: "12ddd222",
            subject: "urdu"
          },
          {
            
            name: " abdullah",
            phone: "2000",
            subject: "che,istry"
          }
        ]
        return NextResponse.json(users)
}