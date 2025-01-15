import { treatmentTypesData } from '@/data/data';
import Image from 'next/image';
import React from 'react';

const TreatmentTypes = () => {
    return (
        <main className="container max-w-screen-2xl horizantalPadding mx-auto topBottomPadding bg-white gap-4">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 border-lightBlack border-t'>
                {treatmentTypesData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white border-l border-b rounded-es-[70px] border-lightBlack p-7"
                    >
                        <div>
                            <h2 className="text-2xl lg:text-4xl text-gray-700 font-bold">
                                {item.title}
                            </h2>
                        </div>

                        {/* Image */}
                        <div className="mt-3 flex items-center justify-between">
                            <p className="flex-1 text-3xl text-gray-500">{index + 1}</p>
                            <div className='flex-1'>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default TreatmentTypes;
