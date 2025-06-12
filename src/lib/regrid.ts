import { mockParcels } from './mockParcels'

export async function fetchParcels(limit = 25) {
  return mockParcels.slice(0, limit)
}
