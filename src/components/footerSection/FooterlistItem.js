import React from 'react'

function FooterlistItem({category}) {
    return (
        <ul className="flex flex-col md:mt-20 lg:mt-0">
            <li className=" lg:text-2xl mb-3 md:mb-7 font-bold whitespace-nowrap">{category.title}</li>
            {
                category.items.map((item)=> (
                    <li key={item.text}  className="pt-2"><a href={item.link}> {item.text} </a></li> 
                ))
            }
        </ul>
    )
}

export default FooterlistItem