import React from 'react'

function List({people}) {
  return (
    <>
    {
        people.map((person)=>(
            <article className='person' key={person.id}>
        <img src={person.image}></img>
        <div>
            <h4>{person.Name}

            </h4>
            <p>{person.Age}</p>
        </div>


    </article>

        ))
    
}
    </>
  )
}

export default List