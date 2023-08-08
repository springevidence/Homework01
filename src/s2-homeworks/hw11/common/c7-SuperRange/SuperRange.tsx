import React from 'react'
import {Slider, SliderProps} from '@mui/material'

// type SuperRangePropsType = {
//     onChange: () => void
//
// }
const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
            color: '#8B8B8B', width: '147px', height: '4px'}}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
