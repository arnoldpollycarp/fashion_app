import React from 'react'
import { IoBagOutline, IoCashOutline, IoPeopleOutline, IoBasketOutline } from "react-icons/io5";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function Dashboard() {
  const chartData = [
    {
      month: "Jan",
      expense: 900,
      income: 1200
    },
    {
      month: "Feb",
      expense: 800,
      income: 1200
    },
    {
      month: "Mar",
      expense: 900,
      income: 1300
    },
    {
      month: "Apr",
      expense: 700,
      income: 1300
    },
    {
      month: "May",
      expense: 600,
      income: 1000
    },
    {
      month: "Jun",
      expense: 700,
      income: 1400
    }
  ]
  return (
    <div className='flex flex-col p-4'>
    {/* // transactions stat cards */}
      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <BoxWrapper>
          <div className=' bg-sky-400 rounded-full h-12 w-12 flex items-center justify-center'>
            <IoBagOutline className='text-2xl text-white' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-gray-400'>Stock Available</h1>
            <span className='flex gap-2'><p className='font-extrabold text-2xl'>2,000 </p> <p className='text-red-700'>-30</p></span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className=' bg-green-300 rounded-full h-12 w-12 flex items-center justify-center'>
            <IoCashOutline className='text-2xl text-white' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-gray-400'>Sales Made</h1>
            <span className='flex gap-2'><p className='font-extrabold text-2xl'>$ 4,000 </p> <p className='text-green-700'>+10</p></span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className=' bg-indigo-300 rounded-full h-12 w-12 flex items-center justify-center'>
            <IoPeopleOutline className='text-2xl text-white' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-gray-400'>Clients</h1>
            <span className='flex gap-2'><p className='font-extrabold text-2xl'>200 </p> <p className='text-green-700'>+2</p></span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className=' bg-orange-300 rounded-full h-12 w-12 flex items-center justify-center'>
            <IoBasketOutline className='text-2xl text-white' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-gray-400'>Total Orders</h1>
            <span className='flex gap-2'><p className='font-extrabold text-2xl'>100 </p> <p className='text-green-700'>+20</p></span>
          </div>
        </BoxWrapper>
      </div>

    {/* // transaction chart */}
    <div className='bg-white w-full rounded-md border border-gray-200 flex flex-col flex-1 mt-4 p-4'>
      <strong>Transaction chart</strong>
      <div className='w-full mt-2 flex-1 text-xs'>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart width={500} height={300} data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="expense" fill='##B2B09B' activeBar={<Rectangle fill='##FF6F59' stroke='##060303'/>} />
            <Bar dataKey="income" fill='#79FFD7' activeBar={<Rectangle fill='#EF3054' stroke='#254441'/>} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  )
}

function BoxWrapper({children}) {
  return <div className='bg-white flex items-center gap-4 flex-1 rounded-md shadow-lg border-b-2 border-gray-300 py-2 px-2'>{children}</div>
}
