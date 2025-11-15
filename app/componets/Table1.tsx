import { Check, CheckCircle } from '@deemlol/next-icons'
import React from 'react'



const Table1 = () => {
  return (
    <div className="overflow-x-auto m-5 md:m-15 h-[400px] ">
      <table className=" table-auto md:text-lg text-[12px] h-full w-full  border-gray-300">
        <tr className="border-b ">
            <th className=" text-left px-3"><h1 className=" text-left">Tidy Essential</h1></th>
            <th><h1 className="text-left">Essential</h1> </th>
            <th><h1 className="text-left">Premium</h1></th>
            <th><h1 className="text-left">Advanced</h1></th>
        </tr>
        <tr className="border-b">
            <td className="text-gray-900 text-left px-3">Monthly fees</td>
            <td className="text-gray-700 text-left ">$49/mo</td>
            <td className="text-gray-700 text-left ">$79/mo</td>
            <td className="text-gray-700 text-left ">$129/mo</td>
            
        </tr>
        <tr className="border-b">
            <td className="text-gray-900 text-left px-3">Free trial</td>
            <td><CheckCircle color='green' size={20}/></td>
            <td><CheckCircle color='green' size={20}/></td>
            <td><CheckCircle color='green' size={20}/></td>
            
        </tr>
        <tr className="border-b ">
            <td className="text-gray-900 text-left px-3">Startup Plan</td>
            <td><CheckCircle color='green' size={20}/></td>
            <td><CheckCircle color='green' size={20}/></td>
            <td><CheckCircle color='green' size={20}/></td>
        </tr>
        <tr className="border-b ">
            <td className="text-gray-900 text-left px-3">Contributors</td>
            <td className="text-gray-700 text-left ">Up to 2</td>
            <td className="text-gray-700 text-left ">Up to 10</td>
            <td className="text-gray-700 text-left ">Unlimited</td>
        </tr>
        <tr className="border-b">
            <td className="text-gray-900 text-left px-3">Virtual Desk</td>
            <td></td>
            <td><CheckCircle color='green' size={20}/></td>
            <td><CheckCircle color='green' size={20}/></td>
        </tr>
        <tr className="border-b">
            <td className="text-gray-900 text-left px-3">Incoming Transfer</td>
            <td className="text-gray-700 text-left ">20</td>
            <td className="text-gray-700 text-left ">50</td>
            <td className="text-gray-700 text-left ">Unlimited</td>
        </tr>
        <tr className="border-b">
            <td className="text-gray-900 text-left px-3">Automate Tasks</td>
            <td></td>
            <td></td>
            <td><CheckCircle color='green' size={20}/></td>
            
        </tr>
        <tr className="border-b">
            <td className="text-gray-900 text-left px-3 ">Analytics</td>
            <td></td>
            <td></td>
            <td><CheckCircle color='green' size={20}/></td>
        </tr>
      </table>
    </div>
  )
}

export default Table1
