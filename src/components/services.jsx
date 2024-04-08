'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";

function Services() {
    const [data, setData] = useState([])
    const apidata = async()=>{
      let data = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`)
      data = await data.json()
      setData(data.user.services)
    }
    useEffect(()=>{
      apidata() 
    }
    ,[])

  return (
    <section className="h-full mx-auto pt-4 sm:pt-4 md:px-4 md:py-16">
      <h2 className="text-3xl font-bold text-center mb-8">My Services</h2>
        <ul className="grid grid-cols-2 px-4 lg:grid-cols-3 xl:grid-cols-6 sm:grid-cols-2 gap-8">
          {data.map((service) => (
            <li key={service._id} className="group bg-[rgb(17,42,49)] shadow-md rounded-lg overflow-hidden">
              <Image
                className="w-full h-36 md:h-48 object-cover group-hover:hidden"
                src={service.image.url}
                width={100}
                height={100}
                alt={service.name}
              />
              <div className="p-4 ">
                <p className=" hidden h-44 text-white mb-4 group-hover:block">{service.desc}</p>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="font-bold">Charge: {service.charge}</p>
              </div>
            </li>
          ))}
        </ul>
    </section>
  );
}

export default Services;
