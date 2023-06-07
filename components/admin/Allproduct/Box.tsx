import React from 'react'

type Props = {}

export function Box({}: Props) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800">
    <th
      scope="row"
      className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap"
    >
      {10} order
    </th>
    <td className="px-3 py-4">{10}</td>
    <td className="px-3 py-4">{140}</td>
    <td className="px-3 py-4">10</td>
    <td className="px-3 py-4">remove</td>
  </tr>
  )
}

