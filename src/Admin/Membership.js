import React from 'react';
import './css/PageSettings.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Membership = () => {
    const [openDiv, setOpenDiv] = React.useState(false)
    const [openSecond, setOpenSecond] = React.useState(false)
    const [type, setType] = React.useState()
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChangee = (newValue) => {
        setValue(newValue);
    };

    const handleChange = (event) => {
        setType(event.target.value);
    };
    return (
        <div className='page-settings'>
            <h3>Membership & Discounts</h3>
            <div className='page-add'>
                <div onClick={() => {
                    setOpenDiv(!openDiv)
                }} className='page-add-button'>
                    <Button style={{ margin: '5px', width: '260px' }} >
                        <AddCircleIcon />
                        Add Package
                    </Button>
                </div>
                {
                    openDiv ? (
                        <div className='add-hotels'>
                            <div style={{ width: '50%' }}>
                                <TextField style={styles.inputs}
                                    id="name" label="Package Name" variant="standard" />
                                <TextField style={styles.inputs}
                                    id="price" label="Package Price" variant="standard" />
                                <TextField style={styles.inputs}
                                    id="period" label="Time Period" variant="standard" />
                            </div>
                            <div style={{ width: '45%', marginLeft: '5%' }}>
                                <TextField style={{ margin: '5px' }}
                                    id="night" label="Total Night Can Spend" variant="standard" />
                                <TextField style={{ margin: '5px' }}
                                    id="hotel" label="Total Hotel Can Access" variant="standard" />
                                <TextField style={{ margin: '5px' }}
                                    id="account" label="Total Family Members" variant="standard" />

                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={type}
                                        onChange={handleChange}
                                        label="Type"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'gold'}>Gold</MenuItem>
                                        <MenuItem value={'silver'}>Silver</MenuItem>
                                        <MenuItem value={'platinum'}>Platinum</MenuItem>
                                        <MenuItem value={'diamond'}>Diamond</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </div>
            <div className='page-add'>
                <div onClick={() => {
                    setOpenSecond(!openSecond)
                }} className='page-add-button'>
                    <Button style={{ margin: '5px', width: '260px' }}>
                        <AddCircleIcon />
                        Add Offer on Package
                    </Button>
                </div>
                {
                    openSecond ? (
                        <div className='add-hotels'>
                            <div style={{ width: '50%' }}>
                                <TextField style={styles.inputs}
                                    id="name" label="Package Name" variant="standard" />
                                <TextField style={styles.inputs}
                                    id="price" label="Package Price" variant="standard" />

                            </div>
                            <div style={{ width: '45%', marginLeft: '5%' }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            label="Ending Date"
                                            inputFormat="MM/dd/yyyy"
                                            value={value}
                                            onChange={handleChangee}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={type}
                                        onChange={handleChange}
                                        label="Type"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'gold'}>Gold</MenuItem>
                                        <MenuItem value={'silver'}>Silver</MenuItem>
                                        <MenuItem value={'platinum'}>Platinum</MenuItem>
                                        <MenuItem value={'diamond'}>Diamond</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </div>
            <div className='page-div'>
                <p>1</p>
                <p>Lorem Ipsum is simply dummy text </p>
                <Button style={{ margin: '5px', width: '200px', height: '40px' }}
                    variant="outlined" >
                    <DeleteIcon />
                    Delete
                </Button>
            </div>
            <div className='page-div'>
                <p>1</p>
                <p>Lorem Ipsum is simply dummy text of </p>
                <Button style={{ margin: '5px', width: '200px', height: '40px' }}
                    variant="outlined" >
                    <DeleteIcon />
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default Membership;
const styles = {
    inputs: {
        margin: '2%',
        width: '96%',
    }
}