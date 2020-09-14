import React from 'react'

export default function Characters({name,age,bio}) {
    return (
        <article className='media notification is-danger'>
            <div className="media-content">
                <div className='content'>
                    <h1 className='is-size-4'>{name}</h1>
                    <p className='is-size-5'>{age}</p>
                    <p>{bio}</p>
                </div>
            </div>
        </article>
    )
  }