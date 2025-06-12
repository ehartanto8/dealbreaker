// lib/mockParcels.ts

export const mockParcels = [
    {
      type: 'Feature',
      geometry: { type: 'Polygon', coordinates: [] },
      properties: {
        parcel_id: 'vm-201',
        fields: {
          full_address: '12600 Fleetwood Rd, Midland, VA',
          county: 'fauquier',
          zoning: 'RA',
          ll_gisacre: 168.2,
          lat: 38.5978,
          lon: -77.6142,
          owner: 'Fleetwood Land Holdings LLC',
          parval: 5100000,
          saleprice: 5750000,
          saledate: '2023-03-10'
        },
        context: { path: '/us/va/fauquier/midland' }
      }
    },
    {
      type: 'Feature',
      geometry: { type: 'Polygon', coordinates: [] },
      properties: {
        parcel_id: 'vm-202',
        fields: {
          full_address: '5125 Hartwood Rd, Hartwood, VA',
          county: 'stafford',
          zoning: 'A1',
          ll_gisacre: 145.9,
          lat: 38.3771,
          lon: -77.5458,
          owner: 'Hartwood Ridge Estates',
          parval: 4600000,
          saleprice: 4950000,
          saledate: '2022-10-01'
        },
        context: { path: '/us/va/stafford/hartwood' }
      }
    },
    {
      type: 'Feature',
      geometry: { type: 'Polygon', coordinates: [] },
      properties: {
        parcel_id: 'vm-203',
        fields: {
          full_address: '9206 Partlow Rd, Spotsylvania, VA',
          county: 'spotsylvania',
          zoning: 'R1',
          ll_gisacre: 153.3,
          lat: 38.1173,
          lon: -77.6672,
          owner: 'Partlow Reserve Inc.',
          parval: 3800000,
          saleprice: 4250000,
          saledate: '2023-06-17'
        },
        context: { path: '/us/va/spotsylvania/partlow' }
      }
    },
    {
      type: 'Feature',
      geometry: { type: 'Polygon', coordinates: [] },
      properties: {
        parcel_id: 'vm-204',
        fields: {
          full_address: '6100 Wilderness Rd, Locust Grove, VA',
          county: 'orange',
          zoning: 'R',
          ll_gisacre: 161.8,
          lat: 38.3421,
          lon: -77.7693,
          owner: 'Wilderness Development Group',
          parval: 4100000,
          saleprice: 4600000,
          saledate: '2022-09-22'
        },
        context: { path: '/us/va/orange/wilderness' }
      }
    },
    {
      type: 'Feature',
      geometry: { type: 'Polygon', coordinates: [] },
      properties: {
        parcel_id: 'vm-205',
        fields: {
          full_address: '33225 Elk Run Rd, Brandy Station, VA',
          county: 'culpeper',
          zoning: 'RA',
          ll_gisacre: 147.5,
          lat: 38.4879,
          lon: -77.9301,
          owner: 'Elk Run Communities LLC',
          parval: 4000000,
          saleprice: 4420000,
          saledate: '2023-02-15'
        },
        context: { path: '/us/va/culpeper/brandy-station' }
      }
    }
  ];
  