import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm,setSearchterm] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchterm('');
        }
    }
    
    function handleChange(event){
        setSearchterm(event.target.value);
    }

    return (
        <Paper component="form" onSubmit={handleSubmit} sx={{borderRadius: 20, border:'1px solid #e3e3e3', pl:2, boxShadow:'none', mr:{sm:5}}}>
            <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={handleChange} />
            <IconButton type='submit' sx={{p:'10px', color:'red'}}>
                <Search/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar