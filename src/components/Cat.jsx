import React from 'react'
import '../sass/cat.scss'

export const Cat = () => {
    const imagesContainer = [
        {pic:"slide/Slide1.JPG",alt:""},
        {pic:"slide/Slide2.JPG",alt:""},
        {pic:"slide/Slide3.JPG",alt:""},
        {pic:"slide/Slide4.JPG",alt:""},
        {pic:"slide/Slide5.JPG",alt:""},
        {pic:"slide/Slide6.JPG",alt:""},
        {pic:"slide/Slide7.JPG",alt:""},
        {pic:"slide/Slide8.JPG",alt:""},
        {pic:"slide/Slide9.JPG",alt:""},
        {pic:"slide/Slide10.JPG",alt:""},
        {pic:"slide/Slide11.JPG",alt:""},
        {pic:"slide/Slide12.JPG",alt:""},
        {pic:"slide/Slide13.JPG",alt:""},
        {pic:"slide/Slide14.JPG",alt:""},
        {pic:"slide/Slide15.JPG",alt:""},
        {pic:"slide/Slide16.JPG",alt:""},
        {pic:"slide/Slide17.JPG",alt:""},
        {pic:"slide/Slide18.JPG",alt:""},
        {pic:"slide/Slide19.JPG",alt:""},
        {pic:"slide/Slide20.JPG",alt:""},
        {pic:"slide/Slide21.JPG",alt:""},
    ]
  return (
    <>
      {
        imagesContainer.map((i,index)=>(
            <div className="image" key={index} >
                <img src={i.pic} alt={i.alt} />
            </div>
        ))
      }
    </>
  )
}
