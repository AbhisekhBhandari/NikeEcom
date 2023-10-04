import { NextRequest, NextResponse } from "next/server"

export async function GET() {

    const data = {
        name:'hello'
    }
   
    return NextResponse.json({ data })
  }