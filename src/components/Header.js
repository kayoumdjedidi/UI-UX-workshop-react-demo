import React, {useState} from 'react'
import {Row, FormControl as Control, InputGroup, Form} from 'react-bootstrap'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {Link} from 'react-router-dom'

function Header() {
  const [currency, setCurrency] = useState('USD')
  const [language, setLanguage] = useState('EN')
  const [keyword, setKeyword] = useState()

  return (
    <header>
      <Row className='header-top'>
        <img src='/images/logo.png' />
        <Row className='search'>
          <InputGroup className='mb-2'>
            <InputGroup.Text>
              Products
            </InputGroup.Text>
            <Control
              type='text'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            ></Control>
            <InputGroup.Text>
              Search
            </InputGroup.Text>
          </InputGroup>
          <div></div>
        </Row>
        <Row>
          <FormControl variant='standard' sx={{m: 1, minWidth: 120}}>
            <InputLabel id='select-dropdown'>Currency</InputLabel>
            <Select
              labelId='select-dropdown'
              id='select'
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              label='Currency'
            >
              <MenuItem value='USD'>USD</MenuItem>
              <MenuItem value='TND'>TND</MenuItem>
              <MenuItem value='EU'>EU</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant='standard' sx={{m: 1, minWidth: 120}}>
            <InputLabel id='select-dropdown-lan'>Language</InputLabel>
            <Select
              labelId='select-dropdown-lan'
              id='select-lan'
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              label='Currency'
            >
              <MenuItem value='EN'>EN</MenuItem>
              <MenuItem value='AR'>AR</MenuItem>
              <MenuItem value='FR'>FR</MenuItem>
            </Select>
          </FormControl>
          <Link to='/signup' className='button'>
            Signup
          </Link>
          <Link to='/login' className='button-login'>
            Login
          </Link>
        </Row>
      </Row>
      <hr style={{color: 'olive'}} />
    </header>
  )
}

export default Header
