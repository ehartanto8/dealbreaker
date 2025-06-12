'use client'

import { useState } from 'react'

export default function ClientParcelTable({ parcels }: { parcels: any[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [aiSummary, setAiSummary] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const toggle = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const analyze = async () => {
    const selectedParcels = parcels.filter((p, idx) =>
      selected.has(p.properties.parcel_id || `${idx}`)
    )

    setAiSummary('Analyzing...')
    setLoading(true)

    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ parcels: selectedParcels }),
    })

    const json = await res.json()
    setAiSummary(json.summary)
    setLoading(false)
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Deal Breaker</h1>

      <table className="w-full text-sm bg-white shadow rounded-lg border">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-2">Select</th>
            <th className="p-2">Address</th>
            <th className="p-2">County</th>
            <th className="p-2">Zoning</th>
            <th className="p-2">Acres</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((p: any, idx: number) => {
            const id = p.properties.parcel_id || `idx-${idx}`
            const fields = p.properties.fields

            return (
              <tr key={id} className="border-b hover:bg-gray-50">
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selected.has(id)}
                    onChange={() => toggle(id)}
                  />
                </td>
                <td className="p-2">{fields?.full_address ?? '—'}</td>
                <td className="p-2">{fields?.county ?? '—'}</td>
                <td className="p-2">{fields?.zoning ?? '—'}</td>
                <td className="p-2">{fields?.ll_gisacre?.toFixed(2) ?? '—'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={selected.size === 0 || loading}
        onClick={analyze}
      >
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>

      {aiSummary && (
        <div className="mt-6 p-4 border rounded bg-yellow-50 whitespace-pre-wrap">
          <h2 className="text-lg font-semibold mb-2">Strategic Summary</h2>
          <p>{aiSummary}</p>
        </div>
      )}
    </main>
  )
}
