import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const { parcels } = await req.json()

  const summaryPrompt = `
You are a senior land development analyst.

Do NOT use LaTeX or math formatting symbols like \\[ or \\text{}.
Write all numbers and formulas in plain English and numbers.

For each parcel below, estimate:
- Development potential (assume 2.5 lots/acre)
- Gross potential revenue (assume $725K per home)
- Construction cost ($200K per unit)
- Zoning flags
- Recommend: develop, hold, or avoid

Parcels:
${parcels.map((p: any, i: number) => {
  const f = p.properties.fields
  return `Parcel ${i + 1}:
  Address: ${f?.full_address}
  County: ${f?.county}
  Zoning: ${f?.zoning}
  Acres: ${f?.ll_gisacre}
  Sale Price: $${f?.saleprice}
  Owner: ${f?.owner}`
}).join('\n\n')}
`

  const chat = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are a real estate investment analyst.' },
      { role: 'user', content: summaryPrompt },
    ],
  })

  return NextResponse.json({
    summary: chat.choices[0].message.content,
  })
}
