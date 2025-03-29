// components/CardListSection.js

import { Button } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';

const CardListSection = ({ cards, backgroundColor = 'bg-primary-bg' }) => {
  return (
    <div className={`${backgroundColor} py-16`}>
      <div className={`container max-w-[1300px] mx-auto px-4`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-16">
          {cards.map((card, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden bg-white relative pb-2">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl mb-2">{card.title}</h2>
                <p className="text-gray-700 mb-4">{card.description}</p>
                <Link href={card.link} className='absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#764d28] text-white px-4 py-1 rounded-t-xl text-lg header-font'>
                  {card.linkText || 'Цялата информация'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardListSection;
