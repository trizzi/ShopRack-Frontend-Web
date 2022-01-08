import React from 'react'

function Footerlinks({category}) {
    return (
        <ul className="w-full sm:w-1/2 md:w-1/3">
            <li>{category.title}</li>
            {
                category.items.map((item)=>{
                    <li key={item.text}><a href={item.link}>About</a></li>
                })
            }
        </ul>
    )
}

export default Footerlinks
