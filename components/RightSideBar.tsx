import React from 'react'
import Header from './Header'

const RightSideBar = () => {
  return (
    <section className="right_sidebar h-[calc(100vh-5px)]">
        <section>
            <Header headerTitle="Fans Like You" />
        </section>
    </section>
  )
}

export default RightSideBar