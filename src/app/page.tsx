import ClientParcelTable from './ClientParcelTable'
import { fetchParcels } from '@/lib/regrid'

export default async function Page() {
  const parcels = await fetchParcels(25)
  return <ClientParcelTable parcels={parcels} />
}
