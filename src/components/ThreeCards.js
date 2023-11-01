import React from 'react'
import { Core } from '../components';


function ThreeCards({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex flex-col justify-center items-center gap-y-16 pt-8 pb-16">
                    <div className='flex justify-between items-center gap-x-[20px]'>
                        {data?.map((value) =>
                            <Core.Card key={value.id} card2 data={value} />
                        )}
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default ThreeCards