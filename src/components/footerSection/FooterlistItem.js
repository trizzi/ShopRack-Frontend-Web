import React from 'react'

function FooterlistItem({category}) {
    return (
        <ul className="flex flex-col">
            <li className="text-xl md:text-2xl mb-3 md:mb-7 font-bold">{category.title}</li>
            {
                category.items.map((item)=> (
                    <li key={item.text}  className="pt-2"><a href={item.link}> {item.text} </a></li> 
                ))
            }
        </ul>
    )
}

export default FooterlistItem