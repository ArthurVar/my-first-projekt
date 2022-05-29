import React, { Children, cloneElement, useEffect, useState } from "react";
import c from './ImageSlider.module.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
const PAGE_WIDTH = 900
export const Carousel = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        console.log('handleLeftArrowClick')

        setOffset((currentOffset)=>{
            const newOffset = currentOffset + PAGE_WIDTH

            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        console.log('handleRightArrowClick')

        setOffset((currentOffset)=>{
            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

            return Math.max(newOffset, maxOffset)
        })
    }

    
    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })
            })
        )
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <div className={c.main_container}>
            <FaChevronLeft className={c.arrow} onClick={handleLeftArrowClick}/>
           <div className={c.window}>
               <div className={c.all_pages_container} 
               style = {{
                   transform:`translatex(${offset}px)`
               }}>
                   {pages}

                </div>
           </div>
           <FaChevronRight className={c.arrow} onClick={handleRightArrowClick}/>
        </div>

    )
}

