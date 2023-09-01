import React from 'react';
import ClientCard from './ClientCard';
import { clients } from '@/constants/static';

const Clients = () => {
  return (
    <div className='w-full p-5 bg-[#23252c]'>
      <div className='w-full mt-10 sm:w-[80%] mx-auto'>
        <h2 className='text-center text-[#ededed] mb-5 text-5xl font-semibold'>
          Recent Clients
        </h2>
        <p className='text-center text-[#f4f4f4]'>
          We worked with the Fortune 500 companies in the USA, Africa, UK,
          Middle East. World&apos;s 4th Strongest Banking Brand, Automobile & IoT
          industry
        </p>
      </div>

      <div className='grid mt-16 grid-cols-1 md:grid-cols-3 gap-4'>
        {clients.map((client, index) => (
          <ClientCard
            key={index}
            title={client.title}
            description={client.description}
            image={client.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
