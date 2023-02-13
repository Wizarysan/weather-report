import { useState, useCallback } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { Input, Button } from 'semantic-ui-react'

const StyledInput = styled(Input)`
    margin-right: 10px
`

const SearchBox: React.FC = () => {
    const [city, changeCity] = useState('')
    const dispatch = useDispatch()

    const searchCity = useCallback((city: string) => {
        changeCity(city)
        dispatch({ type: 'CITY_FETCH_REQUESTED', payload: {cityName: city} })
      }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        
        if (e.key === 'Enter') {
            const { target } = e;
            if(target) searchCity((target as HTMLInputElement).value);
        }
    }; 

    return(
        <div className="">
            <StyledInput 
                placeholder='City'
                value={city} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>changeCity(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>)=>handleKeyDown(e)}
            />
            <Button primary margin={15} onClick={() => searchCity(city)}>Search City</Button>
        </div>
    )
}

export default SearchBox;